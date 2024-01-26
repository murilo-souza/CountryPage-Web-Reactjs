import { Container } from './styles'
import SearchIcon from '../../assets/Search.svg'
import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...rest }: InputProps) {
  return (
    <Container>
      <img src={SearchIcon} alt="search" />
      <input {...rest} />
    </Container>
  )
}
