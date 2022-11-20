import { ReactChild } from 'react'
import * as Styled from './style'

interface IProps {
    children: ReactChild
}

/**
 * By using it we can customize it
 * @returns Button
 */

export const Button = ({ children}: IProps) => {
  return <Styled.Button>{children}</Styled.Button>
}
