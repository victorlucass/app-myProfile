import { ExperienceCardsProps } from "../model/ExperienceCardsProps";
import { v4 as uuidv4 } from "uuid";
export const ExperienceData: ExperienceCardsProps[] = [
  {
    id: uuidv4(),
    companyName: "Itaú Unibanco",
    skills: [
      "Angular",
      "Bootstrap",
      "AWS",
      "GitLab",
      "Jira",
      "Teams",
      "Typescript",
    ],
    year: "2022",
    office: "Dev. Front-End Jr",
    content:
      "Ainda no projeto CREDLINE, participei em criações de componentes, funcionalidades voltadas as regras de negócios internas, acessibilidade do usuário e entre outros.",
  },
  {
    id: uuidv4(),
    companyName: "zFlow",
    skills: [
      "Angular",
      "Bootstrap",
      "AWS",
      "Swagger",
      "Jira",
      "Slack",
      "Typescript",
    ],
    year: "2021-22",
    office: "Dev. Front-End Jr",
    content:
      "Trabalhei na plataforma CREDLINE, na qual participei na manutenção de funcionalidades/interfaces, criações de componentes, gestão de builds com AWS e entre outros.",
  },
  {
    id: uuidv4(),
    companyName: "Instituto Conecthus",
    skills: [
      "Angular",
      "SpringBoot",
      "Swagger",
      "Jira",
      "Teams",
      "Java",
      "Typescript",
    ],
    year: "2020-21",
    office: "Estagiário ",
    content:
      "Meus primeiros contatos com projetos reais com clientes e data de entrega, usando metodologia ágeis (Scrum). Trabalhei tanto no Front End quanto no Back End, um periodo de muito aprendizado.",
  },
];
