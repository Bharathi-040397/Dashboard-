import styled from 'styled-components'
import { screenSizes } from '../../styles/theme'

export const Wrapper = styled.div``

export const ServiceBody = styled.div`
  padding: 0 8.33% 150px;
  text-align: center;
  @media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`
export const HeadingBox = styled.div`
  width: 470px;
  margin: 0 auto 50px;
`

export const Heading = styled.p`
  font-family: 'InterBold';
  font-weight: 700;
  font-size: 50px;
  text-align: center;
  letter-spacing: 0.005em;
  text-transform: capitalize;
  color: #000000;
  line-height: 125%;
`
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
