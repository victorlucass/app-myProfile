import { FooterContainer } from "./Footer.styled";

export function Footer() {
  return (
    <FooterContainer id="contact">
      <div className="footer-container">
        <p className="footer-info-container">
          Estou disponível para novos projetos no momento. Entre em contato
          comigo e marcamos uma conversa 👋
        </p>
        <ul className="footer-contact">
          <li>lobo@gmail.com</li>
          <li>+55 21 9999-9999</li>
          <li>@origamid.cursos</li>
        </ul>
        <p className="footer-copy">Lobo. Alguns direitos reservados.</p>
      </div>
    </FooterContainer>
  );
}
