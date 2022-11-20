import * as Styled from './style'

interface IProps {
  plan: string
  detail: string
  amount: string
  features: string[]
}

/**
 * @params By this we can customize the card
 * @returns Individual Price card
 */

export const Card = ({ plan, detail, amount, features }: IProps) => {
  return (
    <Styled.CardBody>
      <Styled.CardTop>
        <Styled.CardHeading>{plan}</Styled.CardHeading>
        <Styled.PriceBox>
          <Styled.Amount>{amount}</Styled.Amount>
          <Styled.AmountPlan>/ month</Styled.AmountPlan>
        </Styled.PriceBox>
        <Styled.CardDetail>{detail}</Styled.CardDetail>
      </Styled.CardTop>
      <Styled.Border />
      <Styled.CardBottom>
        {features?.map((feature: string, index: number) => {
          return (
            <Styled.CardBottomLines key={index}>
              <Styled.IconDiv>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.25 4.625L4.25 6.5L8.75 1.5"
                    stroke="#0F0BC7"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Styled.IconDiv>
              <Styled.CardBottomText>{feature}</Styled.CardBottomText>
            </Styled.CardBottomLines>
          )
        })}
      </Styled.CardBottom>
      <Styled.ButtonBox>
        Get Started
        </Styled.ButtonBox>
    </Styled.CardBody>
  )
}
