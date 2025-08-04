import React from 'react';
import Head from 'next/head';
import { SEO_DEFAULTS, APP_CONFIG } from '@/utils/constants';
import { ErrorHandler } from '@/utils/errorHandler';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  locale?: string;
  keywords?: string[];
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

const RobustSEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  locale = 'de_DE',
  keywords = [],
  author = APP_CONFIG.author,
  noindex = false,
  nofollow = false,
}) => {
  // Safely construct meta values with fallbacks
  const safeTitle = React.useMemo(() => {
    try {
      if (!title) return SEO_DEFAULTS.title;
      return title === SEO_DEFAULTS.title ? title : `${title} | ${APP_CONFIG.name}`;
    } catch (error) {
      ErrorHandler.logError(error as Error, undefined, 'RobustSEO:safeTitle');
      return SEO_DEFAULTS.title;
    }
  }, [title]);

  const safeDescription = React.useMemo(() => {
    try {
      return description || SEO_DEFAULTS.description;
    } catch (error) {
      ErrorHandler.logError(error as Error, undefined, 'RobustSEO:safeDescription');
      return SEO_DEFAULTS.description;
    }
  }, [description]);

  const safeKeywords = React.useMemo(() => {
    try {
      const allKeywords = [...APP_CONFIG.keywords, ...keywords];
      return allKeywords.filter(Boolean).join(', ');
    } catch (error) {
      ErrorHandler.logError(error as Error, undefined, 'RobustSEO:safeKeywords');
      return APP_CONFIG.keywords.join(', ');
    }
  }, [keywords]);

  const safeCanonical = React.useMemo(() => {
    try {
      if (!canonical) return undefined;
      return canonical.startsWith('http') ? canonical : `${APP_CONFIG.url}${canonical}`;
    } catch (error) {
      ErrorHandler.logError(error as Error, undefined, 'RobustSEO:safeCanonical');
      return undefined;
    }
  }, [canonical]);

  const safeImage = React.useMemo(() => {
    try {
      if (!image) return `${APP_CONFIG.url}/og-image.jpg`;
      return image.startsWith('http') ? image : `${APP_CONFIG.url}${image}`;
    } catch (error) {
      ErrorHandler.logError(error as Error, undefined, 'RobustSEO:safeImage');
      return `${APP_CONFIG.url}/og-image.jpg`;
    }
  }, [image]);

  const robotsContent = React.useMemo(() => {
    const directives = [];
    if (noindex) directives.push('noindex');
    if (nofollow) directives.push('nofollow');
    if (directives.length === 0) directives.push('index', 'follow');
    return directives.join(', ');
  }, [noindex, nofollow]);

  // Structured data for rich snippets
  const structuredData = React.useMemo(() => {
    try {
      return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: APP_CONFIG.author,
        url: APP_CONFIG.url,
        description: safeDescription,
        jobTitle: 'Web Developer & UI/UX Designer',
        knowsAbout: [
          'Web Development',
          'UI/UX Design',
          'Frontend Development',
          'TypeScript',
          'React',
          'Next.js'
        ],
        sameAs: [
          // Add your social media URLs here
        ]
      };
    } catch (error) {
      ErrorHandler.logError(error as Error, undefined, 'RobustSEO:structuredData');
      return null;
    }
  }, [safeDescription]);

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
      <meta name="keywords" content={safeKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="de" />
      <meta property="og:locale" content={locale} />
      
      {/* Canonical URL */}
      {safeCanonical && <link rel="canonical" href={safeCanonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={APP_CONFIG.name} />
      <meta property="og:image" content={safeImage} />
      <meta property="og:image:alt" content={safeDescription} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {safeCanonical && <meta property="og:url" content={safeCanonical} />}
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      <meta name="twitter:image" content={safeImage} />
      <meta name="twitter:image:alt" content={safeDescription} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_CONFIG.name} />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Cache Control for Static Assets */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
    </Head>
  );
};

export default RobustSEO;