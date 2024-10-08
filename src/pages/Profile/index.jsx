import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom";

import { GoArrowLeft } from "react-icons/go";
import { FiCamera } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Profile() {
  return(
    <Container>
      <header>
        <GoArrowLeft />
        <Link to="/">Voltar</Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Matheus0902.png" alt="Foto de perfil do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="Exemplo@gmail.com"
          type="email"
          icon={FiMail}
        />
        
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}