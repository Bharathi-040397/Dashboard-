import styled from 'styled-components'
import { Button } from '../../../../shared/button/style'
import { screenSizes } from '../../../../styles/theme'

export const Wrapper = styled.div`
  background: #040335;
`
export const FooterBody = styled.div`
`

export const FooterTop = styled.div`
  width: 817px;
  padding: 67px 0;
  margin: 0 auto;
  text-align: center;
`

export const HeadingBox = styled.div`
  margin-bottom: 40px;
`

export const Heading = styled.p`
  font-family: 'InterExtraBold';
  font-weight: 800;
  font-size: 60px;
  line-height: 67px;
  text-align: center;
  color: #ffffff;
`
export const ButtonBox = styled(Button)`
  background: #ffffff;
  border-radius: 500px;
  width: 225px;
  height: 67px;
  font-family: 'InterBold';
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0f0bc7;
`
export const Border = styled.div`
  background: #ffffff;
  opacity: 0.4;
  height: 1px;
  width: 100%;
`
export const FooterMiddle = styled.div`
  padding: 53px 8.4%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const LeftBox = styled.div`
width: 189px;
`

export const LeftHeading = styled.p`
font-family: 'InterBold';
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #FFFFFF;
margin-bottom: 18px;
`

export const Content = styled.p`
  font-family: 'Inter';
font-weight: 400;
font-size: 18px;
line-height: 150%;
letter-spacing: -0.02em;
color: #FFFFFF;
opacity: 0.8;`

export const RightBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const ListBox = styled.div`
padding-left:80px;
`

export const ListHeading = styled.p`
  font-family: 'InterSemiBold';
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  text-align: justify;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 32px;
`

export const List = styled.p`
  margin-bottom: 24px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: justify;
  letter-spacing: -0.02em;
  color: #ffffff;
  opacity: 0.8;
`

export const FooterBottom = styled.div`
  padding: 36px 0;
  text-align: center;
`

export const FooterText = styled.div`
font-family: 'InterMedium';
font-weight: 500;
font-size: 16px;
line-height: 26px;
text-align: center;
letter-spacing: -0.02em;
color: #FFFFFF;
opacity: 0.8;
`
