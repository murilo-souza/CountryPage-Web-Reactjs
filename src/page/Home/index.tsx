import {
  Container,
  ContentContainer,
  HomeContainer,
  ParametersContainer,
} from './styles'
import BgHero from '../../assets/hero-image-wr.jpg'
import { FilterWrapper } from '../../components/FilterWrapper'

export function Home() {
  return (
    <Container>
      <img src={BgHero} alt="Hero" />
      <HomeContainer>
        <ParametersContainer>
          <FilterWrapper title="Sort by">
            <select name="Selecionar" id=""></select>
          </FilterWrapper>
          <FilterWrapper title="Region">
            <select name="Selecionar" id=""></select>
          </FilterWrapper>
          <FilterWrapper title="Status">
            <select name="Selecionar" id=""></select>
          </FilterWrapper>
        </ParametersContainer>
        <ContentContainer></ContentContainer>
      </HomeContainer>
    </Container>
  )
}
