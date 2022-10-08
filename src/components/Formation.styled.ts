import styled from "styled-components";
import courseIcon from "../assets/course.svg";
import languageIcon from "../assets/languages.svg";
import detalhe from "../assets/detalhe.svg";
import {
  containerDefault,
  pixelToRem,
  subtitleDefault,
} from "../styles/global.styled";

export const FormationContainer = styled.section`
  background: ${(props) => props.theme.c13};
  .formation-container {
    ${containerDefault}
    padding: 120px 20px;
    h2 {
      ${subtitleDefault}
      font-weight: 700;
      color: ${(props) => props.theme.black};
      max-width: 5ch;
    }
    position: relative;
  }

  .formation-container::after {
    content: "";
    display: block;
    width: 130px;
    height: 100px;
    background: url(${detalhe}) no-repeat center;
    position: absolute;
    bottom: -50px;
    left: 20px;
  }

  .paragraphStyleDefault {
    color: ${(props) => props.theme.c6};
  }

  .college-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 60px;
  }
  .college-info-container {
    background: ${(props) => props.theme.black2};
    border: 1px solid ${(props) => props.theme.black};
    border-radius: 5px;
    padding: 20px 80px 20px 20px;
  }
  .college-type,
  .college-institution {
    color: ${(props) => props.theme.c6};
    text-transform: uppercase;
    font-weight: 400;
  }
  .college-type {
    font-size: ${pixelToRem(14)};
  }
  .college-institution {
    font-size: ${pixelToRem(18)};
  }
  .college-course {
    color: ${(props) => props.theme.white};
    margin: 10px 0 40px 0;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.4;
    position: relative;
  }
  .college-course::before {
    content: "";
    display: block;
    width: 4px;
    height: 20px;
    background: ${(props) => props.theme.gradient};
    position: absolute;
    left: -24px;
  }

  .extra-training h3 {
    color: ${(props) => props.theme.c7};
    font-size: 0.875rem;
    line-height: 1.4;
    text-transform: uppercase;
    margin-bottom: 30px;
    position: relative;
  }

  .extra-training h3::before {
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    left: -36px;
    top: -4px;
  }

  .courses h3::before {
    background: url(${courseIcon}) no-repeat center center;
  }

  .languages h3::before {
    background: url(${languageIcon}) no-repeat center center;
  }

  .extra-training ul li {
    color: ${(props) => props.theme.white};
    font-size: 1.125rem;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .extra-training .courses ul li {
    display: flex;
    justify-content: space-between;
  }

  .extra-training ul li span {
    color: ${(props) => props.theme.c7};
  }

  .courses {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 800px) {
    .formation-container {
      grid-template-columns: 1fr;
      padding: 60px 20px;
      gap: 40px;
    }

    .formation-container h2 {
      font-size: 3rem;
      text-transform: capitalize;
      max-width: initial;
      color: ${(props) => props.theme.c2};
    }
    .formation-container .paragraphStyleDefault {
      font-size: 1.25rem;
    }

    .extra-training h3::before {
      position: initial;
      margin-bottom: 10px;
    }
  }

  .paragraphStyleDefault strong {
    color: ${(props) => props.theme.white};
  }
`;
