import styled from 'styled-components'
import { Button } from '../../../../shared/button/style'
import { screenSizes } from '../../../../styles/theme'

export const Wrapper = styled.div`
  background: transparent;
  margin-bottom: 138px;
`

export const NavbarBody = styled.div`
  width: 1200px;
  height: 42px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`

export const NavLeft = styled.div`
  font-family: 'InterSemiBold';
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`

export const NavCenter = styled.div`
  width: 477px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const NavLink = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.32px;
  color: #ffffff;
`

export const ButtonBox = styled(Button)`
  background: #ffffff;
  border-radius: 50px;
  width: 123px;
  height: 42px;
  padding: 12px 15px;
  font-family: 'InterSemiBold';
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.408px;
  color: #000000;
`

