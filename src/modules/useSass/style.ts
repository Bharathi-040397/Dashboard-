import styled from 'styled-components'
import { Button } from '../../shared/button/style'
import { screenSizes } from '../../styles/theme'


export const Wrapper = styled.div`
background: #F6F5FF;
`
export const UseSassBody = styled.div`
  padding: 81px 8.88% 0;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`
export const LeftBox = styled.div`
width: 524px;
padding-top: 140px;
`


export const HeadingBox = styled.div`
  margin: 0 0 35px;
`

export const Heading = styled.p`
font-family: "InterBold";
  font-weight: 700;
font-size: 50px;
line-height: 56px;
letter-spacing: -0.03em;
color: #000000;
`
export const ContentBox = styled.div`
margin-bottom: 35px;
`;

export const Content = styled.p`
font-family: 'InterMedium';
font-weight: 500;
font-size: 18px;
line-height: 26px;
letter-spacing: -0.02em;
color: #000000;
opacity: 0.8;
`;

export const ButtonBox = styled(Button)`
background: linear-gradient(106.75deg, #2272FF 0%, #0D03C3 100%);
border-radius: 40px;
padding: 15px 40px;
width: 215px;
height: 68px;
font-family: "InterBold";
font-weight: 700;
font-size: 20px;
line-height: 30px;
letter-spacing: -0.02em;
text-transform: uppercase;
color: #FFFFFF;
`
export const RightBox = styled.div`
width: 598px;
`;

export const Image = styled.img`
width: 100%;
`;