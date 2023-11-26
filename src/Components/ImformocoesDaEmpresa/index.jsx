import { Container_Cards, Card, Container } from "./style";

function InformacoesDaEmpresa() {
  return (
    <Container id="Sobre">
      <div className="Who_Whe_are">
        <h1>QUEM SOMOS NÓS?</h1>
        <p>
          Fundada em 2001, em Nova Iguacu - Rio de Janeiro, a Óticas vidas
          iniciou suas atividades focada no atendimento a o público de<br></br>{" "}
          renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.
        </p>
      </div>
      <Container_Cards>
        <Card>
          <figure>
            <img src="./public/assets/imagens/loja.png" />
          </figure>
        </Card>
        <Card>
          <h3>Nossas Filiais</h3>
          <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
        </Card>
        <Card>
          <h3 className="remove_responsive">
            Atendimento<br></br> flexível
          </h3>
          <h3 className="display_none">Atendimento flexível</h3>
          <p>Nossa equipe possui é treinada para te atender</p>
        </Card>
        <Card>
          <figure>
            <img
              src="./public/assets/imagens/atendimento.png"
              alt="atendimento"
              title="atendimento"
            />
          </figure>
        </Card>
      </Container_Cards>
    </Container>
  );
}

export default InformacoesDaEmpresa;
