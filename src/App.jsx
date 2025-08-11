import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CyanotypesPage from "./pages/CyanotypesPage";
import MonoprintsPage from "./pages/MonoprintsPage";

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white text-neutral-900">
        <header className="p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Aleah — Portfolio
          </h1>
          <Navigation />
        </header>

        <div className="p-6 md:p-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cyanotypes" element={<CyanotypesPage />} />
            <Route path="/monoprints" element={<MonoprintsPage />} />
          </Routes>
        </div>

        <footer className="p-6 text-xs text-neutral-500 mt-16">
          © {new Date().getFullYear()} Aleah
        </footer>
      </main>
    </Router>
  );
}
