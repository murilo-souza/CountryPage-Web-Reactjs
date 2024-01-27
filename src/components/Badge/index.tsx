import { Container, Divider } from './styles'

interface BadgeProps {
  title: string
  value: string
}

export function Badge({ title, value }: BadgeProps) {
  return (
    <Container>
      <h3>{title}</h3>
      <Divider />
      <span>{value}</span>
    </Container>
  )
}
