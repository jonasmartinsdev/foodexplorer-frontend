import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  width: 100%;
  height: calc(100vh - 10.4rem);
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    > div {
      display: flex;
      align-items: center;
      gap: 1.3rem;

      > img {
        width: 7.2rem;
        height: 7.2rem;
      }
    }

    > strong {
      display: block;
      margin-top: 1.7rem;
      font-size: 2rem;
      font-weight: 500;
    }

    .info {
      strong {
        font-size: 2rem;
        font-weight: 500;
        margin-right: 1rem;
      }
      span {
        color: #c4c4cc;
        font-size: 1.2rem;
      }

      button {
        background: transparent;
        border: none;
        color: #ab4d55;
        font-size: 1.2rem;
      }
    }
  }
`;

export const Payment = styled.div`
  width: 53rem;
  height: 44.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .header {
    height: 8.1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    display: flex;

    button:nth-child(1) {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }

    button {
      width: 100%;
      background: rgba(255, 255, 255, 0.05);
      color: #ffffff;
      border: none;
    }
  }

  .body {
    height: calc(44.5rem - 8.1rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
