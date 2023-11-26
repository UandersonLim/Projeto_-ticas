import styled from "styled-components";

const Container = styled.footer`
  background-color: #000026;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  gap: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin: 8rem 0 1rem 0;
  }

  p {
    font-size: 1.2rem;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8vh;
    background-color: #000;
  }

  .footer p {
    font-size: 1.6rem;
  }

  @media (max-width: 680px) {
    p {
      padding: 3rem;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.5rem;

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 4rem;
  }

  .box_contact {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
  }

  .box_contact h4 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .box_contact ul li {
    line-height: 3rem;
    list-style: none;
  }

  .box_contact ul li span {
    margin-left: 1rem;
    font-size: 1.2rem;
  }

  .box_contact ul li img {
    width: 10px;
  }
`;

export { Container, Contact };
