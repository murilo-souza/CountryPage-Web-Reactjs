import { Container, ImageContainer } from './styles'

interface FlagProps {
  png: string
  common: string
}

export function Flag({ png, common }: FlagProps) {
  return (
    <Container to={`/country-page/${common.toLowerCase()}`}>
      <ImageContainer>
        <img src={png} alt="Flag" />
      </ImageContainer>
      <span>{common}</span>
    </Container>
  )
}
