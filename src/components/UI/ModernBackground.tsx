'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ModernBackground.module.scss';

interface ModernBackgroundProps {
  variant?: 'default' | 'blue' | 'purple' | 'gradient';
  intensity?: 'light' | 'medium' | 'strong';
  animated?: boolean;
  className?: string;
}

const ModernBackground: React.FC<ModernBackgroundProps> = ({
  variant = 'default',
  intensity = 'medium',
  animated = true,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;
    
    // Set canvas dimensions
    const updateCanvasSize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Define colors based on variant
    let primaryColor: string;
    let secondaryColor: string;
    
    switch (variant) {
      case 'blue':
        primaryColor = '#2563eb';
        secondaryColor = '#60a5fa';
        break;
      case 'purple':
        primaryColor = '#9333ea';
        secondaryColor = '#a855f7';
        break;
      case 'gradient':
        primaryColor = '#2563eb';
        secondaryColor = '#9333ea';
        break;
      default:
        primaryColor = '#2563eb';
        secondaryColor = '#9333ea';
    }

    // Define opacity based on intensity
    let opacityFactor: number;
    switch (intensity) {
      case 'light':
        opacityFactor = 0.02;
        break;
      case 'strong':
        opacityFactor = 0.08;
        break;
      default:
        opacityFactor = 0.04;
    }

    // Define particle type
    type Particle = {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
    };

    // Create particles
    const particleCount = Math.floor((width * height) / 15000);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * opacityFactor + 0.01,
      });
    }

    // Create connection lines between particles
    const connectParticles = (p1: Particle, p2: Particle) => {
      const distance = Math.sqrt(
        Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
      );
      const maxDistance = 150;
      
      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${variant === 'blue' ? '37, 99, 235' : variant === 'purple' ? '147, 51, 234' : '37, 99, 235'}, ${(1 - distance / maxDistance) * 0.15})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba');
        ctx.fill();
      });
      
      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          // Stellen Sie sicher, dass beide Partikel definiert sind
          const p1 = particles[i];
          const p2 = particles[j];
          if (p1 && p2) {
            connectParticles(p1 as Particle, p2 as Particle);
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [animated, variant, intensity]);

  return (
    <div 
      ref={containerRef}
      className={`${styles.background} ${styles[variant]} ${styles[intensity]} ${className}`}
    >
      {animated && <canvas ref={canvasRef} className={styles.canvas} />}
      <div className={styles.gradientOverlay}></div>
    </div>
  );
};

export default ModernBackground;