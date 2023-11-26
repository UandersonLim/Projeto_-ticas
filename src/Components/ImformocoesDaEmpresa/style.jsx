import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  height: 100vh;

  .Who_Whe_are {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 15vw; */
    gap: 2rem;
  }

  .Who_Whe_are h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 4rem;
  }

  .Who_Whe_are p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 3rem;
    font-weight: 400;
    margin-bottom: 80px;
  }

  /* RESPONSIVE */

  @media (max-width: 1200px) {
    .Who_Whe_are p {
      font-size: 1.2rem;
      padding: 0 10rem;
    }
  }

  @media (max-width: 680px) {
    height: 170vh;

    .Who_Whe_are p {
      padding: 0 12rem;
    }
  }

  @media (max-width: 550px) {
    height: 100%;

    .Who_Whe_are p {
      padding: 0 5px;
      font-size: 1rem;
    }
  }
`;

const Container_Cards = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  grid-template-rows: 235px 235px;
  margin-bottom: 4rem;

  img {
    width: 100%;
  }

  /* RESPONSIVE */
  @media (max-width: 680px) {
    grid-template-columns: 400px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border: 1px solid #a9a9a9;

  .display_none {
    display: none;
  }

  h3 {
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
  }

  /* RESPONSIVE */

  @media (max-width: 680px) {
    height: 235px;

    .display_none {
      display: block;
      font-size: 2rem;
    }

    .remove_responsive {
      display: none;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export { Container_Cards, Card, Container };
