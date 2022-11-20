import styled from "styled-components";
import { Button } from "../../shared/button/style";
import { screenSizes } from "../../styles/theme";

export const Wrapper = styled.div`
background: linear-gradient(106.75deg, #2272FF 0%, #0D03C3 100%);
`;

export const AccessBody = styled.div`
padding: 131px 8.33%;
@media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`
export const TopBox = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`;

export const BottomBox = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
flex: auto 1;
`;

export const HeadingBox = styled.div`
justify-self: flex-start;
max-width: 823px;
margin-bottom: 89px;
`;

export const Heading = styled.p`
font-family: "InterBold";
font-weight: 700;
font-size: 48px;
line-height: 100%;
letter-spacing: -0.03em;
color: #FFFFFF;
`;


export const ButtonBox = styled(Button)`
background: #FFFFFF;
border-radius: 500px;
font-family: 'InterBold';
font-weight: 700;
font-size: 20px;
text-align: center;
letter-spacing: -0.02em;
color: #0F0BC7;
width: 225px;
height: 67px;
justify-self: flex-end;
`
export const LeftBox = styled.div`
justify-self: flex-start;
`;

export const RightBox = styled.div`
`;

export const PlayButton = styled.div`
position: relative;
`;

export const Background = styled.div`
position:absolute;
width: 94px;
height: 94px;
background: #FFFFFF;
border-radius: 94px;
top:127px;
left: 282px;
z-index: 10;
text-align: center;
`;

export const Trigangle = styled.img`
    position: absolute;
    z-index: 20;
    top: 162px;
    left: 322px
`;
