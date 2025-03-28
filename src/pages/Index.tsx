
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeatureShowcase from '@/components/FeatureShowcase';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.pageYOffset - 100,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeatureShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
