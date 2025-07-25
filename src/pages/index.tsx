import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Packages from '@/components/Sections/Packages';
import Contact from '@/components/Sections/Contact';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Alexander Koch - Softwareentwickler"
      description="Alexander Koch (20) - Fachinformatiker für Anwendungsentwicklung mit 6+ Jahren Erfahrung. Spezialisiert auf NextJS, TypeScript, Node.js und moderne Webanwendungen."
      canonical="https://alexanderkoch.dev"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Packages />
      <Contact />
    </Layout>
  );
};

export default HomePage;