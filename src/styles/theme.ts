import { rgba } from 'polished'

export const headerHeight = '56px'

export interface Sizes {
  XXS: number | string
  XS: number | string
  S: number | string
  M: number | string
  L: number | string
  XL: number | string
  XXL: number | string
}

export const gapSizes: Partial<Sizes> = {
  S: '10px',
  M: '20px',
  L: '30px',
  XL: '40px',
  XXL: '50px',
}

export const screenSizes: Partial<Sizes> = {
  XS: 480,
  S: 640,
  M: 800,
  L: 1024,
  XL: 1280,
}

export const fontSizes: Sizes = {
  XXS: '14px',
  XS: '16px',
  S: '18px',
  M: '24px',
  L: '32px',
  XL: '36px',
  XXL: '48px',
}

export const lineHeights: Sizes = {
  XXS: '14px',
  XS: '24px',
  S: '18px',
  M: '24px',
  L: '32px',
  XL: '36px',
  XXL: '48px',
}

export const textAreaSizes = {
  S: '92px',
  M: '108px',
  L: '128px',
}

interface ThemeWithStates {
  [propName: string]: string
}

export interface Colors {
  darkNavy: string
  navy: string
  lightNavy: string
  white: string
  gray: string
  error: string
  bannerError: string
  black: string
  green: string
  blueLight: string
  blueMed: string
  blueDark: string
  bannerSuccess: string
  grayDivider: string
  tableHighlight: string
  actionInfo: string
  actionDiagram: string
  dropBack: string
  dropBorder: string
  warning: string
  progressBack: string
  slateGrey: string
  subRow: string
  errorBack: string
  errorRed: string
  lightGrey: string
  darkGrey: string
  fadedGrey: string
}

export const colors: Colors = {
  darkNavy: '#262A36',
  navy: '#2C3040',
  lightNavy: '#394E5B',
  white: '#ffffff',
  gray: '#f4f4f4',
  black: '#000000',
  error: '#D0021B',
  green: '#33AA40',
  blueDark: '#2B3B44',
  blueMed: '#2C3E50',
  blueLight: '#3292C0',
  bannerError: '#FFC6CC',
  bannerSuccess: '#A9F3B0',
  grayDivider: '#435763',
  tableHighlight: rgba('#FFF', 0.1),
  actionInfo: '#4e6370',
  actionDiagram: '#334652',
  dropBack: rgba('#000', 0.05),
  dropBorder: rgba('#000', 0.25),
  warning: '#F5A623',
  progressBack: '#1D202B',
  slateGrey: rgba('#FFF', 0.25),
  subRow: '#374a57',
  errorBack: '#FFD7D7',
  errorRed: '#FF5656',
  lightGrey: '#D9D9D9',
  darkGrey: '#959B9E',
  fadedGrey: rgba(191, 191, 191, 0.4),
}

export interface Theme {
  [propName: string]: string | ThemeWithStates | { [propName: string]: ThemeWithStates } | undefined
  primary: string
  secondary: string
  gray: string
  action: string
  error: string
  boxShadow: string
  white: string
  black: string
  radius: string
  tertiary: string
  chart: string
  header: string
  title: string
  beforeSelected: string
  afterSelected: string
  panelBack: string
  secondaryPanel: string
  subRow: string
  actionsDrop: ThemeWithStates
  tableRow: string
  invertedButton: string
  label: string
  inputBorder: string
  selectorBack: string
  breadcrumb: string
  progressBack: string
  grayDivider: string
  actionInfo: string
  oddRow: string
  scrollBar: string
  disabled: string
  welcomeBack: string
  whiteIcon: string
  boxHover: string
  listText: string
  listDesc: string
  listBack: string
  listCard: string
  listCompleted: string
  listIcon: string
  listBorder: string
  whiteGlove: string
  buttonHover: string
  buttonActive: string
  checkbox: string
  warning: string
  newNav: string
  tableHeader: string
  rowHighlight: string
  inputBack: string
  buttonBack: string
  warningInverted: string
  input: ThemeWithStates
  dock: ThemeWithStates
  tab: ThemeWithStates
  drop: ThemeWithStates
  profileDrop: string
  ellipseOption: string
  modalBack: string
  modalOptionsBack: string
  chartBack: string
  walletBack: string
  walletCat: string
  button: { [propName: string]: ThemeWithStates }
}

