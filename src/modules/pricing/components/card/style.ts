import styled from 'styled-components'
import { Button } from '../../../../shared/button/style'
import { gapSizes } from '../../../../styles/theme'

export const CardBottomLines = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: ${gapSizes.S};
  margin-bottom: 22px;
`

export const CardBody = styled.div`
position: relative;
text-align: center;
background: #FFFFFF;
box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
border-radius: 15px;
width: 384px;
height: 652px;
padding: 0 30px;

  :hover {
    background: linear-gradient(106.75deg, #2272FF 0%, #0D03C3 100%);
    box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
  }
`
export const CardTop = styled.div`
  padding-top: 50px;
  margin-bottom: 25px;
`

export const CardHeading = styled.p`
font-family: "InterBold";
 font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #000000;
text-align: left;
margin-bottom: 10px;

  ${CardBody}:hover & {
    color: #fff;
  }
`

export const PriceBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`

export const Amount = styled.h2`
font-family: "InterBold";
  font-weight: 700;
font-size: 56px;
line-height: 60px;
color: #0F0BC7;
  ${CardBody}:hover & {
    color: #FFFFFF;
  }
`

export const AmountPlan = styled.span`
font-family: 'InterMedium';
  font-size: 16px;
line-height: 24px;
letter-spacing: 0.011em;
color: #000000;
opacity: 0.6;

  ${CardBody}:hover & {
    color: #FFFFFF;
  }
`
export const CardDetail = styled.p`
font-family: 'Inter';
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000; 
text-align: left;
${CardBody}:hover &{
    color: #FFFFFF;
}
`
export const Border = styled.div`
margin: 0 auto;
width: 95%;
height: 0px;
opacity: 0.2;
border: 1px solid #000000;
margin-bottom: 43px;

${CardBody}:hover &{
    border: 1px solid #FFFFFF;
    opacity: 0.7;
}
`
export const CardBottom = styled.div`
`

export const IconDiv = styled.div`
width: 20px;
height: 20px;
border-radius: 30px;
background-color: #0F0BC7;
text-align: center;
>svg{
    fill: #FFFFFF;
    z-index: 10;
}

${CardBody}:hover &{
    background-color: #FFFFFF;
    >svg{
    fill: #000000
}
}

`

export const CardBottomText = styled.p`
  font-size: 14px;
  color: #999fae;
  line-height: 1.2;

  ${CardBody}:hover & {
    color: #FFFFFF;
  }
`
export const ButtonBox = styled(Button)`
width: 206px;
height: 58px;
background: linear-gradient(106.75deg, #2272FF 0%, #0D03C3 100%);
position: absolute;
bottom: 40px;
left: 89px;
text-align: center;
color: #FFFFFF;
 ${CardBody}:hover &{
background: #FFFFFF;
border-radius: 66px;
color: #0F0BC7;
 }
`
