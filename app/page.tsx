'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import ForumCategories from '@/components/ForumCategories'
import WhyUs from '@/components/WhyUs'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ForumCategories />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

function BackToTopButton() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const backToTopBtn = document.createElement('button');
            backToTopBtn.id = 'backToTop';
            backToTopBtn.className = 'fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:shadow-xl opacity-0 transition-all duration-300 z-40 pointer-events-none';
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.style.display = 'none';
            document.body.appendChild(backToTopBtn);

            window.addEventListener('scroll', () => {
              if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.pointerEvents = 'auto';
              } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.pointerEvents = 'none';
                setTimeout(() => {
                  backToTopBtn.style.display = 'none';
                }, 300);
              }
            });

            backToTopBtn.addEventListener('click', () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          });
        `,
      }}
    />
  )
}
