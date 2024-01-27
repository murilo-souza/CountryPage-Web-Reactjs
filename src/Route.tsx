import { Route, Routes } from 'react-router-dom'
import { Home } from './page/Home'
import { CountryPage } from './page/CountryPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country-page/:country" element={<CountryPage />} />
    </Routes>
  )
}
