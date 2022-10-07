import { HeaderContainer } from "./Header.styled";

export function Header() {
  return (
    <HeaderContainer>
      <h1>Victor Lucas</h1>
      <nav>
        <ul>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#formation">Formação</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
