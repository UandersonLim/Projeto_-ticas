import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;

  .Our-products h3 {
    font-size: 2rem;
    margin: 5rem 0 1rem 0;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    line-height: 3rem;
  }
  figure img {
    width: 300px;
    margin: 2rem 0;
  }

`;
const Box_products = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  flex-wrap: wrap;
  grid-gap: 1rem;
  grid-auto-rows: 250px;
  margin-top: 2rem;

  @media(max-width: 768px){
        grid-template-columns: 400px;
  }


  div {
    display: flex;
    flex-direction: column;
    background-color: #eeeeee;
    justify-content: center;
    align-items: center;
  }


  div h3 {
    font-size: 1.7rem;
  }

  figcaption {
    text-align: center;
    font-size: 2rem;
  }

  .oculos_sol {
    width: 220px;
  }

  

`;

export { Container, Box_products };
