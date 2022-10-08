import styled from "styled-components";
import { containerDefault } from "../styles/global.styled";

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.black};
  .footer-container {
    ${containerDefault}
    padding: 120px 20px 60px  20px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .footer-info-container {
    color: ${(props) => props.theme.c4};
    font-size: 1.5rem;
    line-height: 1.33;
  }
  .footer-contact li {
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 1.1;
    color: ${(props) => props.theme.white};
    margin-bottom: 30px;
  }
  .footer-contact li a,
  .footer-midias li a {
    color: ${(props) => props.theme.white};
    transition: 0.5s;
  }

  .footer-midias li a:hover {
    color: #4ea8de;
  }

  .footer-copy {
    font-size: 1.15rem;
    color: ${(props) => props.theme.c7};
  }

  .footer-midias {
    display: flex;
    gap: 5px;
    position: relative;
  }

  .rocket-top {
    position: absolute;
    top: 1px;
    right: 0px;
    animation: seta 0.5s ease-in 0s infinite alternate;
    cursor: pointer;
  }

  @keyframes seta {
    from {
      top: -10px;
    }

    to {
      bottom: 10px;
    }
  }

  @media screen and (max-width: 800px) {
    .footer-container {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .footer-contact li {
      font-size: 1.5rem;
    }
  }
`;
