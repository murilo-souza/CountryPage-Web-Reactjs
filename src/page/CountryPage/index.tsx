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

interface CountryDataProps {
  name: {
    common: string
    official: string
  }
  capital: string[]
  continents: string[]
  subregion: string
  area: number
  population: number
  flags: {
    png: string
  }
}

export function CountryPage() {
  const [countryData, setCountryData] = useState<CountryDataProps[]>([])
  const { country } = useParams()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [country])

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
            <span>{}</span>
          </InfoListContent>
          <InfoListContent>
            <h4>Currencies</h4>
            <span>{}</span>
          </InfoListContent>
          <InfoListContent>
            <h4>Continents</h4>
            <div>
              {countryData[0]?.continents.map((item) => (
                <span key={item}>{item}, </span>
              ))}
            </div>
          </InfoListContent>
        </ContentContainer>
        <br />
        <FooterContainer>
          <Label>Neighbouring Countries</Label>
          <FlagContainer>
            <Flag flag="https://flagcdn.com/w320/ng.png" name="Nigeria" />
          </FlagContainer>
        </FooterContainer>
      </CountryContainer>
    </Container>
  )
}
