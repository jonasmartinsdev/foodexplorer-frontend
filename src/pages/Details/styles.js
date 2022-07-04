import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 2.4rem auto 0;
  padding: 0 2rem;

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    gap: 1.1rem;
  }
`;

export const Content = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  gap: 4rem;

  > img {
    width: 54.5rem;
    height: 54.5rem;
    object-fit: cover;
  }

  .right {
    h2 {
      font-size: 4rem;
      font-weight: 500;
    }

    p {
      font-size: 2.4rem;
      line-height: 140%;
    }
  }

  .ingredients {
    margin-top: 2.4rem;
    display: flex;
    gap: 2.1rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .footer {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    gap: 4rem;

    strong {
      font-size: 3.2rem;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.BLUE};
    }

    > div {
      display: flex;
      gap: 1.7rem;

      > span {
        font-size: 2rem;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 900px) {
    & {
      flex-direction: column;
    }

    > img {
      width: 20.5rem;
      height: 20.5rem;
    }

    .right {
      h2 {
        font-size: 2rem;
        font-weight: 500;
      }

      p {
        font-size: 1.4rem;
        line-height: 140%;
      }
    }

    .footer {
      gap: 3rem;

      strong {
        font-size: 2.2rem;
      }
    }
  }
`;
