import { CoursesData } from "../mocks/CoursesData";
import { FormationContainer } from "./Formation.styled";

export function Formation() {
  return (
    <FormationContainer id="formation" aria-label="Formação">
      <div className="formation-container">
        <h2>Formação</h2>
        <div>
          <p className="paragraphStyleDefault">
            Minha mais recente experiência acadêmica foi a{" "}
            <strong>graduação</strong> 🎓 em
            <strong> sistemas de informação</strong>. Além disso me mantenho
            sempre atualizado com cursos intensivos online.
          </p>
          <ul className="college-list">
            <li className="college-info-container">
              <span className="college-type">Bacharel</span>
              <h3 className="college-course">
                Sistemas de <br /> Informação
              </h3>
              <span className="college-institution">UNINORTE </span>
            </li>
            <li className="college-info-container">
              <span className="college-type">TECNÓLOGO</span>
              <h3 className="college-course">
                Programador <br /> Web - Básico
              </h3>
              <span className="college-institution">FPF Tech</span>
            </li>
          </ul>

          <div className="extra-training">
            <div className="courses">
              <h3>CURSOS INTENSIVOS</h3>
              <ul>
                {CoursesData.map((course) => {
                  return (
                    <li key={course.name}>
                      {course.name} <span>{course.hours}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="languages">
              <h3>IDIOMAS</h3>
              <ul>
                <li>
                  Inglês <span>/ Básico</span>
                </li>
                <li>
                  Português <span>/ Nativo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FormationContainer>
  );
}
