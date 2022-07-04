import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 10.4rem;
`;

export const Content = styled.div`
  max-width: 120rem;
  width: 100%;
  height: 10.4rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;

  .toggleNav {
    button {
      background: none;
      border: none;
    }
  }

  @media (min-width: 900px) {
    .toggleNav {
      display: none;
    }
  }
`;

export const Nav = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 2rem;
  border-radius: 0.5rem;

  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;

  > svg {
    cursor: pointer;
  }

  .buttonText {
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media (min-width: 900px) {
    & {
      position: relative;
      top: 0;
      padding: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;

      gap: 3rem;
    }
  }
`;

export const InputWrapper = styled.div`
  height: 4.8rem;

  padding: 0 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  input {
    background: 0;
    border: 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
  }
`;
