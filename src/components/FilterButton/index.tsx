import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  selected: boolean
}

export function FilterButton({ title, selected, ...rest }: ButtonProps) {
  return (
    <Container selected={selected} {...rest}>
      {title}
    </Container>
  )
}
