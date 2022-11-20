import Service1 from '../../assets/images/Service1.svg'
import Service2 from '../../assets/images/Service2.svg'
import Service3 from '../../assets/images/Service3.svg'
import { Card } from './components/card/Card'
import * as Styled from './style'

/**
 * @returns Service section. It Contains all the components of the service section
 */

export const Service = () => {
  const cardArray = [
    {
      id: '1',
      heading: 'Task Management',
      content: 'The process of managing a task through its life cycle. It involves planning, testing, tracking.',
      icon: Service1,
    },
    {
      id: '2',
      heading: 'Design System',
      content: 'The technology by which a process or procedure is performed with minimal human assistance.',
      icon: Service2,
    },
    {
      id: '3',
      heading: 'Best Practices',
      content: 'Creating plan to spend your money, This spending planer is called a budgeting tool for business.',
      icon: Service3,
    },
  ]

  return (
    <Styled.Wrapper>
      <Styled.ServiceBody>
        <Styled.HeadingBox>
          <Styled.Heading>Our services made for you?</Styled.Heading>
        </Styled.HeadingBox>
        <Styled.CardContainer>
          {cardArray?.map((card: any) => (
            <Card key ={card.id}icon={card.icon} heading={card.heading} content={card.content} />
          ))}
        </Styled.CardContainer>
      </Styled.ServiceBody>
    </Styled.Wrapper>
  )
}