export const basicTheme: Theme = {
  primary: rgba('#FFF', 0.05),
  secondary: colors.lightNavy,
  accent: colors.green,
  action: colors.blueDark,
  error: colors.error,
  boxShadow: `${rgba(0, 0, 0, 0.1)} 0px 0px 5px 0px;`,
  highlight: rgba('#FFF', 0.05),
  gray: rgba('#FFF', 0.5),
  white: colors.white,
  black: colors.black,
  radius: '4px',
  tertiary: colors.blueMed,
  chart: colors.blueLight,
  header: '#1F313A',
  title: colors.white,
  beforeSelected: '#9CA6AD',
  afterSelected: rgba('#FFF', 0.5),
  panelBack: rgba('#FFF', 0.05),
  secondaryPanel: '#30424D',
  subRow: colors.subRow,
  actionsDrop: { default: '#435763', hover: '#476171' },
  tableRow: rgba('#FFF', 0.05),
  invertedButton: colors.blueDark,
  label: colors.white,
  inputBorder: colors.white,
  selectorBack: colors.tableHighlight,
  breadcrumb: '#9CA6AD',
  progressBack: colors.progressBack,
  grayDivider: colors.grayDivider,
  actionInfo: colors.actionInfo,
  oddRow: rgba('#FFF', 0.05),
  scrollBar: colors.blueMed,
  disabled: colors.fadedGrey,
  welcomeBack: '#1F313A',
  whiteIcon: colors.white,
  boxHover: '#416171',
  listText: colors.white,
  listDesc: '#9CA6AD',
  listBack: '#263946',
  listCard: colors.lightNavy,
  listCompleted: '#263946',
  listIcon: colors.white,
  listBorder: rgba('#CEDAE1', 0.3),
  whiteGlove: colors.grayDivider,
  buttonHover: '#476171',
  dropHover: '#30424D',
  buttonActive: rgba('#30424D', 0.6),
  checkbox: '#2B3D47',
  warning: '#F5A623',
  newNav: '#435763',
  tableHeader: '#283840',
  rowHighlight: '#283840',
  inputBack: '#30424D',
  buttonBack: colors.grayDivider,
  warningInverted: '#283840',
  input: { default: '#30424D', basic: '#2B3D47', disabled: rgba('#516F77', 0.1) },
  dock: { default: '#394E5B', hover: '#2B3D47', disabled: rgba('#516F77', 0.1) },
  tab: { default: '#394E5B', hover: '#30424D', disabled: rgba('#516F77', 0.1) },
  drop: { options: '#1F313A', back: '#1F313A', text: '#FFFFFF', selected: '#262626' },
  profileDrop: '#30424D',
  ellipseOption: '#1F313A',
  modalBack: '#1F313A',
  modalOptionsBack: '#30424D',
  chartBack: colors.blueDark,
  walletBack: '#30424D',
  walletCat: '#3B515E',
  button: {
    primary: { default: colors.green, hover: '#0E7923', submitting: '#007A0F', disabled: rgba('#33BB40', 0.32) },
    inverted: {
      default: '#283840',
      hover: '#2B3D47',
      submitting: '#30424D',
      hoverColor: '#0E7923',
      disabled: rgba(81, 111, 119, 0.101961),
    },
    cancel: { default: '#435763', hover: '#476171', submitting: '#30424D', disabled: rgba('#516F77', 0.1) },
    error: { default: colors.errorRed, hover: '#CC4545', disabled: rgba('#516F77', 0.1) },
    warning: {
      default: '#F5A623',
      hover: '#F17C15',
      submitting: '#C35B00',
      text: '#262626',
      disabled: rgba('#516F77', 0.1),
    },
    warningI: { default: '#283840', hover: '#2B3D47', submitting: '#30424D', disabled: rgba('#516F77', 0.1) },
  },
}

