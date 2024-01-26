import { Container, ImageContainer } from './styles'

interface ContentTableProps {
  name: {
    common: string
  }
  region: string
  area: number
  population: number
  flags: {
    png: string
  }
}

interface ContentTableDataProps {
  data: ContentTableProps
}

export function ContentTable({ data }: ContentTableDataProps) {
  return (
    <Container>
      <td>
        <ImageContainer>
          <img src={data.flags.png} alt="Flag" />
        </ImageContainer>
      </td>
      <td>{data.name.common}</td>
      <td>{data.population}</td>
      <td>{data.area}</td>
      <td>{data.region}</td>
    </Container>
  )
}
