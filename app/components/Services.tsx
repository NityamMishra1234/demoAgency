'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SERVICES = [
    {
        id: "01",
        title: "STRATEGY",
        desc: "We don't guess. We map the territory.",
        tags: ["Brand Positioning", "Market Analysis", "User Persona", "Audits"],
        color: "bg-zinc-800"
    },
    {
        id: "02",
        title: "DESIGN",
        desc: "Visuals that force a double-take.",
        tags: ["UI/UX Design", "3D Motion", "Brand Identity", "Design Systems"],
        color: "bg-[#EAB308] text-black" // Highlight Card
    },
    {
        id: "03",
        title: "DEVELOPMENT",
        desc: "Clean code. Bulletproof performance.",
        tags: ["Next.js", "WebGL", "Shopify", "Creative Coding"],
        color: "bg-zinc-800"
    },
    {
        id: "04",
        title: "MARKETING",
        desc: "Campaigns that convert traffic into cults.",
        tags: ["SEO/SEM", "Social Growth", "Content Strategy", "Performance"],
        color: "bg-zinc-800"
    }
];

export default function Services() {
    const targetRef = useRef(null);

    const PANEL_COUNT = SERVICES.length + 1;

    // Create a scroll range based on the height of this container
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map vertical scroll (0 to 1) to horizontal movement (0% to -75%)
    // -75% because we have 4 items, so we need to move 3 full widths to see the last one.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        // 1. The Container: Needs to be tall (400vh) to allow scroll time
        <section ref={targetRef} className="relative h-[400vh] bg-black">

            {/* 2. The Sticky Viewport: Stays fixed while we scroll through the 400vh */}
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* 3. The Moving Track */}
                <motion.div
                    style={{ x }}
                    className="flex gap-10 pl-10 md:pl-24"
                >
                    {/* Header Card (Introduction) */}
                    <div className="min-w-[80vw] md:min-w-[40vw] flex flex-col justify-center">
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-none">
                            Our <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-orange-500">Expertise</span>
                        </h2>
                        <p className="mt-8 text-white/50 text-xl max-w-sm">
                            A full-cycle approach to digital dominance. Scroll to explore.
                        </p>
                    </div>

                    {/* Service Cards */}
                    {SERVICES.map((service, i) => (
                        <ServiceCard key={i} data={service} />
                    ))}

                </motion.div>
            </div>
        </section>
    );
}

// Sub-Component for individual cards
function ServiceCard({ data }: { data: typeof SERVICES[0] }) {
    return (
        <div className={`relative h-[60vh] min-w-[80vw] md:min-w-[30vw] p-8 md:p-12 flex flex-col justify-between ${data.color} rounded-3xl`}>
            {/* Top */}
            <div className="flex justify-between items-start border-b border-current pb-6 opacity-80">
                <span className="text-xl font-mono">{data.id}</span>
                <span className="text-3xl">↗</span>
            </div>

            {/* Middle */}
            <div>
                <h3 className="text-4xl md:text-5xl font-bold uppercase mb-4 leading-none">
                    {data.title}
                </h3>
                <p className="opacity-70 text-lg leading-relaxed max-w-xs">
                    {data.desc}
                </p>
            </div>

            {/* Bottom (Tags) */}
            <div className="flex flex-wrap gap-2">
                {data.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs uppercase tracking-wider border border-current rounded-full opacity-60">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}