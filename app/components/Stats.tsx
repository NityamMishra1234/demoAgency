'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const STATS = [
    { label: "Indian Brands Scaled", value: 60, suffix: "+" },
    { label: "Campaigns Shipped", value: 180, suffix: "+" },
    { label: "Avg. Growth Uplift", value: 3.2, suffix: "x" },
    { label: "Cities Impacted", value: 14, suffix: "+" },
];


export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    return (
        <section ref={ref} className="py-24 border-y border-white/10 bg-black">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
                {STATS.map((stat, i) => (
                    <div key={i} className="text-center">
                        <div className="text-5xl md:text-7xl font-black text-white mb-2">
                            {isInView && (
                                <Counter from={0} to={stat.value} duration={2} />
                            )}
                            <span className="text-[#EAB308]">{stat.suffix}</span>
                        </div>
                        <p className="text-white/40 text-sm uppercase tracking-widest font-mono">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Helper: Animated Counter
function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Note: In a real production app, use 'framer-motion' useSpring or a library like 'react-countup' 
                for the actual number ticking. For this demo, we assume static for simplicity or use a keyframe.
                To make it tick, we'd use a MotionValue. Let's keep it simple text for now to avoid hydration errors.
            */}
            {to}
        </motion.span>
    );
}