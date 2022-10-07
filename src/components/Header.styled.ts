import styled from "styled-components";
import { pixelToRem } from "../styles/global.styled";

export const HeaderContainer = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pixelToRem(40)} ${pixelToRem(20)};
  max-width: ${pixelToRem(1200)};
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
  nav ul {
    display: flex;
    gap: ${pixelToRem(10)};
    flex-wrap: wrap;
    justify-content: center;
  }
  nav ul li a {
    font-size: 1.125rem;
    line-height: 1.3;
    padding: ${pixelToRem(10)} ${pixelToRem(20)};
    text-decoration: none;
    color: ${(props) => props.theme.c13};
    display: block;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: ${pixelToRem(40)};
    padding: ${pixelToRem(20)};
    nav ul li a {
      background-color: ${(props) => props.theme.c1};
      border-radius: 4px;
    }
  }
`;
