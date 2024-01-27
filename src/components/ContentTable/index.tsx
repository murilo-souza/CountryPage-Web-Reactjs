import { NavLink } from 'react-router-dom'
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
        <NavLink to={`/country-page/${data.name.common.toLowerCase()}`}>
          <ImageContainer>
            <img src={data.flags.png} alt="Flag" />
          </ImageContainer>
        </NavLink>
      </td>
      <td>{data.name.common}</td>
      <td>{data.population.toLocaleString('en-US')}</td>
      <td>{data.area.toLocaleString('en-US')}</td>
      <td>{data.region}</td>
    </Container>
  )
}
