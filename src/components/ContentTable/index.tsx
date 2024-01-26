import { Container, ImageContainer } from './styles'

interface ContentTableProps {
  name: {
    common: string
  }
  region: string
  subregion: string
  area: number
  population: number
  flags: {
    png: string
  }
  unMember: boolean
  independent: boolean
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
      <td>{data.population.toLocaleString('en-US')}</td>
      <td>{data.area.toLocaleString('en-US')}</td>
      <td>{data.region}</td>
    </Container>
  )
}
