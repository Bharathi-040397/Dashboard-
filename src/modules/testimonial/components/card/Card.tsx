import * as Styled from './style'
import Star from '../../../../assets/images/Star.svg'

interface IProps {
  img: any
  name: string
  city: string
}

/**
 * @returns Individual Testimonial card
 */

export const Card = ({ img, name, city }: IProps) => {
  const iconArray = [Star, Star, Star, Star, Star]
  return (
    <Styled.CardBody>
      <Styled.CardTop>
        {iconArray?.map((icon: any,index:number) => (
          <Styled.StarIcon key={index} src={icon} alt="img" />
        ))}
      </Styled.CardTop>
      <Styled.CardMiddle>
        <Styled.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
          magna
        </Styled.Content>
      </Styled.CardMiddle>
      <Styled.CardBottom>
        <Styled.Icon src={img} alt="img" />
        <Styled.RightBox>
          <Styled.Name>{name}</Styled.Name>
          <Styled.City>{city}</Styled.City>
        </Styled.RightBox>
      </Styled.CardBottom>
    </Styled.CardBody>
  )
}
