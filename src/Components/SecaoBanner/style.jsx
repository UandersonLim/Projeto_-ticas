import styled from "styled-components";

const Container = styled.section`
  background-image: url("./public/assets/imagens/capa.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  background-position: center center;

  display: flex;
  align-items: center;

  div {
    margin-left: 190em;
    width: 70%;
  }

  h1 {
    text-transform: uppercase;
    font-size: 3000%;
    color: #fff;
    margin: 2.5rem 0;
    font-weight: 600;
    line-height: 5rem;
  }

  p {
    color: #fff;
    font-size: 3rem;
    font-weight: 300;
    justify-content: flex-start;
  }

  /* RESPONSIVE */

  @media (max-width: 1200px) {
    div {
      margin-left: 10em;
    }
  }

  @media (max-width: 768px) {
    div {
      margin-left: 50em;
    }

    h1 {
      line-height: 5rem;
      font-size: 3.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 680px) {
    background-position: 89% center;

    div {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export { Container };
