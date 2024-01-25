import { ReactNode } from 'react'
import { Container, InputLabel } from './styles'

interface FilterWrapperProps {
  title: string
  children: ReactNode
}

export function FilterWrapper({ title, children }: FilterWrapperProps) {
  return (
    <Container>
      <InputLabel>{title}</InputLabel>
      {children}
    </Container>
  )
}
