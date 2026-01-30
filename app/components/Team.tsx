'use client';

import { motion } from 'framer-motion';

const TEAM = [
    {
        name: "ARJUN S.",
        role: "Founder / Strategy",
        img1: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2574&auto=format&fit=crop",
        img2: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2574&auto=format&fit=crop"
    },
    {
        name: "ANANYA R.",
        role: "Head of Design",
        img1: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2574&auto=format&fit=crop",
        img2: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2574&auto=format&fit=crop"
    },
    {
        name: "ROHIT K.",
        role: "Tech Lead",
        img1: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
        img2: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop"
    },
    {
        name: "NEHA M.",
        role: "Creative Director",
        img1: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop",
        img2: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop"
    }
];


export default function Team() {
    return (
        <section className="py-32 px-4 md:px-12 bg-zinc-950">

            {/* Section Header */}
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
                <h2 className="text-[12vw] md:text-[6rem] font-black text-white leading-[0.8]">
                    THE <br /><span className="text-[#EAB308]">MINDS.</span>
                </h2>
                <p className="text-white/50 text-right max-w-sm mt-8 md:mt-0">
                    Strategists, designers, and engineers building brands for a
                    fast-moving Indian market — and beyond.
                </p>

            </div>

            {/* The Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {TEAM.map((member, i) => (
                    <div key={i} className="group relative w-full aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer">

                        {/* Image 1 (Professional) - Visible by default */}
                        <img
                            src={member.img1}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />

                        {/* Image 2 (Creative) - Hidden, reveals on hover */}
                        <img
                            src={member.img2}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-transform duration-700"
                        />

                        {/* Overlay Info */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-2xl font-bold text-white uppercase">{member.name}</h3>
                            <p className="text-[#EAB308] font-mono text-xs tracking-widest uppercase">{member.role}</p>
                        </div>

                        {/* Yellow Flash on Hover */}
                        <div className="absolute inset-0 bg-[#EAB308] mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>

        </section>
    );
}