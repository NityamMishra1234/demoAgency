'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import Magnetic from './ui/Magnetic';
import Link from 'next/link';
import { useState } from 'react';

export default function LeadButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-10 right-10 z-50 mix-blend-difference pointer-events-auto">
            <Link href="/contact">
                <Magnetic>
                    <motion.div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        initial={{ width: 64, height: 64 }}
                        animate={{
                            width: isHovered ? 190 : 64,
                            height: 64
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex items-center justify-center bg-[#EAB308] rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] overflow-hidden cursor-pointer"
                    >
                        {/* Icon & Text Container */}
                        <div className="relative flex items-center justify-center w-full h-full">

                            {/* Icon */}
                            <motion.div
                                animate={{ x: isHovered ? -36 : 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <MessageSquare className="w-6 h-6 text-black fill-black" />
                            </motion.div>

                            {/* Text — spacing FIXED */}
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    x: isHovered ? 24 : 20
                                }}
                                className="absolute left-1/4 text-black font-bold uppercase tracking-wide whitespace-nowrap"
                            >
                                Let's Talk
                            </motion.span>

                        </div>

                        {/* Pulse Ring */}
                        {!isHovered && (
                            <div className="absolute inset-0 rounded-full border border-[#EAB308] animate-ping opacity-75" />
                        )}
                    </motion.div>
                </Magnetic>
            </Link>
        </div>
    );
}
