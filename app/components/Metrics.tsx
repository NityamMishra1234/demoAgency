export function Metrics() {
    return (
        <section className="py-12 border-y border-white/10 ">
            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10 text-center">
                {[
                    ["+312%", "Avg ROI"],
                    ["2.4M+", "Leads Generated"],
                    ["45%", "Conversion Lift"],
                    ["50+", "Brands Scaled"],
                ].map(([value, label]) => (
                    <div key={label}>
                        <h3 className="text-2xl font-bold">{value}</h3>
                        <p className="mt-2 text-white/60">{label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
