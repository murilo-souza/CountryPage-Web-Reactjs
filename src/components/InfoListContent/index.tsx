import { Container } from './styles'

interface InfoListContentProps {
  title: string
  content: string
}

export function InfoListContent({ title, content }: InfoListContentProps) {
  return (
    <Container>
      <h4>{title}</h4>
      <span>{content}</span>
    </Container>
  )
}
