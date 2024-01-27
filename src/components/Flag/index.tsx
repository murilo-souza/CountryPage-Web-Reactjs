import { Container, ImageContainer } from './styles'

interface FlagProps {
  flag: string
  name: string
}

export function Flag({ flag, name }: FlagProps) {
  return (
    <Container>
      <ImageContainer>
        <img src={flag} alt="Flag" />
      </ImageContainer>
      <span>{name}</span>
    </Container>
  )
}
