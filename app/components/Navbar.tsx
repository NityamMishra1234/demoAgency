'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Magnetic from './ui/Magnetic';
import Link from 'next/link';

const navLinks = [
    { title: "Home", href: "/" },
    { title: "Work", href: "/work" },
    { title: "Agency", href: "/agency" },
    { title: "Contact", href: "/contact" },
];

const menuVariants: Variants = {
    closed: {
        scaleY: 0,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
        scaleY: 1,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
};

const linkVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 + i * 0.1 }
    })
};

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            {/* 1. FIXED NAVBAR — ALWAYS VISIBLE */}
            <nav className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center pointer-events-none">

                {/* Logo Pill */}
                <div className="pointer-events-auto">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white transition-all hover:bg-black/50"
                    >
                        <span className="text-xl font-black tracking-tighter uppercase">
                            AGENCY<span className="text-[#EAB308]">.</span>
                        </span>
                    </Link>
                </div>

                {/* Menu Trigger */}
                <div
                    onClick={() => setIsActive(!isActive)}
                    className="pointer-events-auto cursor-pointer group"
                >
                    <div className="flex items-center gap-3 px-2 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 transition-all hover:bg-black/50 pr-5">

                        <Magnetic>
                            <div
                                className={`w-10 h-10 bg-[#EAB308] text-black rounded-full flex flex-col justify-center items-center gap-1 transition-transform duration-300 ${isActive ? 'scale-90' : 'scale-100'
                                    }`}
                            >
                                <span
                                    className={`w-4 h-[2px] bg-black transition-all duration-300 ${isActive ? 'rotate-45 translate-y-[3px]' : ''
                                        }`}
                                />
                                <span
                                    className={`w-4 h-[2px] bg-black transition-all duration-300 ${isActive ? '-rotate-45 -translate-y-[3px]' : ''
                                        }`}
                                />
                            </div>
                        </Magnetic>

                        <span className="uppercase text-xs font-bold tracking-widest text-white group-hover:text-[#EAB308] transition-colors">
                            {isActive ? 'Close' : 'Menu'}
                        </span>
                    </div>
                </div>
            </nav>

            {/* 2. FULLSCREEN MENU */}
            <AnimatePresence mode="wait">
                {isActive && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{ originY: 0 }}
                        className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col gap-2 md:gap-4 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.title}
                                    custom={i}
                                    variants={linkVariants}
                                    initial="initial"
                                    animate="animate"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsActive(false)}
                                        className="block text-[12vw] md:text-[7vw] font-black uppercase leading-none text-white hover:text-[#EAB308] transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Menu Footer */}
                        <div className="absolute bottom-10 w-full px-10 flex justify-between text-xs text-gray-500 uppercase tracking-widest border-t border-white/10 pt-6">
                            <span>Global · Creative Growth Studio</span>
                            <div className="flex gap-4">
                                <a className="hover:text-white">Instagram</a>
                                <a className="hover:text-white">LinkedIn</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
