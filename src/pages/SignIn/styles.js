import styled from 'styled-components';

import backgroundImg from '../../assets/background.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30rem;
`;

export const Form = styled.form`
  max-width: 47.6rem;
  padding: 6.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border-radius: 1.6rem;

  > h1 {
    text-align: center;
    font-size: 3.2rem;
    line-height: 2.4rem;
    font-weight: 500;
  }

  button {
    margin-bottom: 3.2rem;
    background: #92000e;
    width: 100%;
  }

  a {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    justify-content: center;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;

  &:nth-child(2) {
    margin-top: 3.2rem;
  }

  label {
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0.8rem;
  }
`;

export const Background = styled.div`
  width: 32.4rem;
  height: 4.8rem;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: 600px) {
    & {
      display: none;
    }
  }
`;
