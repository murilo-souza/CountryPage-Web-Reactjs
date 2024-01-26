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

export const Container = styled.main`
  img {
    width: 100%;
  }
`

export const HomeContainer = styled.main`
  max-width: 74rem;
  padding: 1rem 2.5rem;
  margin: 5rem auto;

  background: ${(props) => props.theme.colors.gray700};
  border-radius: 8px;
`

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;

  grid-gap: 2rem;
`

export const ParametersContainer = styled.section``

export const ContentContainer = styled.section``
