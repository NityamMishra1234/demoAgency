export default function Process() {
    return (
        <section id="process" className="py-32 px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-20">
                    How we work
                </h2>

                <div className="grid md:grid-cols-4 gap-10">
                    {["Research", "Strategy", "Execution", "Scale"].map((step, i) => (
                        <div key={step}>
                            <span className="text-sm text-white/40">0{i + 1}</span>
                            <h3 className="text-xl font-semibold mt-2">{step}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
