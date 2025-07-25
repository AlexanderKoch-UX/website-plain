import React from 'react';
import Layout from '@/components/Layout/Layout';
import SkillTree from '@/components/SkillTree/SkillTree';

const SkillsPage: React.FC = () => {
  return (
    <Layout
      title="Skill Tree - Alexander Koch"
      description="Entdecken Sie die Tiefe und Breite meiner technischen Fähigkeiten in einer interaktiven Skill Tree Darstellung."
      canonical="https://alexanderkoch.dev/skills"
    >
      <SkillTree />
    </Layout>
  );
};

export default SkillsPage;