import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Container, Content, Form, InputItem, InputWrapper } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/TextArea';
import { IngredientITem } from '../../components/IngredientItem';
import { api } from '../../services/api';

export function Edit() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const [ingredients, setIngredients] = useState([]);

  const [newIngredient, setNewIngredient] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`);

      // eslint-disable-next-line no-shadow
      const { title, description, price, ingredient } = response.data;
      setTitle(title);
      setDescription(description);
      setPrice(price);
      setIngredients(ingredient.map(item => item.name));
    }

    fetchPlate();
  }, []);

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient('');
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    );
    setNewIngredient('');
  }

  async function handleEditPlate() {
    if (!title || !description || !price || !ingredients || !imageFile) {
      return alert('Preencha todos os campos!');
    }

    const formData = new FormData();
    formData.append('img', imageFile);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);

    for (let i = 0; i < ingredients.length; i += 1) {
      formData.append('ingredients', ingredients[i]);
    }

    await api
      .put(`/plates/${params.id}`, formData)
      .then(alert('Prato editado com sucesso!'))
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Erro no envio do formulário');
        }
      });

    return navigate('/');
  }
  async function handleRemovePlate() {
    const isConfirm = confirm('Tem certeza que deseja remover?');

    if (isConfirm) {
      await api.delete(`/plates/${params.id}`);
      return navigate('/');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <FiArrowLeft /> voltar
        </Link>

        <Content>
          <h1>Editar prato</h1>

          <Form>
            <InputWrapper>
              <div>
                <label htmlFor="event-name">Imagem do prato</label>
                <Input
                  id="event-name"
                  type="file"
                  accept="image/png, image/jpeg"
                  placeholder="Selecione imagem"
                  onChange={e => setImageFile(e.target.files[0])}
                />
              </div>

              <div className="flex">
                <label htmlFor="event-name">Nome</label>
                <Input
                  id="event-name"
                  type="text"
                  placeholder="Ex.: Salada Caesar"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                />
              </div>
            </InputWrapper>

            <InputWrapper>
              <div className="flex">
                <label htmlFor="event-name">Ingredientes</label>
                <InputItem>
                  {ingredients.map((ingredient, index) => (
                    <IngredientITem
                      key={String(index)}
                      onChange={e => setNewIngredient(e.target.value)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                  <IngredientITem
                    isNew
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                </InputItem>
              </div>

              <div>
                <label htmlFor="event-name">Preço</label>
                <Input
                  id="event-name"
                  type="text"
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(e.target.value)}
                  value={price}
                />
              </div>
            </InputWrapper>

            <Textarea
              title="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
              defaultValue={description}
            />

            <div className="button-wrapper">
              <Button title="Remover pedido" onClick={handleRemovePlate} />
              <Button title="Adicionar pedido" onClick={handleEditPlate} />
            </div>
          </Form>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
