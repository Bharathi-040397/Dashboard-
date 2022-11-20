import { Navbar } from '../app/components/navbar/Navbar'
import * as Styled from './style'
import Email from '../../assets/images/Email.svg'
import DarkTheme from '../../assets/images/DarkTheme.jpeg'


/**
 * @returns Banner Section. It contains navbar and Banner Image
 */

export const Banner = () => {
  return (
    <Styled.Wrapper>
        <Styled.BannerBody>
            <Navbar />
            <Styled.BannerTextContainer>
                <Styled.HeadingBox>
                   <Styled.Heading>
                   The fastest way for startups to do any analysis
                   </Styled.Heading>
                </Styled.HeadingBox>
                <Styled.ContentBox>
                    <Styled.Content>
                    Equals is the only spreadsheet with built-in connections to any database, versioning, and collaboration.
                    </Styled.Content>
                </Styled.ContentBox>
                <Styled.InputBox>
                    <Styled.Image src={Email} alt="" />
                    <Styled.Input placeholder='Enter your email'/>
                    <Styled.ButtonBox>Start for free</Styled.ButtonBox>
                </Styled.InputBox>
            </Styled.BannerTextContainer>
            <Styled.ImageBox>
                <Styled.BottomImage src={DarkTheme} alt="img" />
        </Styled.ImageBox>
        </Styled.BannerBody>
    </Styled.Wrapper>
  )
}
