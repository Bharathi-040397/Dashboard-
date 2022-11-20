import { Card } from './components/card/Card'
import * as Styled from './style'
import Video from '../../assets/images/Video.svg'
import Play from '../../assets/images/Play.svg'


/**
 * @returns Access section.
 */

export const Access = () => {
  const cardArray = [
    {
      id: '1',
      number: '1',
      heading: 'Create Account',
      content: 'After learning about your customer service needs, we will get you up ',
    },
    {
      id: '2',
      number: '2',
      heading: 'Install tracking code',
      content: 'After learning about your customer service needs, we will get you up ',
    },
    {
      id: '3',
      number: '3',
      heading: 'Track analytics',
      content: 'After learning about your customer service needs, we will get you up ',
    },
  ]
  return (
    <Styled.Wrapper>
      <Styled.AccessBody>
        <Styled.TopBox>
          <Styled.HeadingBox>
            <Styled.Heading>
              Work smarter <br /> with easy access for user..
            </Styled.Heading>
          </Styled.HeadingBox>
          <Styled.ButtonBox>Get Started Now</Styled.ButtonBox>
        </Styled.TopBox>
        <Styled.BottomBox>
          <Styled.LeftBox>
            {cardArray?.map((card: any) => (
              <Card key={card.id} number={card.number} heading={card.heading} content={card.content} />
            ))}
          </Styled.LeftBox>
          <Styled.RightBox>
            <Styled.PlayButton>
             <Styled.Background>
             </Styled.Background>
             <Styled.Trigangle src={Play} alt=""/>
            </Styled.PlayButton>
            <video width="657" height="387" poster={Video}>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </Styled.RightBox>
        </Styled.BottomBox>
      </Styled.AccessBody>
    </Styled.Wrapper>
  )
}
