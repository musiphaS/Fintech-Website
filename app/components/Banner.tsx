import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {

    const navLinks = [
        { title: 'Personal Loan', href: '/personal-loan' },
        { title: 'One Card', href: '/one-card' },
        { title: 'Savings', href: '/savings' },
        { title: 'Checking', href: '/checking' },
        { title: 'Help', href: '/help' },
    ];

    return (
        <div className="relative bg-gradient-to-r from-blue-900 to-teal-700 min-h-screen text-white overflow-hidden">
            {/* Grid overlay, only shown on larger screens */}
            <div className="absolute inset-0 hidden md:grid grid-cols-6 grid-rows-6 border border-opacity-10 pointer-events-none">
                {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-white border-opacity-10"></div>
                ))}
            </div>

            {/* Navigation Bar */}
            <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-transparent">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/upgrade-logo1.svg" alt="upgrade logo" width={120} height={32} />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link key={link.title} href={link.title} className="text-gray-200 hover:text-white transition-colors">
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Sign In Button */}
                <button className="px-6 py-2 rounded-full border border-teal-400 text-white hover:bg-teal-400 transition-colors">
                    Sign in
                </button>
            </nav>

            {/* Hero Content */}
            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-20 flex flex-col md:flex-row items-center">
                {/* left content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2">
                        <span className="text-orange-400"> 🔥 </span>
                        <span className="text-gray-200 text-sm">100% TRUSTED PLATFORM</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        FINANCE WITH SECURITY AND{' '}
                        <span className="text-[#C5F82A]">FLEXIBILITY</span>
                    </h1>

                    <p className="text-gray-300 text-lg">
                        No-free Checking Account With Cash Back Rewards. Enjoy Fee-Free Banking And Earn Cash Back On Your Everyday Purchases.
                    </p>

                    {/* CTA Button */}
                    <button className="flex items-center space-x-2 bg-[#c5f82a] text-gray-900 px-8 py-3 rounded-full hover:bg-[#d4ff3d] transition-colors">
                        <span>Open Account</span>
                    </button>
                    

                </div>

                {/* right content */}
                <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
                    <div className="relative w-full h-[600px]">
                        <Image src="/image-banner.png" alt="banking app interface" fill className="object-contain" />
                    </div>
                </div>

            </div>

            {/* Payment Methods Section */}
            <div className="relative mx-auto px-6 md:px-12 py-8 flex items-center justify-between bg-green-800">
                <Image src="/spherule.png" alt="Spherule" width={100} height={50} />
                <Image src="/samsung.png" alt="Spherule" width={100} height={50} />
                <Image src="/visa.png" alt="Spherule" width={100} height={50} />
                <Image src="/amazon.png" alt="Spherule" width={100} height={50} />
                <Image src="/paypal.png" alt="Spherule" width={100} height={50} />
                <Image src="/alipay.png" alt="Spherule" width={100} height={50} />
            </div>
        </div>
    );
};

export default HeroSection;
