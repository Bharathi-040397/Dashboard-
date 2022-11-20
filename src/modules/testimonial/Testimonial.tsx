import * as Styled from './style'
import person1 from '../../assets/images/Person1.svg'
import person2 from '../../assets/images/person2.svg'
import person3 from '../../assets/images/Person3.svg'
import { Card } from './components/card/Card'

/**
 * @returns Testimonial section. It Contains all the components of the testimonial section
 */

export const Testimonial = () => {
  const cardArray = [
    {
      id: '1',
      img: person1,
      name: 'Kartik Bansal',
      city: 'Kota, Rajasthan',
    },
    {
      id: '2',
      img: person2,
      name: 'Anil Dvivedi',
      city: 'New Delhi',
    },
    {
      id: '3',
      img: person3,
      name: 'Srijan Sirasikar',
      city: 'Bhadrak',
    },
  ]

  return (
    <Styled.Wrapper>
    <Styled.TestimonialBody>
      <Styled.HeadingBox>
        <Styled.Heading>What people are saying about us</Styled.Heading>
      </Styled.HeadingBox>
      <Styled.CardContainer>
        {cardArray?.map((card: any) => (
          <Card key={card.id} img={card.img} name={card.name} city={card.city} />
        ))}
      </Styled.CardContainer>
    </Styled.TestimonialBody>
    </Styled.Wrapper>
  )
}
