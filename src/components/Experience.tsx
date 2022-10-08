import { ExperienceContainer } from "./Experience.styled";
import { ExperienceData } from "../mocks/ExperienceData";
import { ExperienceCardsProps } from "../model/ExperienceCardsProps";
export function Experience() {
  return (
    <ExperienceContainer id="experience" aria-label="Experiência">
      <h2>Experiência</h2>
      <div>
        <p className="paragraphStyleDefault">
          Olá! Me chamo Victor Lucas e atualmente estou focado em
          desenvolvimento Front-End, porém sempre disposto a aprender
          tecnologias novas. Meu objetivo é evoluir 1% por dia e me tornar um
          bom profissional 😎
        </p>

        {ExperienceData.map((company: ExperienceCardsProps) => {
          return (
            <div className="company-container" key={company.id}>
              <span className="company-year">{company.year}</span>
              <h3 className="bold-titulo">{company.companyName}</h3>
              <span className="bold-titulo">{company.office}</span>
              <p className="company-experience">{company.content}</p>
              <ul className="company-skill">
                {company.skills.map((skill) => {
                  return <li key={skill}>{skill}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </ExperienceContainer>
  );
}
