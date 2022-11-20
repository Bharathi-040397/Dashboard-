import * as queryString from 'querystring'

export type Uuid = string
export type Hash = string
export type Money = number
export type UrlPath<T> = string & { _?: T } // Basically a string.  The second clause is to peg the generic type
export type StaticUrlPath = UrlPath<{}>
export type Image = any
export type StringMap = { [key: string]: string }

export enum AgentType {
  individual = 1,
  entity = 2,
}

export function roundFloat(value: number | undefined): number {
  return value ? parseFloat(value.toFixed(2)) : 0
}

export function toCommaFloat(value: number | undefined): string {
  if (value) {
    const rounded = parseFloat(value.toFixed(2))
    return toCommaNumber(rounded)
  } else {
    return '0'
  }
}

export function getQRUrl(secret: string, email: string): string {
  return `otpauth://totp/EQUA:${email}?secret=${secret}&issuer=EQUA`
}

export const getFirstTwoLetters = (name: string): string => {
  if (!name) return 'Me'
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
}

export const toCommaNumber = (value: number | string) => {
  const parts = value.toString().split('.')
  const first = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  return [first].concat(parts.slice(1)).join('.')
}

export function optionalCommaNumber(value?: number | string): string | undefined {
  return typeof value === 'number' || typeof value === 'string' ? toCommaNumber(value) : undefined
}

export function optionalCommaAmount(value?: number | string): string | undefined {
  if (typeof value === 'number') {
    const rounded = value.toFixed(2)
    return toCommaNumber(rounded)
  } else if (typeof value === 'string') return toCommaNumber(value)
  else return '0'
}

export function getShareClasses(): string[] {
  return [...Array(5).keys()].map((i) => String.fromCharCode(i + 65))
}

export function intStringToNumber(value: string | number): number {
  return typeof value === 'number' ? value : !!value ? parseInt(value.replace(/[$,]/g, '')) : 0
}

// TODO: Deprecated in favor of `floatStringToNumberOrUndefined`
export function floatStringToNumber(value: string | number): number | null {
  return typeof value === 'number' ? value : value ? parseFloat(value.replace(/[$,]/g, '')) : null
}

export function parseOptionalFloat(value: string | number): number | undefined {
  return typeof value === 'number' ? value : value ? parseFloat(value.replace(/[$,]/g, '')) : undefined
}

export function removeMask(value?: string): string | undefined {
  return value?.replace(/[$,]/g, '')
}

export function wrapFunction(callback: any, response?: () => any) {
  return () => {
    callback()
    if (response) return response
  }
}

