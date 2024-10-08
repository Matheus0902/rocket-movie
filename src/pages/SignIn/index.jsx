import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from 'react-icons/fi'

import { Link } from "react-router-dom";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

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
        
        <Link to='/Register'>Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}