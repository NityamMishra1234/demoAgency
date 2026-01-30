'use client';

export default function Footer() {
    return (
        <div
            className="relative h-[800px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className="fixed bottom-0 h-[800px] w-full bg-[#0a0a0a] text-white flex flex-col justify-between p-12 -z-10">

                {/* Top Section */}
                <div className="flex justify-between items-start">
                    <h2 className="text-4xl font-light text-gray-400">Let's talk?</h2>
                    <button className="border border-white/20 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors">
                        hello@agency.com
                    </button>
                </div>

                {/* Huge Text */}
                <div className="flex flex-col">
                    <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-center mt-10">
                        DIGITAL<br />DREAMS
                    </h1>
                </div>

                {/* Bottom Bar */}
                <div className="flex justify-between items-end border-t border-white/10 pt-8">
                    <div className="flex gap-8 text-sm text-gray-400 uppercase">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                    <p className="text-sm text-gray-500">© 2026 Agency Inc.</p>
                </div>

            </div>
        </div>
    );
}