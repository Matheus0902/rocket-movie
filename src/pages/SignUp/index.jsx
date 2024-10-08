import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { GoArrowLeft } from "react-icons/go";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          type="text"
          placeholder="Nome"
          icon={FiUser}
        />

        <Input 
          type="email"
          placeholder="Email"
          icon={FiMail}
        />

        <Input 
          type="password"
          placeholder="password"
          icon={FiLock}
        />

        <Button title="Entrar"/>
        
        <section>
          <GoArrowLeft />        
          <Link to='/'>Voltar para o login</Link>
        </section>
      </Form>

      <Background />
    </Container>
  )
}