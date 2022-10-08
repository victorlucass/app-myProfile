import { FormationContainer } from "./Formation.styled";

export function Formation() {
  return (
    <FormationContainer id="formation" aria-label="Formação">
      <div className="formation-container">
        <h2>Formação</h2>
        <div>
          <p className="paragraphStyleDefault">
            Minha mais recente experiência acadêmica foi o mestrado 🎓 que fiz
            no exterior em UX Design. Além disso me mantenho sempre atualizado
            com cursos intensivos online.
          </p>
          <ul className="college-list">
            <li className="college-info-container">
              <span className="college-type">Bacharel</span>
              <h3 className="college-course">Administração de empresas</h3>
              <span className="college-institution">UFAM </span>
            </li>
            <li className="college-info-container">
              <span className="college-type">Bacharel</span>
              <h3 className="college-course">Administração de empresas</h3>
              <span className="college-institution">UFAM </span>
            </li>
            <li className="college-info-container">
              <span className="college-type">Bacharel</span>
              <h3 className="college-course">Administração de empresas</h3>
              <span className="college-institution">UFAM </span>
            </li>
            <li className="college-info-container">
              <span className="college-type">Bacharel</span>
              <h3 className="college-course">Administração de empresas</h3>
              <span className="college-institution">UFAM </span>
            </li>
          </ul>

          <div className="extra-training">
            <div className="courses">
              <h3>CURSOS INTENSIVOS</h3>
              <ul>
                <li>
                  UX Design & UI Design
                  <span>56h</span>
                </li>
                <li>
                  UX Design & UI Design
                  <span>56h</span>
                </li>
                <li>
                  UX Design & UI Design
                  <span>56h</span>
                </li>
                <li>
                  UX Design & UI Design
                  <span>56h</span>
                </li>
              </ul>
            </div>

            <div className="languages">
              <h3>IDIOMAS</h3>
              <ul>
                <li>
                  Inglês <span>/ Fluente</span>
                </li>
                <li>
                  Inglês <span>/ Fluente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FormationContainer>
  );
}
