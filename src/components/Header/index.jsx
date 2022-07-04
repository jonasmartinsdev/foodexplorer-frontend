import { FiSearch, FiMenu, FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content, Container, InputWrapper, Nav } from './styles';

import Logo from '../../assets/logo.svg';
import Pedido from '../../assets/pedido.svg';
import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

export function Header({ setSearch }) {
  const [openLinks, setOpenLinks] = useState(false);
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const handleToggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  function handleNew() {
    navigate(`/new`);
  }
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo" />

        <Nav isActive={openLinks}>
          {user.is_admin === 0 ? (
            <>
              <button className="buttonText" type="button">
                Meus favoritos
              </button>
              <InputWrapper>
                <FiSearch />
                <input
                  type="text"
                  placeholder="Busque pelas opções de pratos"
                  onChange={e => setSearch(e.target.value)}
                />
              </InputWrapper>
            </>
          ) : (
            <button className="buttonText" type="button" onClick={handleNew}>
              Administrador
            </button>
          )}

          <Button icon={Pedido} title="Meu pedido (0)" />

          <FiLogOut size={25} onClick={signOut} />
        </Nav>
        <div className="toggleNav">
          <button type="button" onClick={handleToggleNavbar}>
            <FiMenu color="#FFF" size={25} />
          </button>
        </div>
      </Content>
    </Container>
  );
}
