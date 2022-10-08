import { IntroductionContainer } from "./Introduction.styled";
import mySelfEmoji from "../assets/myself.png";
import { useEffect } from "react";

export function Introduction() {
  useEffect(() => {
    const typing = document.querySelector('[data-js="typing"]') as any;
    const messages = ["React JS", "Angular 11+", "HTML/CSS", "Javascript"];
    let messageIndex = 0;
    let characterIndex = 0;
    let currentMessage = "";
    let currentCharacter = "";

    const type = () => {
      if (messageIndex == messages.length) {
        messageIndex = 0;
      }
      currentMessage = messages[messageIndex];
      currentCharacter = currentMessage.slice(0, characterIndex++);
      typing.textContent = currentCharacter;
      if (currentCharacter.length == currentMessage.length) {
        messageIndex++;
        characterIndex = 0;
      }
    };
    setInterval(type, 300);
  }, []);
  return (
    <IntroductionContainer>
      <img src={mySelfEmoji} alt="mySelf Emoji" width="360" height="520" />
      <div>
        <h1>
          Desenvolvedor <br /> Front End <br /> <span data-js="typing"></span>
        </h1>
        <p className="paragraphStyleDefault">Localizado em Manaus 🐆</p>
      </div>
    </IntroductionContainer>
  );
}
