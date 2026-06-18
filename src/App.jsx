import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import useLenis from "./hooks/useLenis";
import IntroAnimation from "./IntroAnimation";
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import SolutionsPage from "./pages/SolutionsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  useLenis(!loading);

  return (
    <>
      {loading && <IntroAnimation onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
             <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ScrollTop />
        </>
      )}
    </>
  );
}

export default App;
