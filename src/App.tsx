import { ThemeProvider } from "styled-components";
import { Experience } from "./components/Experience";
import { Formation } from "./components/Formation";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { GlobalStyled } from "./styles/global.styled";
import { defaultTheme } from "./styles/themes/defaultTheme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Introduction />
      <Experience />
      <Formation />
      <GlobalStyled />
    </ThemeProvider>
  );
}

export default App;
