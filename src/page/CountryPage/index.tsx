import {
  BGImage,
  BadgeContainer,
  Container,
  ContentContainer,
  CountryContainer,
  CountryFullName,
  CountryImageContainer,
  CountryName,
  FlagContainer,
  FooterContainer,
  ImageBgContainer,
  Label,
  LogoImg,
} from './styles'
import Logo from '../../assets/Logo.svg'
import BgHero from '../../assets/hero-image-wr.jpg'
import { Badge } from '../../components/Badge'
import { InfoListContent } from '../../components/InfoListContent'
import { Flag } from '../../components/Flag'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface CountryDataProps {
  name: {
    common: string
    official: string
  }
  capital: string[]
  borders: string[]
  continents: string[]
  subregion: string
  area: number
  population: number
  languages: {
    [key: string]: string
  }
  currencies: {
    [key: string]: {
      name: string
    }
  }
  flags: {
    png: string
  }
}

interface NeighborCountryProps {
  name: {
    common: string
  }
  flags: {
    png: string
  }
}

export function CountryPage() {
  const [countryData, setCountryData] = useState<CountryDataProps[]>([])
  const [neighborCountry, setNeighborCountry] = useState<
    NeighborCountryProps[][]
  >([])
  const [loading, setLoading] = useState(true)

  const { country } = useParams()

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data)
        if (data[0]?.borders !== undefined) {
          Promise.all(
            data[0]?.borders.map(async (border: string) => {
              const borderResponse = await fetch(
                `https://restcountries.com/v3.1/alpha/${border.toLowerCase()}`,
              )
              return borderResponse.json()
            }),
          )
            .then((borderCountries) => {
              setNeighborCountry(borderCountries)
              setLoading(false)
            })
            .catch((error) => {
              console.error('Error fetching neighbor countries:', error)
            })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [country])

  if (loading) {
    return <h1>Carregando....</h1>
  }

  return (
    <Container>
      <ImageBgContainer>
        <LogoImg src={Logo} alt="Logo" />
        <BGImage src={BgHero} alt="Hero" />
      </ImageBgContainer>
      <CountryContainer>
        <ContentContainer>
          <CountryImageContainer>
            <img src={countryData[0]?.flags.png} alt="" />
          </CountryImageContainer>
          <CountryName>{countryData[0]?.name.common}</CountryName>
          <CountryFullName>{countryData[0]?.name.official}</CountryFullName>
          <BadgeContainer>
            <Badge title="Population" value={countryData[0]?.population} />
            <Badge title="Area (km²)" value={countryData[0]?.area} />
          </BadgeContainer>
          <InfoListContent>
            <h4>Capital</h4>
            {countryData[0]?.capital.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </InfoListContent>
          <InfoListContent>
            <h4>Subregion</h4>
            <span>{countryData[0]?.subregion}</span>
          </InfoListContent>
          <InfoListContent>
            <h4>Language</h4>
            <div>
              {countryData[0]?.languages !== undefined &&
                Object.values(countryData[0]?.languages).map(
                  (item, index, array) => (
                    <span key={item}>
                      {item}
                      {index !== array.length - 1 && ', '}
                    </span>
                  ),
                )}
            </div>
          </InfoListContent>
          <InfoListContent>
            <h4>Currencies</h4>
            <div>
              {countryData[0]?.currencies !== undefined &&
                Object.values(countryData[0]?.currencies).map(
                  (item, index, array) => (
                    <span key={item.name}>
                      {item.name}
                      {index !== array.length - 1 && ', '}
                    </span>
                  ),
                )}
            </div>
          </InfoListContent>
          <InfoListContent>
            <h4>Continents</h4>
            <div>
              {countryData[0]?.continents.map((item, index, array) => (
                <span key={item}>
                  {item}
                  {index !== array.length - 1 && ', '}
                </span>
              ))}
            </div>
          </InfoListContent>
        </ContentContainer>
        <br />
        <FooterContainer>
          <Label>Neighbouring Countries</Label>
          <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
            <FlagContainer className="embla__container container">
              {neighborCountry.map((item) => (
                <>
                  {item.map((country) => (
                    <Flag
                      key={country.name.common + Math.random()}
                      png={country.flags.png}
                      common={country.name.common}
                    />
                  ))}
                </>
              ))}
            </FlagContainer>
          </div>
        </FooterContainer>
      </CountryContainer>
    </Container>
  )
}
