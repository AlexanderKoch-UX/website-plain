import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Sections/Hero';
import Services from '@/components/Sections/Services';
import Skills from '@/components/Sections/Skills';
import Projects from '@/components/Sections/Projects';
import Testimonials from '@/components/Sections/Testimonials';
import Packages from '@/components/Sections/Packages';
import AdditionalServices from '@/components/Sections/AdditionalServices';
import Contact from '@/components/Sections/Contact';

const HomePage: React.FC = () => {
  return (
    <Layout
      title="Alexander Koch - Full-Stack Entwickler & Digital Solutions Expert"
      description="Ihr Partner für moderne Weblösungen. Mit über 6 Jahren Erfahrung entwickle ich maßgeschneiderte, zukunftssichere Anwendungen für Ihr Unternehmen. NextJS, TypeScript, Full-Stack Development."
      canonical="https://alexanderkoch.dev"
    >
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Packages />
      <AdditionalServices />
      <Contact />
    </Layout>
  );
};

export default HomePage;