import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider as CustomThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CertificatesPage } from "./pages/Certificates";
import { Contact } from "./pages/Contact";
import { ResumeSection } from "./pages/Resume";
import Projects from "./pages/Projects";
import { Box } from "@mui/material";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Sidebar } from "./components/Sidebar";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <LanguageProvider>
        {loading ? (
          <LoadingScreen onLoaded={() => setLoading(false)} />) : (
          <Router>
            <Sidebar />
            <Box sx={{ marginLeft: "260px", padding: "2rem" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<ResumeSection />} />
              </Routes>
            </Box>
          </Router>
        )}
      </LanguageProvider>
    </CustomThemeProvider>
  );
}

export default App;
