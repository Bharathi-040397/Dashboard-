import styled from "styled-components";
import { screenSizes } from "../../styles/theme";

  export const Wrapper = styled.div`
`
export const BrandsBody = styled.div`
  padding: 150px 8.33%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`

export const Icon = styled.img`
`