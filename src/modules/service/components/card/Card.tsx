import * as Styled from './style'
import Arrow from '../../../../assets/images/Arrow.svg'

interface IProps {
  icon: any
  heading: string
  content: string
}

/**
 * @returns Individual Service card
 */

export const Card = ({ icon, heading, content }: IProps) => {
  return (
    <Styled.CardBody>
      <Styled.Logo src={icon} alt="img" />
      <Styled.Heading>{heading}</Styled.Heading>
      <Styled.Content>{content}</Styled.Content>
      <Styled.Link>
        <Styled.LinkText>Read More</Styled.LinkText>
        <Styled.LinkIcon src={Arrow} alt="" />
      </Styled.Link>
    </Styled.CardBody>
  )
}
