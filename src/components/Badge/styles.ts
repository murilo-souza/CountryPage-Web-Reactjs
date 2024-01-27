import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem 1.5rem;

  display: flex;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.gray700};

  gap: 1rem;

  border-radius: 10px;

  h3 {
    font-weight: 400;
    font-size: 1rem;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
  }
`

export const Divider = styled.div`
  width: 2px;
  height: 2rem;

  background-color: ${(props) => props.theme.colors.gray800};
`
