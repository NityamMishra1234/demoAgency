"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, transform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        title: "TATA MOTORS",
        category: "Strategy",
        type: "Brand Strategy / Campaign",
        year: "2025",
        img: "/work/tata.webp",
        color: "#0A2A66",
    },
    {
        title: "ZOMATO",
        category: "Design",
        type: "Product Design / Growth",
        year: "2024",
        img: "/work/zomato.webp",
        color: "#E23744",
    },
    {
        title: "PAYTM",
        category: "Strategy",
        type: "Fintech Platform / UX",
        year: "2024",
        img: "/work/paytm.jpg",
        color: "#00B9F1",
    },
    {
        title: "BYJU’S",
        category: "Marketing",
        type: "Performance Marketing",
        year: "2023",
        img: "/work/byjus",
        color: "#813588",
    },
    {
        title: "BOAT",
        category: "Design",
        type: "Brand Identity",
        year: "2023",
        img: "/work/boat.jpg",
        color: "#E10600",
    },
];

export default function WorkList() {
    const [activeFilter, setActiveFilter] = useState<
        "All" | "Strategy" | "Design" | "Marketing"
    >("All");

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // MOUSE TRACKING FOR THE FLOATING IMAGE
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the mouse movement (Spring)
    const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

    // Handle mouse move
    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen bg-black py-32 px-4 md:px-24 overflow-hidden"
        >
            {/* Header */}
            <div className="mb-16 border-b border-white/20 pb-8 flex justify-between items-end">
                <h1 className="text-[10vw] md:text-[6rem] font-black uppercase leading-none text-white">
                    Selected <br /> <span className="text-zinc-600">Works (12)</span>
                </h1>
                <div className="hidden md:block text-right">
                    <p className="text-sm text-gray-400 uppercase tracking-widest">
                        Filter By
                    </p>
                    <div className="mt-8 md:mt-0 flex flex-wrap gap-4">
                        {["All", "Strategy", "Design", "Marketing"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter as any)}
                                className={`uppercase text-xs tracking-widest transition-colors
        ${activeFilter === filter
                                        ? "text-[#EAB308]"
                                        : "text-gray-500 hover:text-white"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* THE PROJECT LIST */}
            <div className="flex flex-col">
                {PROJECTS.filter(
                    (project) =>
                        activeFilter === "All" || project.category === activeFilter,
                ).map((project, index) => (
                    <ProjectItem
                        key={index}
                        data={project}
                        index={index}
                        setHoveredIndex={setHoveredIndex}
                        hoveredIndex={hoveredIndex}
                    />
                ))}
            </div>

            {/* THE FLOATING MODAL (The Magic Part) */}
            <FloatingModal
                projects={PROJECTS}
                hoveredIndex={hoveredIndex}
                x={springX}
                y={springY}
            />
        </section>
    );
}

// ----------------------------------------------------------------------
// SUB-COMPONENT: Single List Row
// ----------------------------------------------------------------------
function ProjectItem({ data, index, setHoveredIndex, hoveredIndex }: any) {
    const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

    return (
        <Link href={`/work/${index}`} className="group relative block">
            <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-white/10 transition-all duration-500 ${isDimmed ? "opacity-20 blur-[2px]" : "opacity-100"}`}
            >
                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-black uppercase group-hover:translate-x-4 transition-transform duration-500 text-white">
                    {data.title}
                </h2>

                {/* Meta Data */}
                <div className="flex items-center gap-12 mt-4 md:mt-0 font-mono text-sm md:text-base text-gray-400 group-hover:text-white transition-colors">
                    <span className="uppercase tracking-widest">{data.type}</span>
                    <span>{data.year}</span>
                </div>
            </div>

            {/* Mobile-Only Image (Since hovering doesn't work on phones) */}
            <div className="md:hidden w-full h-48 mt-4 overflow-hidden rounded-lg mb-8">
                <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-full object-cover"
                />
            </div>
        </Link>
    );
}

// ----------------------------------------------------------------------
// SUB-COMPONENT: Floating Modal Image
// ----------------------------------------------------------------------
import { MotionValue } from "framer-motion";

function FloatingModal({
    projects,
    hoveredIndex,
    x,
    y,
}: {
    projects: typeof PROJECTS;
    hoveredIndex: number | null;
    x: MotionValue;
    y: MotionValue;
}) {
    return (
        <motion.div
            style={{ x, y }}
            className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-50 hidden md:flex flex-col justify-center items-center overflow-hidden rounded-2xl"
        >
            {/* The sliding window effect */}
            <motion.div
                className="relative w-full h-full bg-black"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: hoveredIndex !== null ? 1 : 0,
                    opacity: hoveredIndex !== null ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }} // Authentic easing
            >
                {/* We map all images but transform them so it looks like a slider */}
                <div
                    className="absolute w-full h-full transition-transform duration-500 ease-[0.76,0,0.24,1]"
                    style={{ transform: `translateY(-${(hoveredIndex || 0) * 100}%)` }}
                >
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="w-full h-full flex items-center justify-center bg-zinc-900 relative"
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay button */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100">
                                <div className="w-16 h-16 bg-[#EAB308] rounded-full flex items-center justify-center">
                                    <ArrowUpRight className="text-black w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Cursor Label "VIEW" */}
            <motion.div
                className="absolute -bottom-8 bg-[#EAB308] text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex !== null ? 1 : 0 }}
            >
                View Case Study
            </motion.div>
        </motion.div>
    );
}
