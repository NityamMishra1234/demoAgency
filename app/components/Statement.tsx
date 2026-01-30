'use client';

import { motion, useInView } from 'framer-motion';

export default function Statement() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-black px-8 md:px-24 py-32">
            <div className="max-w-6xl">
                <h3 className="text-[#EAB308] font-mono tracking-widest uppercase mb-8">Who We Are</h3>

                <p className="text-[5vw] md:text-[3.5rem] leading-[1.1] font-medium text-white">
                    We are the <span className="text-[#EAB308]">glitch</span> in the matrix.
                    While others follow algorithms, we rewrite them. An independent digital agency
                    bridging the gap between
                    <span className="opacity-50"> raw data</span> and
                    <span className="opacity-50"> human emotion</span>.
                </p>

                <div className="mt-16 flex gap-8 items-center">
                    <div className="w-16 h-[1px] bg-[#EAB308]" />
                    <p className="text-white/60 text-lg max-w-md">
                        Founded in 2026. Based in the Cloud. Operating Globally.
                    </p>
                </div>
            </div>
        </section>
    );
}