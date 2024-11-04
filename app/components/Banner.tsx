"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'


const HeroSection: React.FC = () => {

    const navLinks = [
        { title: 'Personal Loan', href: '/personal-loan' },
        { title: 'One Card', href: '/one-card' },
        { title: 'Savings', href: '/savings' },
        { title: 'Checking', href: '/checking' },
        { title: 'Help', href: '/help' },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="relative bg-gradient-to-r from-blue-900 to-teal-700 min-h-screen text-white overflow-hidden">
            {/* Grid overlay, only shown on larger screens */}
            <div className="absolute inset-0 hidden md:grid grid-cols-12 grid-rows-12 border border-opacity-10 pointer-events-none">
                {Array.from({ length: 144 }).map((_, i) => (
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
                <button className="hidden md:block px-6 py-2 rounded-full border border-teal-400 text-white hover:bg-teal-400 transition-colors">
                    Sign in
                </button>

                {/* Hamburger Icon for Mobile */}
                <button onClick={toggleMobileMenu} className="md:hidden text-gray-200 hover:text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Mobile Full-Screen Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 z-50">
                        {/* Close Button */}
                        <button onClick={toggleMobileMenu} className="absolute top-4 right-6 text-gray-200 hover:text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Links */}
                        {navLinks.map((link) => (
                            <Link key={link.title} href={link.href} className="text-gray-200 text-xl hover:text-white transition-colors">
                                {link.title}
                            </Link>
                        ))}
                    </div>
                )}

            </nav>

            {/* Hero Content */}
            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-20 flex flex-col md:flex-row items-center">
                {/* left content */}
                <div className="w-full md:w-1/2 space-y-6">
                    <div className="inline-flex items-center space-x-2 bg-banner border border-trustworthiness rounded-full px-4 py-2">
                        <span> 🔥 </span>
                        <span className="text-gray-200 text-sm md:text-sm">100% TRUSTED PLATFORM</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        FINANCE WITH SECURITY AND{' '}
                        <span className="text-[#C5F82A]">FLEXIBILITY</span>
                    </h1>

                    <p className="text-gray-300 text-base md:text-lg">
                        No-free Checking Account With Cash Back Rewards. Enjoy Fee-Free Banking And Earn Cash Back On Your Everyday Purchases.
                    </p>

                    {/* CTA Button */}
                    <Link href="/get-started" className="inline-flex items-center group">
                        <button className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-10 py-2 rounded-full transition-all duration-300">
                            Open Account
                        </button>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center ml-[-20px]">
                            <Image src="/arrow-right.png" alt="arrow-right" width={24} height={24} />
                        </div>
                    </Link>


                </div>

                {/* right content */}
                <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
                    <div className="relative w-full h-[600px]">
                        <Image src="/image-banner.png" alt="banking app interface" fill className="object-contain" />
                    </div>
                </div>

            </div>

            {/* Payment Methods Section */}

            <div className="relative mx-auto px-6 md:px-12 py-8 flex items-center justify-between w-full bg-green-800">
                {/* Static view for larger devices */}
                <div className="hidden md:flex items-center justify-between w-full space-x-5">
                    <Image src="/spherule.png" alt="Spherule" className=' object-contain' width={120} height={60} /> {/* Adjusted size */}
                    <Image src="/samsung.png" alt="Samsung" className=' object-contain' width={120} height={60} /> {/* Adjusted size */}
                    <Image src="/visa.png" alt="Visa" className=' object-contain' width={120} height={60} /> {/* Adjusted size */}
                    <Image src="/amazon.png" alt="Amazon" className=' object-contain' width={120} height={60} /> {/* Adjusted size */}
                    <Image src="/paypal.png" alt="PayPal" className=' object-contain' width={120} height={60} /> {/* Adjusted size */}
                    <Image src="/alipay.png" alt="Alipay" className=' object-contain' width={120} height={60} /> {/* Adjusted size */}
                </div>

                {/* Mobile view (marquee effect) */}
                <div className="md:hidden overflow-hidden bg-green-800">
                    <div className="marquee">
                        <div className="marquee-content flex space-x-4">
                            {/* Images repeated to ensure seamless scrolling */}
                            <Image src="/spherule.png" alt="Spherule" width={120} height={60} />
                            <Image src="/samsung.png" alt="Samsung" width={120} height={60} />
                            <Image src="/visa.png" alt="Visa" width={120} height={60} />
                            <Image src="/amazon.png" alt="Amazon" width={120} height={60} />
                            <Image src="/paypal.png" alt="PayPal" width={120} height={60} />
                            <Image src="/alipay.png" alt="Alipay" width={120} height={60} />
                            {/* Repeat the images to create a seamless effect */}
                            <Image src="/spherule.png" alt="Spherule" width={120} height={60} />
                            <Image src="/samsung.png" alt="Samsung" width={120} height={60} />
                            <Image src="/visa.png" alt="Visa" width={120} height={60} />
                            <Image src="/amazon.png" alt="Amazon" width={120} height={60} />
                            <Image src="/paypal.png" alt="PayPal" width={120} height={60} />
                            <Image src="/alipay.png" alt="Alipay" width={120} height={60} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
