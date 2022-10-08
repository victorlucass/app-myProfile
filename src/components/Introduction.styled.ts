import styled from "styled-components";
import { pixelToRem, containerDefault } from "../styles/global.styled";

import detalhe from "../assets/detalhe.svg";

export const IntroductionContainer = styled.section`
  ${containerDefault}
  align-items: center;
  div h1 {
    font-size: 4.5rem;
    line-height: 1.125;
    font-weight: 700;
    margin-bottom: ${pixelToRem(30)};
    position: relative;
  }
  div h1::before {
    content: "";
    display: block;
    width: ${pixelToRem(130)};
    height: ${pixelToRem(100)};
    background: url(${detalhe}) no-repeat center;
    position: absolute;
    top: -15px;
    left: -40px;
    z-index: -1;
  }
  div h1::after {
    content: "|";
    margin-left: 5px;
    opacity: 1;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  @media screen and (max-width: 1000px) {
    div h1 {
      font-size: 3rem;
    }
    img {
      /* max-width: none; */
    }
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    gap: ${pixelToRem(40)};
    div h1 {
      font-size: 2rem;
    }
    .paragraphStyleDefault {
      font-size: 1.15rem;
    }
    div h1::before {
      width: ${pixelToRem(30)};
      height: 10px;
      left: 0px;
    }
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    img {
      display: none;
    }
  }
`;
