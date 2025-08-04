import React from 'react';
import { NextPageContext } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';

interface ErrorProps {
  statusCode?: number;
  hasGetInitialPropsRun?: boolean;
  err?: Error;
}

function Error({ statusCode, hasGetInitialPropsRun, err }: ErrorProps) {
  const getErrorMessage = () => {
    if (statusCode === 404) {
      return {
        title: 'Seite nicht gefunden',
        message: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
        code: '404'
      };
    } else if (statusCode === 500) {
      return {
        title: 'Serverfehler',
        message: 'Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
        code: '500'
      };
    } else if (statusCode) {
      return {
        title: 'Fehler aufgetreten',
        message: `Es ist ein Fehler aufgetreten (${statusCode}). Bitte versuchen Sie es erneut.`,
        code: statusCode.toString()
      };
    } else {
      return {
        title: 'Clientfehler',
        message: 'Es ist ein unerwarteter Fehler in der Anwendung aufgetreten.',
        code: 'Error'
      };
    }
  };

  const errorInfo = getErrorMessage();

  return (
    <Layout
      title={`${errorInfo.title} | Alexander Koch`}
      description={errorInfo.message}
      canonical="https://alexanderkoch.dev/error/"
    >
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--space-3xl) 0',
        background: 'linear-gradient(135deg, var(--gray-50) 0%, white 50%, var(--error-500) 10%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="scroll-animation" style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            {/* Error Code Animation */}
            <div style={{
              marginBottom: 'var(--space-2xl)',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-xl)'
              }}>
                {errorInfo.code.split('').map((digit, index) => (
                  <span key={index} style={{
                    fontSize: 'clamp(3rem, 12vw, 6rem)',
                    fontWeight: '900',
                    fontFamily: 'Poppins, sans-serif',
                    background: statusCode === 500 ? 'linear-gradient(135deg, var(--error-500) 0%, var(--error-600) 100%)' : 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: statusCode === 500 ? '0 4px 20px rgba(239, 68, 68, 0.3)' : '0 4px 20px rgba(59, 130, 246, 0.3)',
                    animation: `float ${3 + index}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`
                  }}>
                    {digit}
                  </span>
                ))}
              </div>
            </div>

            {/* Error Message */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-2xl)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: 'var(--shadow-lg)',
              padding: 'var(--space-2xl)',
              marginBottom: 'var(--space-2xl)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Top gradient border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: statusCode === 500 ? 'linear-gradient(135deg, var(--error-500) 0%, var(--error-600) 100%)' : 'var(--gradient-primary)',
                borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0'
              }} />
              
              <h1 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '800',
                marginBottom: 'var(--space-lg)',
                background: statusCode === 500 ? 'linear-gradient(135deg, var(--error-500) 0%, var(--error-600) 100%)' : 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {errorInfo.title}
              </h1>
              <p style={{
                color: 'var(--gray-600)',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                lineHeight: '1.7',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                {errorInfo.message}
              </p>
              
              {process.env.NODE_ENV === 'development' && err && (
                <details style={{ 
                  marginTop: 'var(--space-lg)', 
                  padding: 'var(--space-lg)', 
                  background: 'rgba(239, 68, 68, 0.05)', 
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(239, 68, 68, 0.1)',
                  textAlign: 'left'
                }}>
                  <summary style={{ 
                    cursor: 'pointer', 
                    fontWeight: 'bold',
                    color: 'var(--error-600)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    Entwickler-Details
                  </summary>
                  <pre style={{ 
                    fontSize: '0.8rem', 
                    marginTop: 'var(--space-sm)', 
                    whiteSpace: 'pre-wrap',
                    color: 'var(--gray-700)',
                    background: 'rgba(0, 0, 0, 0.05)',
                    padding: 'var(--space-md)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'auto'
                  }}>
                    {err.stack}
                  </pre>
                </details>
              )}
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-md)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-2xl)'
            }}>
              <Link href="/" className="btn btn-primary btn-lg">
                <i className="fas fa-home"></i>
                Zurück zur Startseite
              </Link>
              
              <button 
                onClick={() => window.location.reload()} 
                className="btn btn-secondary btn-lg"
                style={{ border: 'none' }}
              >
                <i className="fas fa-refresh"></i>
                Seite neu laden
              </button>
            </div>

            {/* Helpful Links */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-2xl)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: 'var(--shadow-lg)',
              padding: 'var(--space-2xl)',
              marginBottom: 'var(--space-2xl)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Top gradient border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'var(--gradient-secondary)',
                borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0'
              }} />
              
              <h3 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: 'var(--space-lg)',
                textAlign: 'center',
                background: 'var(--gradient-secondary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Hilfreiche Links:
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-md)'
              }}>
                {[
                  { href: '/ueber-mich', icon: 'fas fa-user', text: 'Über mich' },
                  { href: '/leistungen', icon: 'fas fa-briefcase', text: 'Leistungen' },
                  { href: '/#projects', icon: 'fas fa-code', text: 'Projekte' },
                  { href: '/#contact', icon: 'fas fa-envelope', text: 'Kontakt' }
                ].map((link, index) => (
                  <Link key={index} href={link.href} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    padding: 'var(--space-md)',
                    background: 'rgba(59, 130, 246, 0.05)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(59, 130, 246, 0.1)',
                    textDecoration: 'none',
                    color: 'var(--primary-600)',
                    transition: 'all var(--transition-normal)',
                    fontWeight: '500'
                  }}>
                    <i className={link.icon} style={{ 
                      fontSize: '1.2rem',
                      width: '20px',
                      textAlign: 'center'
                    }}></i>
                    <span>{link.text}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Suggestion */}
            <div style={{
              background: 'rgba(245, 158, 11, 0.1)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-lg)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              textAlign: 'center'
            }}>
              <p style={{
                color: 'var(--gray-700)',
                lineHeight: '1.6',
                margin: 0
              }}>
                <strong style={{ color: 'var(--accent-600)' }}>Tipp:</strong> Falls das Problem weiterhin besteht, 
                <Link href="/#contact" style={{
                  color: 'var(--primary-600)',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}> kontaktieren Sie mich</Link> gerne direkt.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '40%',
          height: '40%',
          background: statusCode === 500 ? 'radial-gradient(circle, rgba(239, 68, 68, 0.05) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          animation: 'float 15s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-20%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
          animation: 'float 18s ease-in-out infinite reverse'
        }} />
      </section>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;