export const lightTheme: Theme = {
  primary: rgba('#f2f2f2', 1),
  secondary: rgba('#f2f2f2', 1),
  accent: colors.green,
  action: rgba('#394E5B', 0.1),
  error: colors.error,
  boxShadow: `${rgba(0, 0, 0, 0.1)} 0px 0px 5px 0px;`,
  highlight: rgba('#394E5B', 0.5),
  gray: rgba('#FFF', 0.5),
  white: '#262626',
  black: colors.black,
  radius: '4px',
  tertiary: colors.white,
  chart: colors.blueLight,
  header: '#FAFAFA',
  text: colors.darkNavy,
  title: colors.lightNavy,
  afterSelected: rgba('#394E5B', 0.5),
  beforeSelected: '#9CA6AD',
  panelBack: '#FAFAFA',
  secondaryPanel: '#CEDAE1',
  subRow: rgba('#000000', 0.05),
  actionsDrop: { default: '#F2F2F2', hover: '#92AABA' },
  tableRow: colors.white,
  invertedButton: colors.white,
  label: '#262626',
  inputBorder: colors.dropBorder,
  selectorBack: rgba('#394E5B', 0.1),
  breadcrumb: colors.lightNavy,
  progressBack: colors.lightNavy,
  grayDivider: rgba('#394E5B', 0.1),
  actionInfo: colors.white,
  oddRow: rgba('#000000', 0.1),
  scrollBar: rgba('#000000', 0.2),
  disabled: rgba(colors.darkNavy, 0.6),
  welcomeBack: colors.white,
  whiteIcon: '#9CA6AD',
  boxHover: rgba('#30424D', 0.3),
  listText: '#262626',
  listDesc: '#9CA6AD',
  listBack: '#F9F9FA',
  listCard: '#F2F2F2',
  listCompleted: '#F9F9FA',
  listIcon: '#9CA6AD',
  listBorder: rgba('#CEDAE1', 0.3),
  whiteGlove: '#638599',
  buttonHover: '#92AABA',
  dropHover: '#CEDAE1',
  buttonActive: rgba('#B0C3D0', 0.6),
  checkbox: '#B4B4BB',
  warning: '#F5A623',
  newNav: colors.white,
  tableHeader: '#F7F9FA',
  rowHighlight: 'linear-gradient(0deg, rgba(51, 187, 64, 0.3216), rgba(51, 187, 64, 0.3216)), #FFFFFF',
  inputBack: colors.white,
  buttonBack: '#F2F2F2',
  warningInverted: '#FAFAFA',
  input: { default: '#FFFFFF', basic: '#FFFFFF', disabled: rgba('#FFFFFF', 0.1) },
  dock: { default: '#394E5B', hover: 'transparent', disabled: rgba('#516F77', 0.1) },
  tab: { default: '#394E5B', hover: '#F0F0F1', disabled: rgba('#516F77', 0.1) },
  drop: { options: '#FAFAFA', back: '#FFFFFF', text: '#FFFFFF', selected: '#CEDAE1' },
  profileDrop: '#30424D',
  ellipseOption: '#FAFAFA',
  modalBack: '#F5F5F5',
  modalOptionsBack: '#FBFBFB',
  chartBack: colors.white,
  walletBack: '#FBFBFB',
  walletCat: '#F0F0F1',
  button: {
    primary: { default: colors.green, hover: '#0E7923', submitting: '#007A0F', disabled: rgba('#33BB40', 0.32) },
    inverted: {
      default: '#FAFAFA',
      hover: '#FAFAFA',
      submitting: '#B0C3D0',
      hoverColor: '#0E7923',
      disabled: rgba(81, 111, 119, 0.101961),
    },
    cancel: { default: rgba('#638599', 0), hover: '#92AABA', submitting: '#B0C3D0', disabled: rgba('#516F77', 0.1) },
    error: { default: colors.errorRed, hover: '#CC4545', disabled: rgba('#516F77', 0.1) },
    warning: {
      default: '#F5A623',
      hover: '#F17C15',
      submitting: '#C35B00',
      text: '#262626',
      disabled: rgba('#516F77', 0.1),
    },
    warningI: { default: '#FAFAFA', hover: '#FAFAFA', submitting: '#B0C3D0', disabled: rgba('#516F77', 0.1) },
  },
}

export enum Themes {
  BASIC,
  LIGHT,
}

export const getTheme = (theme: Themes) => {
  switch (theme) {
    case Themes.BASIC:
      return basicTheme
    case Themes.LIGHT:
      return lightTheme
    default:
      return basicTheme
  }
}
