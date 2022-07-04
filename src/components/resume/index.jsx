import { FiSearch, FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { Navbar, InputWrapper, Container } from './styles';

import Logo from '../../assets/logo.svg';
import Pedido from '../../assets/pedido.svg';
import { Button } from '../Button';

export function Header() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <Container>
      <Navbar>
        <div className="leftSide" id={openLinks ? 'open' : 'close'}>
          <img src={Logo} alt="Logo" />

          <div className="nav-wrapper">
            <button className="buttonText" type="button">
              Meus favoritos
            </button>
            <InputWrapper>
              <FiSearch />
              <input type="text" placeholder="Busque pelas opções de pratos" />
            </InputWrapper>

            <Button icon={Pedido} title="Meu pedido (0)" />

            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2112 6.75L23.4612 12M23.4612 12L18.2112 17.25M23.4612 12H9.46118M9.46118 23H2.46118C2.19597 23 1.94161 22.8946 1.75408 22.7071C1.56654 22.5196 1.46118 22.2652 1.46118 22V2C1.46118 1.73478 1.56654 1.48043 1.75408 1.29289C1.94161 1.10536 2.19597 1 2.46118 1H9.46118"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="rightSide">
          <button className="buttonText" type="button">
            Meus favoritos
          </button>
          <InputWrapper>
            <FiSearch />
            <input type="text" placeholder="Busque pelas opções de pratos" />
          </InputWrapper>

          <Button icon={Pedido} title="Meu pedido (0)" />

          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2112 6.75L23.4612 12M23.4612 12L18.2112 17.25M23.4612 12H9.46118M9.46118 23H2.46118C2.19597 23 1.94161 22.8946 1.75408 22.7071C1.56654 22.5196 1.46118 22.2652 1.46118 22V2C1.46118 1.73478 1.56654 1.48043 1.75408 1.29289C1.94161 1.10536 2.19597 1 2.46118 1H9.46118"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="toggleNav">
          <button type="button" onClick={toggleNavbar}>
            <FiMenu color="#FFF" />
          </button>
        </div>
      </Navbar>
    </Container>
  );
}
