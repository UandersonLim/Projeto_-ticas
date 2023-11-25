import {Cover, Container} from "./style.jsx";

function Banner() {
  return (
    <Container>
      <Cover>
        <img src="./public/assets/imagens/capa.png" />
      </Cover>
      <div>
        <p>Preços baixos e</p>
        <h1>Óculos de<br></br> grau e de sol</h1>
        <p>Você só encontra aqui</p>
      </div>
    </Container>
  );
}

export default Banner;
