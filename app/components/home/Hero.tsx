import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-blue-950">
            {/* gradient overlays */}
            <div 
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(circle at 50% 80%, rgb(20, 184, 166, 0.3) 0%, rgb(17, 94, 89, 0.2) 25%, rgba(2, 6, 23, 0.1) 50%, transparent 80% )`
                }}
            />
            
            <div 
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(210deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100% )`
                }}
            />
            
            {/* Noise texture overlay */}
            <div 
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay'
                }}
            />

            {/* Main container */}
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left side - phone & card */}
                    <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
                        <Image 
                            src="/hero-section.png" 
                            alt="hero picture" 
                            width={500} 
                            height={660}
                            className="relative z-10"
                        />
                    </div>

                    {/* Right side */}
                    <div className="w-full md:w-1/2 text-white space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span className="text-orange-400">🔥</span>
                            <span className="text-sm font-medium uppercase tracking-wider">Trustworthiness</span>
                        </div>

                        {/* Main heading */}
                        <h1 className="text-4xl md:text-5xl font-bold">
                            WE VALUE YOUR TRUST AND SECURITY
                        </h1>
                        <p className="text-lg text-gray-300 max-w-xl">
                            Our Mission Is To Make Finance More Accessible, Transparent, And Secure For Everyone. With Cutting.
                        </p>

                        {/* CTA Button */}
                        <Link href="/get-started" className="inline-flex items-center group">
                            <button className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-12 py-3 rounded-full transition-all duration-300">
                                Get Started
                            </button>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center ml-[-20px]">
                                <Image src="/arrow-right.png" alt="arrow-right" width={28} height={28} />
                            </div>
                        </Link>

                        {/* CTA Button */}
                     {/* <Link href="/get-started" className="inline-flex items-center group">
                        <button className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-12 py-3 rounded-full transition-all duration-300">
                        Open Account
                        </button>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center ml-[-20px]">
                            <Image src="/arrow-right.png" alt="arrow-right" width={28} height={28} />
                        </div>
                    </Link> */}
                    </div>
                </div>
            </div>

            {/* Animated glow effect */}
            <div className="absolute bottom-0 left-1/2 w-1/2 h-1/2 bg-teal-500 rounded-full filter blur-[128px] opacity-20 animate-pulse"/>
        </div>
    );
};

export default Hero;