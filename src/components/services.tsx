export default function Services() {
    return (
        <section
            className="relative w-full min-h-screen bg-black text-white overflow-hidden px-6 py-16 flex flex-col items-center justify-center gap-16"
            id="services"
        >
            {/* Heading */}
            <div className="text-center z-20">
                <p className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                    What We Offer
                </p>
            </div>

            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none mt-50">
                {/* Shadow curve */}
                <img
                    src="/assets/servicesCurve2.svg"
                    alt="curve shadow"
                    className="absolute w-[130%] sm:w-[110%] max-w-none top-1/2 -translate-y-1/2"
                />

                {/* Line curve */}
                <img
                    src="/assets/servicesCurve1.png"
                    alt="curve line"
                    className="absolute w-[130%] sm:w-[110%] max-w-none top-1/2 -translate-y-1/2"
                />

                {/* Animated bubble */}
                <svg
                    viewBox="0 0 1920 630"
                    className="absolute w-[130%] sm:w-[110%] max-w-none top-1/2 -translate-y-1/2 z-10"
                >
                    <defs>
                        <linearGradient id="bubbleGradientServices" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#1942B2" />
                            <stop offset="100%" stopColor="#BC189B" />
                        </linearGradient>

                        <path
                            id="servicesPath"
                            d="M-3 374.999C220 379.499 401.109 45.0232 713 9.9991C1161.32 -40.3454 1380.51 249.307 1768.5 479.5C1861.87 534.893 1989.5 594.833 2003.5 628"
                            fill="none"
                        />
                    </defs>

                    <circle id="movingBubble"
                        r="28"
                        fill="url(#bubbleGradient)"
                        fillOpacity="0.3"
                        stroke="#9333ea"
                        strokeWidth="2"
                        strokeOpacity="0.9"
                        filter="url(#bubbleGlow)">
                    <animateMotion dur="10s" repeatCount="indefinite">
                        <mpath href="#servicesPath" />
                    </animateMotion>
                </circle>
            </svg>
        </div>

            {/* Cards */ }
    <div className="w-full max-w-7xl mx-auto p-3 z-20 mb-10 lg:-mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-25 justify-center items-stretch">
            {/* Card 1 */}
            <div className="bg-[#a47aed20] border border-[#a47aed37] backdrop-blur-md
                        rounded-2xl p-8 flex flex-col items-center text-center 
                        shadow-[0_0_20px_rgba(59,130,246,0.5)] relative z-20">
                <div className="p-4 rounded-2xl border border-[#E0E0E0]/30 w-32 h-28 flex items-center justify-center relative">
                    <img src="/assets/heart.png" alt="Heart" className="w-14" />
                    <img src="/assets/lock.png" alt="Lock" className="absolute inset-0 m-auto w-3 h-3" />
                </div>
                <h3 className="md:text-lg font-medium mt-6">PRIVATE EMOTIONAL SUPPORT</h3>
                <p className="text-sm md:text-base mt-3 text-gray-200 font-light">
                    One-on-one voice and chat sessions with complete anonymity and end-to-end encryption -
                    your conversations stay between you and your listener.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#a47aed20] border border-[#a47aed37] backdrop-blur-md
                        rounded-2xl p-8 flex flex-col items-center text-center 
                        shadow-[0_0_20px_rgba(59,130,246,0.5)] relative z-20">
                <div className="p-4 rounded-2xl border border-[#E0E0E0]/30 w-32 h-28 flex items-center justify-center">
                    <img src="/assets/globe_icon.png" alt="Network" className="w-14" />
                </div>
                <h3 className="md:text-lg font-medium mt-6">ON-DEMAND GLOBAL LISTENING NETWORK</h3>
                <p className="text-sm md:text-base mt-3 text-gray-200 font-light">
                    Connect instantly to verified listeners worldwide, available 24/7,
                    without logins, borders, or personal data sharing.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#a47aed20] border border-[#a47aed37] backdrop-blur-md
                        rounded-2xl p-8 flex flex-col items-center text-center 
                        shadow-[0_0_20px_rgba(59,130,246,0.5)] relative z-20">
                <div className="p-4 rounded-2xl border border-[#E0E0E0]/30 w-32 h-28 flex items-center justify-center">
                    <img src="/assets/currency.png" alt="Crypto" className="w-14" />
                </div>
                <h3 className="md:text-lg font-medium mt-6">SECURE, DIRECT CRYPTO PAYMENTS</h3>
                <p className="text-sm md:text-base mt-3 text-gray-200 font-light">
                    Pay or earn instantly via smart contracts - no middlemen, no delays,
                    and no platform custody of funds.
                </p>
            </div>
        </div>
    </div>
        </section >
    );
}
