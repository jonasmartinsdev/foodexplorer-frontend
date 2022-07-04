import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Content, Container } from './styles';

import Sabores from '../../assets/sabores.png';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { Slider } from '../../components/Slider';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';

export function Home() {
  const [search, setSearch] = useState('');
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(
        `/plates?title=${search}&ingredient=${search}`
      );
      setPlates(response.data);
    }

    fetchPlates();
  }, [search]);

  return (
    <>
      <Header setSearch={setSearch} />
      <Container>
        <Content>
          <img src={Sabores} alt="Imagem com diferentes tipos de sabores" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Content>
        <Section title="Pratos principais">
          {plates.length > 0 && (
            <Slider>
              {plates.map(item => (
                <Card data={item} />
              ))}
            </Slider>
          )}
        </Section>
      </Container>
      <Footer />
    </>
  );
}
