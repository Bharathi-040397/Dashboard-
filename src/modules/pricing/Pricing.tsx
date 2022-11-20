import * as Styled from './style'
import { Card } from './components/card/Card'
import { useState } from 'react'
import Spiral from '../../assets/images/Spiral.svg'

/**
 * @returns Pricing section. It Contains all the components of the pricing section
 */

export const Pricing = () => {

 const [active1, setActive1] = useState<boolean>(true)
  const [active2, setActive2] = useState<boolean>(false)
  
  const cardArray = [
    {
      id: '1',
      plan: 'Pro',
      amount: '$100',
      detail: 'For Small Business',
      features: ['Pages Responsive Website',
      'PPC Campaigns',
      'SEO Keywords',
      'Facebook Camplaigns',
      'Video Camplaigns',]
    },
    {
        id: '2',
        plan: 'Popular',
        amount: '$120',
        detail: 'For Medium businessess',
        features: ['Pages Responsive Website',
        'PPC Campaigns',
        'SEO Keywords',
        'Facebook Camplaigns',
        'Video Camplaigns',
        'Pages Responsive Website',
        'PPC Campaigns',
       ]
    },
    {
        id: '3',
        plan: 'Advanced',
        amount: '$160',
        detail: 'For Enterprices',
        features: ['Pages Responsive Website',
        'PPC Campaigns',
        'SEO Keywords',
        'Facebook Camplaigns',
        'Video Camplaigns',]
    },
  ]

  return (
    <Styled.Wrapper>
    <Styled.PricingBody>
      <Styled.HeadingBox>
        <Styled.Heading>Get results first. Pick a plan later.</Styled.Heading>
      </Styled.HeadingBox>
      <Styled.BillPlanWrapper>
      <Styled.BillPlanBox>
          <Styled.BillBox>
            <Styled.BillButton
              onClick={() => {
                setActive1(true)
                setActive2(false)
              }}
              active={active1}
            >
              Monthly
            </Styled.BillButton>
          </Styled.BillBox>
          <Styled.BillBox>
            <Styled.BillButton
              onClick={() => {
                setActive2(true)
                setActive1(false)
              }}
              active={active2}
            >
                Annually
            </Styled.BillButton>
          </Styled.BillBox>
        </Styled.BillPlanBox>
        <Styled.SpiralBox>
        <Styled.Span>Get 20% OFF</Styled.Span>
            <Styled.Image src={Spiral} alt="" />
        </Styled.SpiralBox>
        </Styled.BillPlanWrapper>
      <Styled.CardContainer>
        {cardArray?.map((card: any) => (
             <Card
             key={card.id}
             plan={card.plan}
             detail={card.detail}
             amount={card.amount}
             features={card.features}
           />
        ))}
      </Styled.CardContainer>
    </Styled.PricingBody>
    </Styled.Wrapper>
  )
}
