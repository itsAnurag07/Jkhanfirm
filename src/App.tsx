import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProjects from './components/FeaturedProjects';
import PortfolioGlimpse from './components/PortfolioGlimpse';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FeaturedProjectsPage from './pages/FeaturedProjectsPage';
import WhoWeAre from './components/WhoWeAre';
import ProjectDetailPage from './pages/ProjectDetailPage';

/* ── Scroll to top on every route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/* ── Home page (unchanged) ── */
function HomePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', width: '100%' }}>
      {/* Premium floating glass header */}
      <Navbar />

      {/* Cinematic intro banner */}
      <Hero />

      {/* Who We Are banner */}
      <WhoWeAre />

      {/* Numerical statistics panel */}
      <Stats />

      {/* Section 1: Who We Are / Editorial details */}
      <About />

      {/* Section 2: Signature Projects Grid */}
      <FeaturedProjects />

      {/* Section 3: Interactive process step-deck */}
      <Process />

      {/* Section 4: Grid values (Asymmetrical) */}
      <WhyChooseUs />

      {/* Section 5: Masonry details texture collage */}
      <PortfolioGlimpse />

      {/* Section 6: Client luxury feedback cards */}
      <Testimonials />

      {/* Section 7: Lead generation form */}
      <ContactCTA />

      {/* Footnote details */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/featured-projects" element={<FeaturedProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
