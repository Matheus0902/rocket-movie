import { Container, Profile } from "./styles";
import { Input } from "../Input"

export function Header() {
  return(
    <Container>
      <span>
        RocketMovies
      </span>

      <div>
        <label htmlFor="search" className="sr-only">Pesquisar pelo título</label>
        <Input id="search" placeholder="Pesquisar pelo título"/>  
      </div>

      <Profile to="/profile">
        <div>
          <strong>Matheus Antonio</strong>
          <a href="/">Sair</a>
        </div>

        <img src="https://github.com/Matheus0902.png" alt="Foto de perfil" />
      </Profile>
      
    </Container>
  )
}