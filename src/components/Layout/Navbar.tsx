'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.scss';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Über mich' },
  { href: '#skills', label: 'Skills' },
  { href: '/skills', label: 'Skill Tree' },
  { href: '#projects', label: 'Projekte' },
  { href: '#packages', label: 'Pakete' },
  { href: '#contact', label: 'Kontakt' },
  { href: '/visitenkarte', label: 'Visitenkarte' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50);

      // Only update active section on the main page
      if (router.pathname === '/') {
        const sections = document.querySelectorAll('section');
        let current = 'home';

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id') || 'home';
          }
        });

        setActiveSection(current);
      } else {
        // Reset active section when not on main page
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Also run once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  // Initialize active section when router pathname changes
  useEffect(() => {
    if (router.pathname === '/') {
      // We're on the home page, set default to 'home' if no sections are available yet
      setActiveSection('home');
    } else {
      // We're on another page, clear active section
      setActiveSection('');
    }
  }, [router.pathname]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      // If we're not on the main page, navigate to main page first
      if (router.pathname !== '/') {
        router.push('/' + href);
      } else {
        // We're on the main page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else if (href.startsWith('/')) {
      // Handle internal routes
      router.push(href);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <Link href="/">
            <h2>Alexander Koch</h2>
          </Link>
        </div>
        
        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          {navItems.map((item) => {
            let isActive = false;
            
            if (item.href.startsWith('#')) {
              // For hash links, only show as active if we're on the main page and the section is active
              isActive = router.pathname === '/' && activeSection === item.href.substring(1);
            } else {
              // For regular links, check if the pathname matches
              isActive = router.pathname === item.href;
            }
            
            return (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div
          className={`${styles.navToggle} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;