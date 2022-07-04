import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Background, Container, Form, InputWrapper } from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }
  return (
    <Container>
      <Background />
      <Form>
        <h1>Faça login</h1>

        <InputWrapper>
          <label htmlFor="event-email">Email</label>
          <Input
            id="event-email"
            type="text"
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

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
