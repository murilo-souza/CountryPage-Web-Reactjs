import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  padding-top: 1rem;
`

export const InputLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray300};

  margin-bottom: 0.5rem;
`
