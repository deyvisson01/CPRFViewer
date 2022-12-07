
import { Container } from './styles'

import Logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo FINPEC" />
      <h2>{`Bem vindo(a) `}</h2>
    </Container>
  )
}
