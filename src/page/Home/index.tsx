import {
  Container,
  ContentContainer,
  FilterButtonWrapper,
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
import { FilterButton } from '../../components/FilterButton'
import { FilterCheckbox } from '../../components/FilterCheckbox'
import { useState } from 'react'

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
  const [UNMember, setUNMember] = useState(false)
  const [independent, setIndependent] = useState(false)

  console.log(UNMember, independent)

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
                <FilterButtonWrapper>
                  <FilterButton title="Americas" selected />
                  <FilterButton title="Antarctic" selected={false} />
                  <FilterButton title="Africa" selected />
                  <FilterButton title="Asia" selected />
                  <FilterButton title="Europe" selected />
                  <FilterButton title="Oceania" selected />
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
