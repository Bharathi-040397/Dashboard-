import styled from "styled-components";
import { screenSizes } from "../../styles/theme";

interface IActive {
    active: boolean
  }

  export const Wrapper = styled.div`
`
export const PricingBody = styled.div`
  padding: 150px 8.33%;
  text-align: center;
  @media only screen and (min-width: ${screenSizes.XXL}px) {
    max-width: 1320px;
  }
`

export const HeadingBox = styled.div`
  margin: 0 auto 68px;
`

export const Heading = styled.p`
font-family: "InterBold";
font-weight: 700;
font-size: 50px;
line-height: 61px;
text-align: center;
letter-spacing: 0.005em;
color: #000000;
`
  
export const BillPlanBox = styled.ul`
  list-style: none;
  padding: 6px;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background: #F6F5FF;
border-radius: 48px;
width: auto;
height: 48px;
`

export const BillBox = styled.li`
  margin-right: 5px;
`

export const BillButton = styled.button<IActive>`
background: ${(props) => (props.active ? "linear-gradient(106.75deg, #2272FF 0%, #0D03C3 100%)" : "transparent")};
border-radius: 55px;
width: 91px;
height: 36px;
outline: none;
border: none;
font-family: "InterMedium";
font-weight: 500;
font-size: 16px;
letter-spacing: -0.41px;
color: ${(props) => (props.active ? '#FFFFFF' : '#000000')};
 text-align: center;
 cursor: pointer;
`
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
export const BillPlanWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-end;
width:35%;
margin: 0 auto 73px;
`

export const SpiralBox = styled.div`
position: relative;
margin-left: -2%;
`
export const Span = styled.span`
position: absolute;
top:-35%;
right: -60%;
font-size: 12px;
line-height: 24px;
letter-spacing: -0.41px;
color: #000000;
`

export const Image = styled.img`
`