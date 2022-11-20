import styled, { css, ThemeProps } from 'styled-components'
import { fontSizes, screenSizes, gapSizes, Theme, colors, Themes, lineHeights } from './theme'
import { rgba } from 'polished'



export const TwoColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${screenSizes.S}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.XL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${screenSizes.S}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${screenSizes.L}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.XL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FourColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${screenSizes.S}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.XL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FiveColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  
  @media (min-width: ${screenSizes.S}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.L}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.XL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(5, 1fr);
  }
`;