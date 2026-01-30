"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function Story() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* PROBLEM */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-4xl md:text-6xl font-bold">
                        Attention is expensive.
                    </h3>
                    <p className="mt-6 text-xl text-[var(--muted)]">
                        And most brands burn money guessing.
                    </p>
                </motion.div>

                {/* SHIFT */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-4xl md:text-6xl font-bold text-[var(--accent)]">
                        We don’t guess.
                    </h3>
                    <p className="mt-6 text-xl text-[var(--muted)]">
                        We build systems that scale.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
