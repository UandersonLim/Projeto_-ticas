import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7rem;

  img {
    width: 150px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }

  li a {
    color: #000;
    font-size: 2rem;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
  }

  /* RESPONSIVE */

  @media (max-width: 680px) {
    flex-direction: column;

    .border_responsive {
      border: 1px solid #eeeeee;
      width: 90%;
    }

    img {
      width: 120px;
    }

    li a {
      font-size: 1.5rem;
    }
  }
`;

export default Container;
