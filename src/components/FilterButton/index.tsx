import { Container } from './styles'

interface ButtonProps {
  title: string
  selected: boolean
}

export function FilterButton({ title, selected }: ButtonProps) {
  return <Container selected={selected}>{title}</Container>
}
