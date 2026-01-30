'use client';

import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Statement from './components/Statement';
import Services from './components/Services';
import LeadButton from './components/LeadButton';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />

      <Marquee />

      <Statement />

      <Services />

      <Link href="/contact" className="group block">
        <section className="relative h-[50vh] flex items-center justify-center border-t border-white/10 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#EAB308]/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative text-center">
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">
              Have a project in mind?
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Let’s build something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-orange-500">
                unforgettable
              </span>
            </h2>

            <p className="mt-6 text-white/50 text-lg">
              Click to start the conversation →
            </p>
          </div>

        </section>
      </Link>
      <LeadButton />
    </main>
  );
}