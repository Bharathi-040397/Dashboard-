import { createGlobalStyle, ThemeProps, css } from 'styled-components'
import { fontSizes, gapSizes, screenSizes, Theme } from './theme'
import Inter from '../assets/fonts/Inter/static/Inter-Regular.ttf'
import InterMedium from '../assets/fonts/Inter/static/Inter-Medium.ttf'
import InterBlack from '../assets/fonts/Inter/static/Inter-Black.ttf'
import InterLight from '../assets/fonts/Inter/static/Inter-Light.ttf'
import InterExtraLight from '../assets/fonts/Inter/static/Inter-ExtraLight.ttf'
import Bold from '../assets/fonts/Inter/static/Inter-Bold.ttf'
import InterSemiBold from '../assets/fonts/Inter/static/Inter-SemiBold.ttf'
import InterExtraBold from '../assets/fonts/Inter/static/Inter-ExtraBold.ttf'

import { rgba } from 'polished'

export const LinkStyle = css`
  color: ${(props) => props.theme.accent};
  cursor: pointer;
`

export const GlobalStyle = createGlobalStyle`
  :root{
    transition: margin 300ms ease-in-out;
    --pageMargin: 80px;
    @media (max-width: ${screenSizes.L}px) {
      --pageMargin: 40px;
    }
    @media (max-width: ${screenSizes.M}px) {
      --pageMargin: 20px;
    }
  }
  /* @font-face {
    font-family: Inter;
    src: url(${Inter}); // 400
  } 
  @font-face {
    font-family: InterMedium;
    src: url(${InterMedium}); // 500
  } 
  @font-face {
    font-family: InterSemiBold ;
    src: url(${InterSemiBold}); // 600
  }
  @font-face {
    font-family: InterBold;
    src: url(${Bold}); // 700
  }
 
  @font-face {
    font-family: InterExtraBold;
    src: url(${InterExtraBold}); // 800
  }
  @font-face {
    font-family: InterBlack;
    src: url(${InterBlack});
  }
  @font-face {
    font-family: InterLight;
    src: url(${InterLight});
  }
  @font-face {
    font-family: InterExtraLight;
    src: url(${InterExtraLight});
  }
   */
  h1,h2,h3,h4{
    margin: 0;
  }
 
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffff;
    /* background-color: ${(props) => props.theme.secondary}; */
  }
  html,
  body {
    font-size: 16px;
    height: 100%;
    scroll-behavior: smooth;
    width: 100%;
  }
  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    /* background-color: ${(props: ThemeProps<Theme>) => props.theme.secondary}; */
    background-color: #ffff;
  }
  *::-webkit-scrollbar {
    width: 12px;
    background-color: ${rgba(81, 111, 119, 0.101961)};
    border-radius: 4px;
  }
  *::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    /* background-color: #9CA6AD; */
    border-radius: 20px;
    background-clip: content-box;
  }
  #root{
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    max-width: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: 'Inter';
  }
  a{
    font-family: 'InterSemiBold';
    text-decoration: none;
    color: ${(props: ThemeProps<Theme>) => props.theme.white};
  }
  label {
    font-size: ${fontSizes.XS};
    position: relative;
    color: ${(props) => props.theme.label};
  }
  input:disabled ~ label{
   color: red;
  }
  input[type="checkbox"] {
  -webkit-appearance: radio;
  -moz-appearance: radio;
  -ms-appearance: radio; 
  }
  
  button {
    font-size: 16px;
    margin: 0;
    padding: 8px 12px;
  }
  hr {
    background-color: ${(props) => rgba(props.theme.white, 0.2)};
    border: 0;
  }
  a {
    ${LinkStyle};
  }
  a.disabled {
    pointer-events: none;
  }
  svg{
    overflow: visible;
    + span {
      margin-left: ${gapSizes.S};
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`
