import * as Styled from './style'

interface IProps{
    number: string
    heading: string
    content: string
}

/**
 * @returns Inidividual Card
 */

export const Card = ({number,heading,content}: IProps) => {
  return (
    <Styled.CardBody>
      <Styled.LeftBox>
        <Styled.Background>
          <Styled.Number>{number}</Styled.Number>
        </Styled.Background>
      </Styled.LeftBox>
      <Styled.RightBox>
        <Styled.HeadingBox>
          <Styled.Heading>{heading}</Styled.Heading>
        </Styled.HeadingBox>
        <Styled.Content>{content}</Styled.Content>
      </Styled.RightBox>
    </Styled.CardBody>
  )
}