export function formatBytes(bytes: number, decimals: number = 0) {
  if (bytes == 0) return '0 Bytes'
  const k = 1024
  const dm = decimals <= 0 ? 0 : decimals || 2
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export const isStepComplete = (meta: any) => {
  return !meta.error || meta.error.length === 0 || false
}

export const currentStep = (steps: any, errors: any, meta?: any) => {
  if (Object.keys(errors).length === 0) return true
  if (meta && meta.invalid) return false
  for (const step of steps) {
    if (errors[step] && (!Array.isArray(errors[step]) || (Array.isArray(errors[step]) && errors[step].length > 0))) {
      return false
    }
  }
  return true
}

export const formatFieldPath =
  (formPath: string | undefined) =>
  (fieldName: string): string =>
    formPath ? `${formPath}.${fieldName}` : fieldName

export function formatDate(date: any) {
  const d = new Date(date)
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()
  const year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [month, day, year].join('-')
}

export const isCorrectDateFormat = (date: string): boolean => {
  if (
    date.match(
      /^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/
    )
  ) {
    return true
  }

  return false
}

export function getQueryParams(): any {
  // queryString.parse is supposed to ignore question marks but in some tests question marks were appearing in the
  // parsed key
  return queryString.parse(location.search.replace('?', ''))
}

export function formatQueryString(query: any): string {
  return Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
}

export function genericSum<T>(getter: (value: T) => number): (items: T[]) => number {
  // prettier-ignore
  return items => items
        .map(getter)
        .reduce((a, b) => a + b, 0)
}

export function safeDivide(a: number, b: number): number {
  return b === 0 ? 0 : a / b
}

export function percentage(value: number, total: number): number {
  return safeDivide(value * 100, total)
}

export function percentageString(value: number, total: number, decimalPlaces: number = 2): string {
  const result = percentage(value, total).toFixed(decimalPlaces)

  // Don't display as decimal if the decimal value is zero
  const truncated = result.replace(/\.0+$/, '')
  return truncated + '%'
}

export function filterBy<Data>(filterObject: Data[], filterQuery: { [key: string]: any }): Data[] {
  return filterObject.reduce((aggregateArray: Data[], option: any) => {
    const filtered = Object.keys(filterQuery).every((key: string) =>
      filterQuery[key] ? option[key] === filterQuery[key] : true
    )
    if (filtered) {
      aggregateArray.push(option)
    }
    return aggregateArray
  }, [])
}

export function usdString(value: number, decimalPlaces: number = 4): string {
  const isNegative = value < 0
  const negativePrefix = isNegative ? '- ' : ''
  const result = negativePrefix + '$' + toCommaNumber(Math.abs(value).toFixed(decimalPlaces))
  return decimalPlaces === 2 ? result : result.replace(/\.?0?0?$/, '')
}

export function dollarString(value: number): string {
  const isNegative = value < 0
  const negativePrefix = isNegative ? '- ' : ''
  return negativePrefix + '$' + Math.abs(value).toFixed(2)
}

export function dollarStringFromCents(value: number): string {
  return dollarString(value / 100)
}

export function normalizeDate(value: string | Date | number | undefined | null): Date | undefined {
  if (!value) return undefined
  return typeof value == 'string' ? new Date(value.split('T')[0].replace(/-/g, '/')) : new Date(value)
}

export const defaultPageSize = 25

export const getFieldValues = (fields: string[]) => (object: any) => {
  let result: string[] = []
  for (const field of fields) {
    const path = field.split('.')
    let value = object
    for (const token of path) {
      value = value[token]
      if (!value) break
    }
    result = result.concat(value)
  }
  return result
}

export function resolveObjectByString(path: any, obj = self, separator = '.') {
  const properties = Array.isArray(path) ? path : path.split(separator)
  return properties.reduce((prev: any, curr: any) => prev && prev[curr], obj)
}

export type Transform<T> = (input: T) => T

export function currencyStringToNumber(currencyString?: string | number) {
  if (typeof currencyString === 'number') return currencyString
  return currencyString ? Number(currencyString.replace(/[^0-9\.-]+/g, '')) : null
}

export function getPathArray(pathname: string) {
  return pathname.split('/').filter((i) => i)
}

export const getViewAddress = (addresses: any, type: any) => {
  const current = addresses?.filter((add: any) => add.groups.some((s: any) => s.id === type))[0]
  const withType = addresses?.filter((add: any) => add.groups.length > 0)[0]
  const hasAddress = addresses?.length > 0
  if (current) return current
  else if (withType) return withType
  else if (hasAddress) return addresses[0]
  else return undefined
}

export function daysSince(first: number, second: number = Date.now()): number {
  const oneDay = 24 * 60 * 60 * 1000 // hours * minutes * seconds * milliseconds
  return Math.round(Math.abs((first - second) / oneDay))
}

export let idCounter = 1

export function nextInternalId(): number {
  return idCounter++
}

export let userStateCount = 1

export function nextStateCount(): number {
  return userStateCount++
}

export function resetStateCount(): number {
  return (userStateCount = 1)
}

export interface ChildProps {
  children?: React.ReactNode
}

export function formatImageUrl(image: Hash): string {
  return `/api/v1/file/${image}/content`
}

export function yearsRange(size: number, startAt: number) {
  return [...Array(size).keys()].map((i) => {
    return { value: i + startAt, label: i > 0 ? `${i + startAt} Years` : `${i + startAt} Year` }
  })
}

export function getQueryParamFloat(queryParams: any, key: string): number | undefined {
  const value = queryParams[key]
  return value ? parseFloat(value) : undefined
}

export function getQueryParamInt(queryParams: any, key: string): number | undefined {
  const value = queryParams[key]
  return value ? parseInt(value) : undefined
}

export function matchesPath(path: string, value: string, exact: boolean): boolean {
  const generalized = path.replace(/:\w+/g, '[^/]*?')
  const pattern = `^${generalized}${exact ? '$' : ''}`
  const regex = new RegExp(pattern)
  return !!value.match(regex)
}
