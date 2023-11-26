import { Container, Box_products } from "./style";

function Produtos() {
  return (
    <Container id="Produtos">
      <div className="Our-products">
        <h3>Nossos produtos</h3>
        <p>
          Trabalhamos com óculos de grau, óculos de sol, lentes trasition nos
          modelos masculino, feminino e infatil.
          <br></br>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade
          do mercado.
        </p>
      </div>
      <Box_products>
        <div>
          <h3>Óculos de grau</h3>
          <figure>
            <img
              src="assets/imagens/oculos01.png"
              alt="Óculos"
              title="Óculos de grau"
            />
            <figcaption>R$ 500,00</figcaption>
          </figure>
        </div>

        <div>
          <h3>Óculos trasition</h3>
          <figure>
            <img
              src="assets/imagens/oculos02.png"
              alt="Óculos trasition"
              title="Óculos trasition"
            />
            <figcaption>R$ 750,00</figcaption>
          </figure>
        </div>

        <div>
          <h3>Óculos de sol</h3>
          <figure>
            <img
              src="assets/imagens/oculos03.png"
              alt="Óculos de sol"
              title="Óculos de sol"
              className="oculos_sol"
            />
            <figcaption>R$ 700,00</figcaption>
          </figure>
        </div>

        <div>
          <h3>Óculos infantil</h3>
          <figure>
            <img
              src="assets/imagens/oculos04.png"
              alt="Óculos infantil"
              title="Óculos infantil"
            />

            <figcaption>R$ 500,00</figcaption>
          </figure>
        </div>
      </Box_products>
    </Container>
  );
}

export default Produtos;
