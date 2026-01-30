'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }: { message: string | null, onClose: () => void }) {
    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 20, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 bg-[#EAB308] text-black rounded-full shadow-[0_10px_40px_rgba(234,179,8,0.3)] min-w-[300px]"
                >
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wide">{message}</span>
                    <button 
                    title='close'
                    onClick={onClose} className="ml-auto hover:bg-black/10 rounded-full p-1">
                        <X className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}