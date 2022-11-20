import * as Styled from './style'

/**
 * @returns Footer Section
 */

export const Footer = () => {
  const listArray = [
    {
      id: '1',
      title: 'Product',
      lists: ['Digital Invoice', 'Insight', 'Reimbursement', 'Virtual Assistant', 'Artificial'],
    },
    {
      id: '2',
      title: 'Company',
      lists: ['Digital Invoice', 'Insight', 'Reimbursement', 'Virtual Assistant', 'Artificial'],
    },
    {
      id: '3',
      title: 'Resources',
      lists: ['Digital Invoice', 'Insight', 'Reimbursement', 'Virtual Assistant', 'Artificial'],
    },
    {
      id: '4',
      title: 'Follow us',
      lists: ['Digital Invoice', 'Insight', 'Reimbursement', 'Virtual Assistant', 'Artificial'],
    },
  ]

  return (
    <Styled.Wrapper>
      <Styled.FooterBody>
        <Styled.FooterTop>
          <Styled.HeadingBox>
            <Styled.Heading>We are here to help<br/> you grow your business</Styled.Heading>
          </Styled.HeadingBox>
          <Styled.ButtonBox>Get Started Now</Styled.ButtonBox>
        </Styled.FooterTop>
        <Styled.Border />
        <Styled.FooterMiddle>
          <Styled.LeftBox>
            <Styled.LeftHeading>Saasify</Styled.LeftHeading>
            <Styled.Content>Data visualization, and expense management for your business.</Styled.Content>
          </Styled.LeftBox>
          <Styled.RightBox>
            {listArray?.map((list: any) => (
              <Styled.ListBox key={list.id}>
                <Styled.ListHeading>{list.title}</Styled.ListHeading>
                {list?.lists?.map((Indi: string, index: number) => (
                  <Styled.List key={index}>{Indi}</Styled.List>
                ))}
              </Styled.ListBox>
            ))}
          </Styled.RightBox>
        </Styled.FooterMiddle>
        <Styled.Border />
        <Styled.FooterBottom>
          <Styled.FooterText>
          Copyright @ Kartik Bansal 2022. All Rights Reserved.
          </Styled.FooterText>
        </Styled.FooterBottom>
      </Styled.FooterBody>
    </Styled.Wrapper>
  )
}
