import * as Styled from './style'

/**
 * @returns Navbar Section
 */

export const Navbar = () => {
  const navLinksArray = ['Product', 'Solution', 'Customer', 'Pricing', 'About Us']
  return (
    <Styled.Wrapper>
      <Styled.NavbarBody>
        <Styled.NavLeft>Saasify</Styled.NavLeft>
        <Styled.NavCenter>
          {navLinksArray?.map((link: string, index: number) => (
            <Styled.NavLink key={index}>{link}</Styled.NavLink>
          ))}
        </Styled.NavCenter>
        <Styled.ButtonBox>Sign Up</Styled.ButtonBox>
      </Styled.NavbarBody>
    </Styled.Wrapper>
  )
}
