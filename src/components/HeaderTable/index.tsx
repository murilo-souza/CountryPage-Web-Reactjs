import { ReactNode } from 'react'
import { Container } from './styles'

interface HeaderTableProps {
  children: ReactNode
}

export function HeaderTable({ children }: HeaderTableProps) {
  return (
    <Container>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Population</th>
          <th>Area (km²)</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Container>
  )
}
