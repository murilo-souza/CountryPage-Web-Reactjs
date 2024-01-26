import styled from 'styled-components'

export const Container = styled.table`
  width: 100%;
  border-spacing: 0.25rem;
  border-collapse: collapse;

  thead {
    th {
      color: ${(props) => props.theme.colors.gray300};
      font-weight: 400;
      font-size: 0.75rem;
      padding: 1rem;
      text-align: left;
      border-bottom: 2px solid ${(props) => props.theme.colors.gray700};
    }
  }

  tbody {
    td {
      padding: 1rem;
      text-align: left;
    }
  }
`
