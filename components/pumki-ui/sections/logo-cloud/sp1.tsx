const proof = [
    "TheNewYorkTimes",
    "TheWashingtonPost",
    "Forbes",
    "Bloomberg",
    "BusinessInsider",
    "TechCrunch",
    "TheGuardian",
    "Wired",
];

const proof2 = [
    "Bloomberg",
    "BusinessInsider",
    "Wired",
];

export const Proof = ({ variant = "classic" }: { variant?: "classic" | "glass" | "slider" | "centered" | "compact" }) => {
    if (variant === "glass") {
        return (
            <section id="press">
                <div className="py-14">
                    <div className="container mx-auto px-4 md:px-8">
                        <h3 className="text-center text-base font-bold tracking-wide text-white mb-4 drop-shadow-xl">
                            FEATURED IN
                        </h3>
                        <div className="relative mt-8 flex justify-center">
                            {/* Gradient glow behind card */}
                            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                                <div className="w-full max-w-5xl h-full rounded-3xl"
                                    style={{
                                        background: "radial-gradient(ellipse at 60% 80%, #b57edc55 0%, #23232300 70%)"
                                    }}
                                ></div>
                            </div>
                            <div className="relative z-10 backdrop-blur-xl bg-gradient-to-br from-[#232323f2] via-[#2d1933e6] to-[#b57edc22] rounded-3xl shadow-2xl border border-[#b57edc88] p-8 md:p-12 w-full max-w-5xl flex items-center min-h-[180px]"
                                style={{ boxShadow: "0 8px 32px 0 #b57edc44, 0 1.5px 8px 0 #000a" }}>
                                <div className="place-items-center flex gap-6 md:gap-8 xl:gap-x-14 w-full">
                                    {proof2.map((logo, idx) => (
                                        <img
                                            key={idx}
                                            src={`https://cdn.magicui.design/press/${logo}.svg`}
                                            className="max-h-28 max-w-72 object-contain px-2 transition-transform duration-300 hover:scale-110 hover:brightness-125 dark:invert"
                                            alt={logo}
                                            style={{ filter: 'drop-shadow(0 4px 18px #b57edc99)' }}
                                        />
                                    ))}
                                </div>
                                {/* Inner glow */}
                                <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-[#b57edc33]" style={{ boxShadow: "0 0 40px 10px #b57edc22 inset" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    if (variant === "slider") {
        // Infinite auto-scrolling slider
        return (
            <section id="press">
                <div className="py-14">
                    <div className="container mx-auto px-4 md:px-8">
                        <h3 className="text-center text-sm font-semibold text-gray-500">
                            FEATURED IN
                        </h3>
                        <div className="relative mt-6 overflow-hidden">
                            <div
                                className="flex gap-8 px-2 animate-logo-slider"
                                style={{
                                    animation: 'logoSlider 20s linear infinite',
                                    minWidth: 'max-content',
                                }}
                            >
                                {[...proof, ...proof].map((logo, idx) => (
                                    <img
                                        key={idx}
                                        src={`https://cdn.magicui.design/press/${logo}.svg`}
                                        className="h-10 w-40 flex-shrink-0 dark:brightness-0 dark:invert"
                                        alt={logo}
                                    />
                                ))}
                            </div>
                            <style>{`
                                @keyframes logoSlider {
                                    0% { transform: translateX(0); }
                                    100% { transform: translateX(-50%); }
                                }
                                .animate-logo-slider::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    if (variant === "centered") {
        return (
            <section id="press">
                <div className="py-14 relative">
                    {/* Add your SparklesCore or similar background here if needed */}
                    <div className="container mx-auto px-4 md:px-8 relative z-10">
                        <h3 className="text-center text-lg font-bold text-purple-400 mb-4">
                            FEATURED IN
                        </h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {proof.map((logo, idx) => (
                                <img
                                    key={idx}
                                    src={`https://cdn.magicui.design/press/${logo}.svg`}
                                    className="h-12 w-40 object-contain dark:brightness-0 dark:invert"
                                    alt={logo}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    if (variant === "compact") {
        return (
            <section id="press">
                <div className="py-8">
                    <div className="mx-auto max-w-xl rounded-xl bg-white/80 dark:bg-black/60 shadow-lg p-6">
                        <h3 className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            FEATURED IN
                        </h3>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {proof.map((logo, idx) => (
                                <img
                                    key={idx}
                                    src={`https://cdn.magicui.design/press/${logo}.svg`}
                                    className="h-8 w-32 object-contain dark:brightness-0 dark:invert"
                                    alt={logo}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    // Default: classic minimal
    return (
        <section id="press">
            <div className="py-14">
                <div className="container mx-auto px-4 md:px-8">
                    <h3 className="text-center text-sm font-semibold text-gray-500">
                        FEATURED IN
                    </h3>
                    <div className="relative mt-6">
                        <div className="grid grid-cols-2 place-items-center gap-2 md:gap-4 lg:grid-cols-4 xl:gap-x-6 2xl:grid-cols-8">
                            {proof.map((logo, idx) => (
                                <img
                                    key={idx}
                                    src={`https://cdn.magicui.design/press/${logo}.svg`}
                                    className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                                    alt={logo}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
