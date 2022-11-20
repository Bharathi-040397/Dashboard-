import styled from 'styled-components'
import { Button } from '../../shared/button/style';
import Background from '../../assets/images/Background.svg'
import { screenSizes } from '../../styles/theme';

export const Wrapper = styled.div`
background: url(${Background});
background-repeat: no-repeat;
`;

export const BannerBody = styled.div`
padding:39px 8.33%;
@media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`;

export const BannerTextContainer = styled.div`
width: 992px;
margin: 0 auto;
`;

export const HeadingBox = styled.div`
margin-bottom: 40px;
`;

export const Heading = styled.p`
font-family: "InterExtraBold";
font-weight: 800;
font-size: 72px;
line-height: 80px;
text-align: center;
letter-spacing: -0.03em;
text-transform: capitalize;
color: #FFFFFF;
`;

export const ContentBox = styled.div`
max-width: 579px;
margin: 0 auto 40px;
`;

export const Content = styled.p`
font-family: 'InterMedium';
font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: center;
letter-spacing: -0.02em;
color: #FFFFFF;
opacity: 0.8;
`;

export const InputBox = styled.div`
max-width: 579px;
height: 67px;
background: #FFFFFF;
border-radius: 71px;
display: flex;
align-items: center;
margin: 0 auto 100px;
`;

export const Image = styled.img`
margin-left: 29px;
margin-right: 23.8px;
`;

export const Input = styled.input`
border: none;
outline: none;
height: 100%;
flex:1;
:focus{
border: none;
outline: none;
}
::placeholder{
font-weight: "Inter";
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;
opacity: 0.7;
}
`;

export const ButtonBox = styled(Button)`
font-family: "InterMedium";
font-weight: 500;
font-size: 18px;
color: #FFFFFF;
width: 171px;
height: 54px;
background: linear-gradient(106.75deg, #2272FF 0%, #0D03C3 100%);
border-radius: 42px;
margin: 6px;
text-align: center;
`

export const ImageBox = styled.div`
width: 96.76%;
height: 740px;
margin: 0 auto;
box-shadow: 0px 21.7647px 54.4118px 13.0588px rgba(0, 0, 0, 0.25);
border-radius: 21.7647px;
`;

export const BottomImage = styled.img`
width: 100%;
height: 100%;
border-radius: 21.7647px;
`;