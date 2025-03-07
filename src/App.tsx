import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { Home } from "./pages/Home";
import { Box } from "@mui/material";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LanguageProvider>
        <Header />
        <Box>
          <Home />
        </Box>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
