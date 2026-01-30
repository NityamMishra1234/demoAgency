'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
    return (
        <div className="w-full py-4 bg-[#EAB308] overflow-hidden">
            {/* Container for the sliding text */}
            <div className="flex whitespace-nowrap">
                {/* We duplicate the text twice to create an infinite loop effect */}
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex"
                    >
                        {/* The Text Content */}
                        <span className="text-[4vw] font-black uppercase text-black leading-none px-4">
                            Strategy • Branding • Design • Development •
                        </span>
                        <span className="text-[4vw] font-black uppercase text-black leading-none px-4">
                            Growth • Marketing • Content •
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}