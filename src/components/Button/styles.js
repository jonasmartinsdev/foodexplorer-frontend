import styled from 'styled-components';

export const Container = styled.button`
  padding: 1.2rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0.5rem;

  border: 0;
`;
