import { Container, Form } from "./styles";

import { GoArrowLeft } from "react-icons/go";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"

export function New() {
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <section id="link">
            <GoArrowLeft />
            <Link to="/">Voltar</Link>
          </section>

          <header>
            <h1>Novo filme</h1>
          </header>

          <section id="inputs">
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </section>

          <TextArea placeholder="Observações"/>

          

          <section id="movieItens">
            <h2>Marcadores</h2>

            <div>
              <MovieItem value="React"/>
              <MovieItem isNew placeholder="Novo marcador"/>
            </div>
            
          </section>

          <section id="buttons">
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </section>

        </Form>
      </main>
    </Container>
  )
}