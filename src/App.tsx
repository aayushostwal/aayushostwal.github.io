import { useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { HomeSection } from './components/sections/HomeSection';
import { TutorialsSection } from './components/sections/TutorialsSection';
import { BlogsSection } from './components/sections/BlogsSection';
import { CareerSection } from './components/sections/CareerSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { ContactSection } from './components/sections/ContactSection';

function ScrollProgress({ accent }: { accent: string }) {
  useEffect(() => {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;
    bar.style.background = accent;
    const update = () => {
      const s = document.documentElement;
      const pct = (s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [accent]);
  return null;
}

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div id="progress-bar" />
      <ScrollProgress accent="#4B96FF" />
      <Nav activeSection={activeSection} />
      <main>
        <HomeSection />
        <TutorialsSection />
        <BlogsSection />
        <ResourcesSection />
        <CareerSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}
