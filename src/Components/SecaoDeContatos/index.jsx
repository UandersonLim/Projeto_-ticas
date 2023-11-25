import { Contact, Container } from "./style";

function Contatos() {
  return (
    <Container id="Contato">
      <div>
        <h1>Fale conosco</h1>
        <p>
        Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de<br></br>atendimento
        </p>
      </div>
      <Contact>
        <div className="box_contact">
          <h4>Contato</h4>
          <ul>
            <li><img src="./public/assets/imagens/local.png" className="Social_image"/><span>Nova Iguaçu, JS</span></li>
            <li><img src="./public/assets/imagens/telefone.png" className="Social_image"/><span>(21) 9999-9999</span></li>
            <li><img src="./public/assets/imagens/email.png" className="Social_image"/><span>contato@otivavida.com</span></li>
          </ul>
        </div>
        <div className="box_contact">
          <h4>Nossas redes sociais</h4>
          <ul>
            <li><img src="./public/assets/imagens/fb.png" className="Social_image"/> <span>/oticaVida</span></li>
            <li><img src="./public/assets/imagens/ig.png" className="Social_image"/> <span>@oticaVida</span></li>
            <li><img src="./public/assets/imagens/tt.png" className="Social_image"/> <span>@oticaVida</span></li>
          </ul>
        </div>
      </Contact>
      <div className="footer">
        <p>© 2022 Óticas Vida. - Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}

export default Contatos;
