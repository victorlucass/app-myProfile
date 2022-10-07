import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global.styled";
import { defaultTheme } from "./styles/themes/defaultTheme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyled />
    </ThemeProvider>
  );
}

export default App;
