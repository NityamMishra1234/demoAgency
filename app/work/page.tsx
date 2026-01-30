'use client';

import WorkList from '../components/WorkList';
import Navbar from '../components/Navbar';
import LeadButton from '../components/LeadButton';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Work() {

    // Smooth scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-black min-h-screen text-white selection:bg-[#EAB308] selection:text-black">

            {/* 1. Global Navigation */}
            <Navbar />

            {/* 2. The Main Content (Interactive List) */}
            <WorkList />

            {/* 3. Simple Footer */}
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

            {/* 4. Persistent CTA */}
            <LeadButton />

        </main>
    );
}