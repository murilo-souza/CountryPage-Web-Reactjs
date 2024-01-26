import {
  Container,
  ContentContainer,
  HeadContainer,
  HomeContainer,
  ParametersContainer,
  TableContainer,
} from './styles'
import BgHero from '../../assets/hero-image-wr.jpg'
import { FilterWrapper } from '../../components/FilterWrapper'
import { ContentTable } from '../../components/ContentTable'
import { HeaderTable } from '../../components/HeaderTable'
import { Input } from '../../components/Input'
import { FilterSelect } from '../../components/FilterSelect'

const data = [
  {
    name: {
      common: 'Andorra',
    },
    region: 'Europe',
    area: 468,
    population: 77265,
    flags: {
      png: 'https://flagcdn.com/w320/ad.png',
    },
  },
  {
    name: {
      common: 'French Southern and Antarctic Lands',
    },
    region: 'Antarctic',
    area: 468,
    population: 77265,
    flags: {
      png: 'https://flagcdn.com/w320/tf.png',
    },
  },
  {
    name: {
      common: 'Laos',
    },
    region: 'Asia',
    area: 468,
    population: 77265,
    flags: {
      png: 'https://flagcdn.com/w320/la.png',
    },
  },
  {
    name: {
      common: 'Canada',
    },
    region: 'Americas',
    area: 468,
    population: 77265,
    flags: {
      png: 'https://flagcdn.com/w320/ca.png',
    },
  },
]

export function Home() {
  return (
    <>
      <Container>
        <img src={BgHero} alt="Hero" />
        <HomeContainer>
          <HeadContainer>
            <span>Found 243 countries</span>
            <Input placeholder="Search by Name, Region, Subregion" />
          </HeadContainer>
          <TableContainer>
            <ParametersContainer>
              <FilterWrapper title="Sort by">
                <FilterSelect />
              </FilterWrapper>
              <FilterWrapper title="Region">
                <select name="Selecionar" id=""></select>
              </FilterWrapper>
              <FilterWrapper title="Status">
                <select name="Selecionar" id=""></select>
              </FilterWrapper>
            </ParametersContainer>
            <ContentContainer>
              <HeaderTable>
                {data.map((item) => (
                  <ContentTable key={item.name.common} data={item} />
                ))}
              </HeaderTable>
            </ContentContainer>
          </TableContainer>
        </HomeContainer>
      </Container>
    </>
  )
}
