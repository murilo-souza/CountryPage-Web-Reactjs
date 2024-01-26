import {
  BGImage,
  Container,
  ContentContainer,
  FilterButtonWrapper,
  HeadContainer,
  HomeContainer,
  ImageContainer,
  LogoImg,
  ParametersContainer,
  TableContainer,
} from './styles'
import BgHero from '../../assets/hero-image-wr.jpg'
import { FilterWrapper } from '../../components/FilterWrapper'
import { ContentTable } from '../../components/ContentTable'
import { HeaderTable } from '../../components/HeaderTable'
import { Input } from '../../components/Input'
import { FilterSelect } from '../../components/FilterSelect'
import { FilterButton } from '../../components/FilterButton'
import { FilterCheckbox } from '../../components/FilterCheckbox'
import { useEffect, useState } from 'react'
import { filterButtons } from '../../utils/filterButtons'
import Logo from '../../assets/Logo.svg'

interface CountriesDataProps {
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

export function Home() {
  const [UNMember, setUNMember] = useState(false)
  const [independent, setIndependent] = useState(false)
  const [filterRegion, setFilterRegion] = useState<string[]>([])
  const [order, setOrder] = useState<string>('Population')
  const [countriesData, setCountriesData] = useState<CountriesDataProps[]>([])
  const [search, setSearch] = useState('')

  function handleRegionFilter(region: string) {
    if (filterRegion.includes(region)) {
      setFilterRegion(filterRegion.filter((item) => item !== region))
    } else {
      setFilterRegion([...filterRegion, region])
    }
  }

  function filterData(data: CountriesDataProps[]) {
    let dataFiltered = data.filter((pais) => {
      return (
        (!UNMember || pais.unMember) &&
        (!independent || pais.independent) &&
        (filterRegion.length === 0 || filterRegion.includes(pais.region))
      )
    })

    if (search !== '') {
      dataFiltered = dataFiltered.filter(
        (item) =>
          item.name.common.toLowerCase().includes(search.toLowerCase()) ||
          item.region.toLowerCase().includes(search.toLowerCase()) ||
          (item.subregion !== undefined &&
            item.subregion.toLowerCase().includes(search.toLowerCase())),
      )

      return dataFiltered
    }

    return dataFiltered
  }

  function sortData(data: CountriesDataProps[]) {
    switch (order) {
      case 'Alphabetical':
        return [...data].sort((a, b) =>
          a.name.common.localeCompare(b.name.common),
        )
      case 'Area':
        return [...data].sort((a, b) => b.area - a.area)
      case 'Population':
        return [...data].sort((a, b) => b.population - a.population)
      default:
        return data
    }
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Container>
        <ImageContainer>
          <LogoImg src={Logo} alt="Logo" />
          <BGImage src={BgHero} alt="Hero" />
        </ImageContainer>
        <HomeContainer>
          <HeadContainer>
            <span>
              Found {sortData(filterData(countriesData)).length} countries
            </span>
            <Input
              placeholder="Search by Name, Region, Subregion"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </HeadContainer>
          <TableContainer>
            <ParametersContainer>
              <FilterWrapper title="Sort by">
                <FilterSelect
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                />
              </FilterWrapper>
              <FilterWrapper title="Region">
                <FilterButtonWrapper>
                  {filterButtons.map((item) => (
                    <FilterButton
                      key={item.title}
                      title={item.title}
                      selected={filterRegion.includes(item.title)}
                      onClick={() => handleRegionFilter(item.title)}
                    />
                  ))}
                </FilterButtonWrapper>
              </FilterWrapper>
              <FilterWrapper title="Status">
                <FilterCheckbox
                  title="Member of the United Nations"
                  checked={UNMember}
                  onChange={(checked) => {
                    if (checked === true) {
                      setUNMember(true)
                    } else {
                      setUNMember(false)
                    }
                  }}
                />
                <FilterCheckbox
                  title="Independent"
                  checked={independent}
                  onChange={(checked) => {
                    if (checked === true) {
                      setIndependent(true)
                    } else {
                      setIndependent(false)
                    }
                  }}
                />
              </FilterWrapper>
            </ParametersContainer>
            <ContentContainer>
              <HeaderTable>
                {sortData(filterData(countriesData)).map((item) => (
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
