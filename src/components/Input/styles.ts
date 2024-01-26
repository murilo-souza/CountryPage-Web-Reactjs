import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0.75rem;

  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.gray700};

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  input {
    background-color: transparent;
    border: none;

    width: 22rem;
    height: 1.5rem;

    margin-left: 1rem;

    color: ${(props) => props.theme.colors.gray100};

    font-size: 1rem;
    font-weight: 400;

    @media (max-width: 768px) {
      width: 20rem;
    }
  }

  :focus {
    outline: none;
  }
`
