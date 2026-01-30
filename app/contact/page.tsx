'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';

import Toast from '../components/ui/Toast';
import Magnetic from '../components/ui/Magnetic';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', budget: '', message: '' });
    const [toastMsg, setToastMsg] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    budget: formState.budget
                }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Failed");

            setToastMsg("Shukriya! We received your signal. 🚀");
            setFormState({ name: "", email: "", budget: "", message: "" });

        } catch (err) {
            setToastMsg("Something went wrong. Try again.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setToastMsg(null), 4000);
        }
    };


    return (
        <main className="bg-black min-h-screen text-white selection:bg-[#EAB308] selection:text-black">

            <Navbar />
            <Toast message={toastMsg} onClose={() => setToastMsg(null)} />

            <section className="pt-32 pb-12 px-6 md:px-12 lg:px-24 min-h-screen grid lg:grid-cols-2 gap-16 lg:gap-32">

                {/* LEFT COLUMN: The "Vibe" & Info */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-[12vw] lg:text-[6rem] leading-[0.8] font-black uppercase tracking-tighter mb-8"
                        >
                            Let's <br /><span className="text-[#EAB308]">Jam.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-white/60 max-w-md leading-relaxed"
                        >
                            Got a crazy idea? Or just want to scale your dhanda (business)?
                            We are ready. No bureaucracy, no endless meetings. Just straight talk.
                        </motion.p>
                    </div>

                    {/* Contact Details Grid */}
                    <div className="mt-16 grid gap-8">
                        <div className="flex items-start gap-4 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <div className="p-3 bg-[#EAB308] rounded-full text-black">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-[#EAB308] font-mono text-sm uppercase tracking-widest mb-1"> The HQ</h3>
                                <p className="text-lg font-bold">Pari Chowk, Noida</p>
                                <p className="text-white/50 text-sm">India's Tech City</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                            <div className="p-3 bg-[#EAB308] rounded-full text-black">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-[#EAB308] font-mono text-sm uppercase tracking-widest mb-1">Direct Line</h3>
                                <p className="text-lg font-bold">+91 9905805143</p>
                                <p className="text-white/50 text-sm">Mon-Fri (10 AM - 7 PM IST)</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* RIGHT COLUMN: The Modern Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-md"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                        {/* Name */}
                        <div className="group relative">
                            <label className="text-xs uppercase tracking-widest text-white/50 mb-2 block group-focus-within:text-[#EAB308] transition-colors">Your Name</label>
                            <input
                                required
                                type="text"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-bold focus:outline-none focus:border-[#EAB308] transition-colors placeholder:text-white/10"
                                placeholder="Amit Kumar"
                            />
                        </div>

                        {/* Email */}
                        <div className="group relative">
                            <label className="text-xs uppercase tracking-widest text-white/50 mb-2 block group-focus-within:text-[#EAB308] transition-colors">Email Address</label>
                            <input
                                required
                                type="email"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-bold focus:outline-none focus:border-[#EAB308] transition-colors placeholder:text-white/10"
                                placeholder="amit@company.com"
                            />
                        </div>

                        {/* Budget Selection (Pills) */}
                        <div>
                            <label className="text-xs uppercase tracking-widest text-white/50 mb-4 block">Budget (INR)</label>
                            <div className="flex flex-wrap gap-3">
                                {['< 5 k', '5-20 k', '20-50 k', '50k +'].map((b) => (
                                    <button
                                        key={b}
                                        type="button"
                                        onClick={() => setFormState({ ...formState, budget: b })}
                                        className={`px-6 py-3 rounded-full border text-sm font-medium transition-all hover:bg-[#EAB308] ${formState.budget === b
                                            ? 'bg-[#EAB308] text-black border-[#EAB308]'
                                            : 'border-white/20 text-white hover:border-white'
                                            }`}
                                    >
                                        {b}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="group relative">
                            <label className="text-xs uppercase tracking-widest text-white/50 mb-2 block group-focus-within:text-[#EAB308] transition-colors">Tell us more</label>
                            <textarea
                                rows={4}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-[#EAB308] transition-colors placeholder:text-white/10 resize-none"
                                placeholder="We need to rebrand our startup..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            disabled={isSubmitting}
                            className="mt-8 w-full bg-white text-black py-6 rounded-full font-black text-xl uppercase tracking-widest hover:bg-[#EAB308] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Request'}
                        </button>

                    </form>
                </motion.div>

            </section>

            {/* 4. SOCIAL SECTION: The "Digital Adda" */}
            {/* 4. SOCIAL SECTION: The "Digital Adda" */}
            <section className="py-24 border-t border-white/10">
                <div className="px-6 md:px-12">
                    <h2 className="text-center text-white/40 uppercase tracking-widest mb-16">Join the Digital Adda</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Instagram",
                                id: "@agency.india",
                                color: "hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-500",
                                icon: <Instagram size={28} />
                            },
                            {
                                name: "LinkedIn",
                                id: "/company/agency",
                                color: "hover:bg-[#0077b5]",
                                icon: <Linkedin size={28} />
                            },
                            {
                                name: "Facebook",
                                id: "/agency.official",
                                color: "hover:bg-[#1877F2]",
                                icon: <Facebook size={28} />
                            }
                        ].map((social, i) => (
                            <Magnetic key={i}>
                                <a href="#" className={`group relative h-72 border border-white/10 rounded-3xl flex flex-col justify-between p-8 bg-zinc-900/50 transition-all duration-500 ${social.color} hover:border-transparent overflow-hidden`}>

                                    {/* Top Row: Icon + Arrow */}
                                    <div className="relative z-10 flex justify-between items-start">
                                        {/* The Logo Bubble */}
                                        <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500 text-white">
                                            {social.icon}
                                        </div>

                                        <div className="p-2 bg-white/0 rounded-full group-hover:bg-white transition-all duration-500">
                                            <ArrowUpRight className="opacity-50 group-hover:opacity-100 group-hover:text-black transition-all" />
                                        </div>
                                    </div>

                                    {/* Bottom Row: Text Info */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-white mb-1">{social.name}</h3>
                                        <p className="text-white/50 group-hover:text-white/90 transition-colors font-mono text-sm tracking-wide">
                                            {social.id}
                                        </p>
                                    </div>

                                    {/* Subtle Background Glow Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </Magnetic>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}