export default function Services() {
    return (
        <section className="relative w-full min-h-screen bg-black text-white overflow-hidden px-6 py-16 flex flex-col items-center justify-center gap-16" id="services">
            {/* Heading */}
            <div className="text-center z-20">
                <p className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                    What We Offer
                </p>
            </div>

            <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none mt-50">
                {/* Shadow curve */}
                <img
                    src="/assets/servicesCurve2.png"
                    alt="curve shadow"
                    className="absolute w-[130%] sm:w-[110%] max-w-none top-1/2 -translate-y-1/2"
                />

                {/* Line curve */}
                <img
                    src="/assets/servicesCurve1.png"
                    alt="curve line"
                    className="absolute w-[130%] sm:w-[110%] max-w-none top-1/2 -translate-y-1/2"
                />
            </div>


            {/* Cards */}
            <div className="w-full max-w-7xl mx-auto p-4 z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-center items-stretch">

                    {/* Card 1 */}
                    <div className="bg-[#a47aed20] border border-[#a47aed37] backdrop-blur-md
                        rounded-2xl p-8 flex flex-col items-center text-center 
                        shadow-[0_0_20px_rgba(59,130,246,0.5)] relative z-20">

                        <div className="p-4 rounded-2xl border border-[#E0E0E0]/30 w-32 h-28 flex items-center justify-center relative">
                            <img src="/assets/heart.png" alt="Heart" className="w-14" />
                            <img
                                src="/assets/lock.png"
                                alt="Lock"
                                className="absolute inset-0 m-auto w-3 h-3"
                            />
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
        </section>
    );
}
