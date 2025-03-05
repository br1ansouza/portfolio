import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { SocialLinks } from "./components/SocialLinks";
import { Home } from "./pages/Home";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Box>
        <Home />
        <SocialLinks />
      </Box>
    </ThemeProvider>
  );
}

export default App;
