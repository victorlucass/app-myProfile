import { HeaderContainer } from "./Header.styled";

export function Header() {
  function scrollToSection(event: any) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <HeaderContainer>
      <h1>Victor Lucas</h1>
      <nav className="js-navigation">
        <ul>
          <li>
            <a href="#experience" onClick={scrollToSection}>
              Experiência
            </a>
          </li>
          <li>
            <a href="#formation" onClick={scrollToSection}>
              Formação
            </a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToSection}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
