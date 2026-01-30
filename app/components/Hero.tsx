'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const SLIDES = [
    {
        title: "DIGITAL",
        subtitle: "We Redefine",
        img: "/marketing/marketingthree.webp",
        color: "text-white"
    },
    {
        title: "MARKETING",
        subtitle: "The New Standard",
        img: "/marketing/marketingone.jpg",
        color: "text-[#EAB308]"
    },
    {
        title: "THAT",
        subtitle: "Data Driven",
        img: "/marketing/marketingtwo.jpg",
        color: "text-white"
    },
    {
        title: "SCALES",
        subtitle: "Without Limits",
        img: "/marketing/marketingthree.webp",
        color: "text-white"
    }
];

export default function Hero() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-black">

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {SLIDES.map((slide, i) => {
                    const step = 1 / (SLIDES.length - 1);
                    const start = (i - 1) * step;
                    const end = i * step;

                    return (
                        <Slide
                            key={i}
                            data={slide}
                            progress={scrollYProgress}
                            range={[start, end]}
                            index={i}
                        />
                    );
                })}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
                className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2 mix-blend-difference text-white"
            >
                <div className="w-[1px] h-12 bg-white/50 overflow-hidden">
                    <motion.div
                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        className="w-full bg-[#EAB308]"
                    />
                </div>
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            </motion.div>

        </section>
    );
}

function Slide({ data, progress, range, index }: {
    data: typeof SLIDES[0],
    progress: MotionValue<number>,
    range: [number, number],
    index: number
}) {
    const clipProgress = useTransform(progress, range, [100, 0]);
    const clip = index === 0 ? "inset(0% 0% 0% 0%)" : useTransform(clipProgress, (v) => `inset(${v}% 0% 0% 0%)`);
    const scale = useTransform(progress, range, [1.5, 1]);
    const yText = useTransform(progress, range, [100, 0]);

    return (
        <motion.div
            style={{
                clipPath: clip,
                zIndex: index
            }}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black"
        >
            <motion.div
                style={{ scale }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <div className="relative z-10 text-center px-4">
                <motion.p
                    style={{ y: yText }}
                    className="text-lg md:text-2xl font-mono text-white/90 tracking-widest uppercase mb-4 drop-shadow-md"
                >
                    {data.subtitle}
                </motion.p>

                <motion.h1
                    className={`text-[15vw] leading-[0.8] font-black tracking-tighter uppercase drop-shadow-2xl ${data.color}`}
                >
                    {data.title}
                </motion.h1>
            </div>
        </motion.div>
    );
}