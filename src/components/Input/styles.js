import styled from 'styled-components';

export const Container = styled.div`
  height: 4.8rem;

  padding: 0 1.6rem;

  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

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
