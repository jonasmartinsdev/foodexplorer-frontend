import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { Background, Container, Form, InputWrapper } from './styles';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      alert('Preencha todos os campos!');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
        navigate('/');
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não doi possível cadastrar');
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Crie sua conta</h1>

        <InputWrapper>
          <label htmlFor="event-name">Seu nome</label>
          <Input
            id="event-name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="event-email">Email</label>
          <Input
            id="event-email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="event-password">Senha</label>
          <Input
            id="event-password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </InputWrapper>

        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
