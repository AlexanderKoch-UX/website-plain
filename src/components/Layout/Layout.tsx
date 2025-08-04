import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Alexander Koch - Full-Stack Entwickler & Digital Solutions Expert',
  description = 'Ihr Partner für moderne Weblösungen. Mit über 6 Jahren Erfahrung entwickle ich maßgeschneiderte, zukunftssichere Anwendungen für Ihr Unternehmen.',
  canonical = 'https://alexanderkoch.dev'
}) => {
  // Automatically activate scroll animations for all pages
  useScrollAnimation();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="German" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonical} />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Fonts and stylesheets are now loaded in _document.tsx */}
        

        
        {/* Theme Color */}
        <meta name="theme-color" content="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="Alexander Koch Portfolio" />
        <meta property="og:image" content={`${canonical}/android-chrome-512x512.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${canonical}/android-chrome-512x512.png`} />
        
        {/* Additional SEO */}
        <meta name="author" content="Alexander Koch" />
        <meta name="keywords" content="Alexander Koch, Full-Stack Entwickler, Webentwicklung, Next.js, TypeScript, React, Node.js, Softwareentwicklung, Vreden, Deutschland" />
      </Head>
      
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      
    </>
  );
};

export default Layout;