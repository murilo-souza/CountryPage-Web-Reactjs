import styled from 'styled-components'

export const Container = styled.section`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 1.25rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.gray700};
  border-top: 1px solid ${(props) => props.theme.colors.gray700};

  h4 {
    font-size: 0.75rem;
    font-weight: 400;

    color: ${(props) => props.theme.colors.gray300};
  }

  span {
    font-size: 0.75rem;
    font-weight: 400;

    color: ${(props) => props.theme.colors.gray100};
  }
`
