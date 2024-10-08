import { Container, Content, NewMovie } from "./styles";

import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"

import { IoMdAdd } from "react-icons/io";


export function Home() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <header>
            <h1>Meus filmes</h1>
            <NewMovie to="/new">
              <IoMdAdd />
              Adicionar filme
            </NewMovie>
          </header>

          <section>
            <Movie data={{
              title: 'Interestellar',
              tags: [
                {id: '1', name: 'Ficção Científica'},
                {id: '2', name: 'Drama'},
                {id: '3', name: 'Família'}
              ]
            }}
            />

            <Movie data={{
              title: 'Interestellar',
              tags: [
                {id: '1', name: 'Ficção Científica'},
                {id: '2', name: 'Drama'},
                {id: '3', name: 'Família'}
              ]
            }}
            />

            <Movie data={{
              title: 'Interestellar',
              tags: [
                {id: '1', name: 'Ficção Científica'},
                {id: '2', name: 'Drama'},
                {id: '3', name: 'Família'}
              ]
            }}
            />
          </section>
        </Content>
      </main>
    </Container>
  )
} 