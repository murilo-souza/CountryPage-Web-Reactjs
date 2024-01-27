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

export function CountryPage() {
  return (
    <Container>
      <ImageBgContainer>
        <LogoImg src={Logo} alt="Logo" />
        <BGImage src={BgHero} alt="Hero" />
      </ImageBgContainer>
      <CountryContainer>
        <ContentContainer>
          <CountryImageContainer>
            <img src="https://flagcdn.com/w320/ng.png" alt="" />
          </CountryImageContainer>
          <CountryName>India</CountryName>
          <CountryFullName>Republic of India</CountryFullName>
          <BadgeContainer>
            <Badge title="Population" value="1,380,004,385" />
            <Badge title="Area (km²)" value="2,678,908" />
          </BadgeContainer>
          <InfoListContent title="Capital" content="New Delhi" />
          <InfoListContent title="Subregion" content="Southern Asia" />
          <InfoListContent title="Language" content="English, Hindi, Tajik" />
          <InfoListContent title="Currencies" content="Indian rupee" />
          <InfoListContent title="Continents" content="Asia" />
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
