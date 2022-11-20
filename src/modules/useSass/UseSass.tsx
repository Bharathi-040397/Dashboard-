import * as Styled from './style'
import GentleMan from '../../assets/images/GentleMan.svg'


/**
 * @returns UseSass Section. 
 */
export const UseSass = () => {
  return (
    <Styled.Wrapper>
    <Styled.UseSassBody>
      <Styled.LeftBox>
        <Styled.HeadingBox>
            <Styled.Heading>
            Powerful and easy to use SaaS platform
            </Styled.Heading>
        </Styled.HeadingBox>
        <Styled.ContentBox>
           <Styled.Content>
           Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.
           </Styled.Content>
        </Styled.ContentBox>
        <Styled.ButtonBox>
        Get Started
        </Styled.ButtonBox>
      </Styled.LeftBox>
      <Styled.RightBox>
        <Styled.Image src={GentleMan} alt="" />
      </Styled.RightBox>
    </Styled.UseSassBody>
    </Styled.Wrapper>
  )
}
