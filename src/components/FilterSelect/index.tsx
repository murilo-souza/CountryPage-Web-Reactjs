import { Container, SelectItem } from './styles'

export function FilterSelect() {
  return (
    <Container>
      <SelectItem label="Population" value="Population">
        Population
      </SelectItem>
      <SelectItem label="Area" value="Area">
        Area
      </SelectItem>
      <SelectItem label="Alphabetical order" value="Alphabetical order">
        Alphabetical order
      </SelectItem>
    </Container>
  )
}
