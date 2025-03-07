import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CertificatesPage } from "./pages/Certificates";
import { Contact } from "./pages/Contact";
import { Box } from "@mui/material";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LanguageProvider>
        <Router>
          <Sidebar />
          <Box sx={{ marginLeft: "260px", padding: "2rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
