import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Sections/Hero';

// Lazy load components that are below the fold
const Services = dynamic(() => import('@/components/Sections/Services'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const Skills = dynamic(() => import('@/components/Sections/Skills'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const Projects = dynamic(() => import('@/components/Sections/Projects'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const Testimonials = dynamic(() => import('@/components/Sections/Testimonials'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const SystemExperience = dynamic(() => import('@/components/Sections/SystemExperience'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const AdditionalServices = dynamic(() => import('@/components/Sections/AdditionalServices'), {
  loading: () => <div className="section-loading">Loading...</div>
});
const Contact = dynamic(() => import('@/components/Sections/Contact'), {
  loading: () => <div className="section-loading">Loading...</div>
});

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
      <SystemExperience />
      <AdditionalServices />
      <Contact />
    </Layout>
  );
};

export default HomePage;