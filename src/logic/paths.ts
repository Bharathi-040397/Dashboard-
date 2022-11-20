import { Hash, UrlPath, Uuid } from '../shared/helpers/util'

export interface UserProps {
  user: string
}
export interface UserUrlProps extends UserProps {
  organization: Uuid
}

// Basic
export const rootPath: UrlPath<{}> = '/'
export const homePath: UrlPath<{}> = '/home'
export const userPath: UrlPath<UserUrlProps> = `${homePath}/user/:user`
