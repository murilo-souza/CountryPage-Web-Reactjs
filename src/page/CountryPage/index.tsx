import {
  BGImage,
  BadgeContainer,
  Container,
  CountryContainer,
  CountryFullName,
  CountryImageContainer,
  CountryName,
  ImageBgContainer,
  LogoImg,
} from './styles'
import Logo from '../../assets/Logo.svg'
import BgHero from '../../assets/hero-image-wr.jpg'
import { Badge } from '../../components/Badge'

export function CountryPage() {
  return (
    <Container>
      <ImageBgContainer>
        <LogoImg src={Logo} alt="Logo" />
        <BGImage src={BgHero} alt="Hero" />
      </ImageBgContainer>
      <CountryContainer>
        <CountryImageContainer>
          <img src="https://flagcdn.com/w320/ng.png" alt="" />
        </CountryImageContainer>
        <CountryName>India</CountryName>
        <CountryFullName>Republic of India</CountryFullName>
        <BadgeContainer>
          <Badge title="Population" value="1,380,004,385" />
          <Badge title="Area (km²)" value="2,678,908" />
        </BadgeContainer>
      </CountryContainer>
    </Container>
  )
}
