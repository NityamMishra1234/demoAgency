'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import LeadButton from '../components/LeadButton';
import Team from '../components/Team';
import Stats from '../components/Stats';
import Marquee from '../components/Marquee';

export default function Agency() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-black min-h-screen text-white selection:bg-[#EAB308] selection:text-black">

            <Navbar />

            {/* 1. HERO: Brutalist Typography */}
            <section className="relative min-h-[80vh] flex flex-col justify-center px-4 md:px-12 pt-32 overflow-hidden">

                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 w-[50vw] h-[50vw] bg-[#EAB308] rounded-full blur-[120px] opacity-20 pointer-events-none" />

                {/* Grounding Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />

                {/* Content */}
                <h1 className="relative text-[13vw] leading-[0.85] font-black uppercase tracking-tighter text-white">
                    We Are <br />
                    The Anti <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-orange-500">
                        Agency.
                    </span>
                </h1>

                <div className="relative mt-12 flex flex-col md:flex-row gap-12 max-w-3xl">
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                        India doesn’t move slowly — and neither do we.
                        We help ambitious brands cut through noise, scale fast,
                        and win markets where attention is expensive and loyalty is earned.
                    </p>
                </div>

            </section>


            {/* 2. STATS (Proof) */}
            <Stats />

            {/* 3. TEAM (The Minds) */}
            <Team />

            {/* 4. MARQUEE (Culture) */}
            <div className="py-24">
                <p className="text-center text-white/40 mb-8 uppercase tracking-widest text-sm">Our Philosophy</p>
                <Marquee />
            </div>

            {/* 5. AWARDS LIST (The Receipt) */}
            <section className="py-32 px-4 md:px-24 border-t border-white/10 bg-zinc-950">
                <h2 className="text-4xl font-black uppercase mb-16 text-[#EAB308]">Recognition</h2>
                <div className="flex flex-col">
                    {[
                        { award: "Awwwards", project: "Nike Air", year: "2025" },
                        { award: "Clio Gold", project: "Spotify Wrapped", year: "2024" },
                        { award: "Webby", project: "Agency Site", year: "2024" },
                        { award: "Cannes Lion", project: "Tesla AR", year: "2023" }
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-8 border-b border-white/10 group hover:bg-white/5 transition-colors px-4">
                            <span className="text-xl md:text-3xl font-bold">{item.award}</span>
                            <div className="flex gap-8 text-white/50 font-mono text-sm md:text-base">
                                <span>{item.project}</span>
                                <span>{item.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. CTA */}
            <section className="h-[50vh] flex flex-col items-center justify-center text-center">
                <h2 className="text-[5vw] font-black uppercase mb-4">Join the Cult.</h2>
                <p className="text-white/50 mb-8">We are always looking for dangerous talent.</p>
                <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                    View Careers
                </button>
            </section>

            <LeadButton />

        </main>
    );
}