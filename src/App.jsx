import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import CyanotypesPage from "./pages/CyanotypesPage";
import MonoprintsPage from "./pages/MonoprintsPage";

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-black text-white">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/cyanotypes" element={<CyanotypesPage />} />
          <Route path="/monoprints" element={<MonoprintsPage />} />
        </Routes>

        <footer className="p-6 text-xs text-neutral-400 mt-16">
          © {new Date().getFullYear()} Aleah Slish
        </footer>
      </main>
    </Router>
  );
}
