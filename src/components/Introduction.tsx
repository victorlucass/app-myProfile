import { IntroductionContainer } from "./Introduction.styled";
import mySelfEmoji from "../assets/myself-emoji.svg";

export function Introduction() {
  return (
    <IntroductionContainer>
      <img src={mySelfEmoji} alt="mySelf Emoji" />
      <div>
        <h1>
          Desenvolvedor <br /> Front End <br /> {"<React JS>"}
        </h1>
        <p>Localizado em Manaus 🐆</p>
      </div>
    </IntroductionContainer>
  );
}
