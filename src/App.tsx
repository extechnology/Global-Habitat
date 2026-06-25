import "./App.css";
import { lazy, Suspense, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/shared/Navbar";
import { Footer } from "./components/shared/Footer";
import { FloatingActions } from "./components/shared/FloatingActions";
import ScrollToTop from "./components/shared/ScrollToTop";
import Loader from "./components/shared/Loader";

const Homepage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* Loader — rendered above everything, removed from DOM after exit */}
      {loading && <Loader onComplete={handleLoaderComplete} duration={2600} />}

      <Router>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <FloatingActions />
      </Router>
    </>
  );
}

export default App;
