import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 10.4rem;
`;

export const Navbar = styled.div`
  max-width: 120rem;
  width: 100%;
  height: 10.4rem;
  display: flex;

  .leftSide {
    flex: 20%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .rightSide {
    flex: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .toggleNav {
    display: none;
  }

  #open {
    .nav-wrapper {
      display: inherit;
      align-items: center;
      gap: 3rem;
      margin-left: 3rem;
    }
  }

  #close {
    .nav-wrapper {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .rightSide {
      display: none;
    }

    .toggleNav {
      flex: 80%;
      display: flex;
      background: red;
      justify-content: end;

      button {
        background: none;
        border: none;
      }
    }
  }

  .buttonText {
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
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
