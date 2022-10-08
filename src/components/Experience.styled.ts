import styled from "styled-components";
import { containerDefault, subtitleDefault } from "../styles/global.styled";

export const ExperienceContainer = styled.section`
  ${containerDefault}
  h2 {
    ${subtitleDefault}
    font-weight: 700;
    color: ${(props) => props.theme.c3};
  }
  .company-container {
    display: grid;
    gap: 10px 20px;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    background: ${(props) => props.theme.c2};
    margin-bottom: 20px;
    border-radius: 4px;
    position: relative;
  }
  .company-container::before {
    content: "";
    display: block;
    width: 4px;
    height: 20px;
    background: ${(props) => props.theme.gradient};
    position: absolute;
    top: 20px;
    left: -4px;
  }
  .company-year {
    position: absolute;
    top: 22px;
    left: -100px;
    color: ${(props) => props.theme.c10};
    font-size: 0.875rem;
    width: 80px;
    text-align: right;
  }
  .company-experience {
    font-size: 0.875rem;
    line-height: 1.4;
    color: ${(props) => props.theme.c10};
  }
  .company-skill {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-content: flex-start;
  }
  .company-skill li {
    font-size: 0.875rem;
    line-height: 1.4;
    border-radius: 4px;
    background: ${(props) => props.theme.white};
    padding: 5px 10px;
  }
  .bold-titulo {
    font-size: 1.125rem;
    line-height: 1.1;
    font-weight: bold;
  }
`;
