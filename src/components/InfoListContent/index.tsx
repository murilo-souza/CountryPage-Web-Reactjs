import { Container } from './styles'

interface InfoListContentProps {
  children: React.ReactNode
}

export function InfoListContent({ children }: InfoListContentProps) {
  return <Container>{children}</Container>
}
