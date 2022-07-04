import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.section`
  position: relative;
  display: flex;
  align-items: center;

  margin-top: 16.4rem;

  height: 26rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  > img {
    position: absolute;
    bottom: 0;
  }

  > div {
    margin-right: 4.6rem;
    margin-left: auto;

    h1 {
      font-weight: 500;
      font-size: 4rem;
    }
  }

  @media (max-width: 900px) {
    margin-top: 5rem;

    img {
      width: 60%;
      right: 0;
    }

    > div {
      margin-left: 2rem;

      h1 {
        font-weight: 500;
        font-size: 2rem;
      }
      p {
        max-width: 20rem;
        width: 100%;
        font-size: 1rem;
      }
    }
  }
`;
