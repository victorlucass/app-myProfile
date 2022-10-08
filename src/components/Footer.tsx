import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Rocket,
  WhatsappLogo,
} from "phosphor-react";
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
          <li>
            <a href="mailto:victorlucas.ao@gmail.com">
              victorlucas.ao@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+5592984654261">+55 92 98465-4261</a>
          </li>
          <li>@victorlucasss</li>
        </ul>
        <p className="footer-copy">#NeverStopLearning</p>
        <ul className="footer-midias">
          <li>
            <a href="https://contate.me/victorlucasss" target="_blank">
              <WhatsappLogo size={40} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/victorlucasss/" target="_blank">
              <InstagramLogo size={40} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/victorlucas.ao" target="_blank">
              <FacebookLogo size={40} />
            </a>
          </li>
          <li>
            <a href="https://github.com/victorlucass" target="_blank">
              <GithubLogo size={40} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/victor-lucas-52ba3b17a/"
              target="_blank"
            >
              <LinkedinLogo size={40} />
            </a>
          </li>
          <li>
            <a
              className="rocket-top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <Rocket size={40} color="#1E6F9F" />
            </a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
}
