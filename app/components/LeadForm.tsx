"use client";

import { motion } from "framer-motion";

export default function LeadForm() {
    return (
        <section
            id="lead"
            className="min-h-screen flex items-center justify-center px-6"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl w-full p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >
                <h3 className="text-3xl font-bold mb-6 text-center">
                    Let’s grow your brand.
                </h3>

                <form className="space-y-4">
                    <input className="w-full px-4 py-3 rounded-lg bg-black border border-white/10" placeholder="Your name" />
                    <input className="w-full px-4 py-3 rounded-lg bg-black border border-white/10" placeholder="Work email" />
                    <input className="w-full px-4 py-3 rounded-lg bg-black border border-white/10" placeholder="Company" />

                    <button className="w-full mt-4 py-4 rounded-full bg-[var(--accent)] font-semibold hover:scale-[1.03] transition">
                        Get My Growth Plan →
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
