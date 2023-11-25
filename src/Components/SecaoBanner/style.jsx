import styled from "styled-components";

const Container = styled.section`
  position: relative;
  background-color: transparent;

  div {
    position: absolute;
    width: 400px;
    top: 40%;
    left: 20%;
    }

    h1{
        text-transform: uppercase;
        font-size: 4rem;
        color: #fff;
        margin: 2.5rem 0;
    }

    p{
        color: #fff;
        font-size: 20px;
    }
`;

const Cover = styled.figure`
  width: 100vw;

  img {
    width: 100%;
  }
`;

export { Cover, Container };
