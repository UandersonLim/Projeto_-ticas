import Container from "./styles";

function HeaderPage() {
  return (
    <Container>
      <figure>
        <img src="./public/assets/imagens/logo.png" alt="Logo" />
      </figure>
      <div className="border_responsive"></div>

      <ul>
        <li>
          <a href="#Produtos">PRODUTO</a>
        </li>
        <li>
          <a href="#Sobre">SOBRE</a>
        </li>
        <li>
          <a href="#Contato">CONTATO</a>
        </li>
      </ul>
    </Container>
  );
}

export default HeaderPage;
