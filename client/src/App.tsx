import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./components/providers/theme-provider";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="discord-clone-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Auth routes will go here */}
          {/* App routes will go here */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
