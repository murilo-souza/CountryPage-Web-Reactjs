import styled from 'styled-components'

export const HeadContainer = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;

  span {
    color: ${(props) => props.theme.colors.gray300};
    font-size: 1rem;
  }
`

export const Container = styled.main``

export const ImageContainer = styled.div`
  width: 100%;
`

export const BGImage = styled.img`
  width: 100%;

  position: relative;

  z-index: -1;
`
export const LogoImg = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const HomeContainer = styled.main`
  max-width: 74rem;
  padding: 1rem 2.5rem;
  margin: -5rem auto 2rem auto;

  background: ${(props) => props.theme.colors.gray800};
  border-radius: 8px;
`

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 22% 78%;

  grid-gap: 2rem;
`

export const FilterButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  gap: 0.5rem;
`

export const ParametersContainer = styled.section``

export const ContentContainer = styled.section``
