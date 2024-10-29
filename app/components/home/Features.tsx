import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Feature = {
    text: string;
};

const Features = () => {
    const features: Feature[] = [
        { text: 'Get 3% Cash Back On Everyday Purchases, 2% On Everything Else4' },
        { text: 'Extra Spending Power When You Have Rewards Checking Through Upgrade6' }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100">
                        <span className="mr-2">🔥</span>
                        <span className="text-sm font-medium">FEATURED</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        ALL THE FEATURES<br />IN ONE APP
                    </h2>

                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-gray-700">{feature.text}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href="/get-started" className='inline-flex items-center group'>

                        <button className="flex items-center space-x-2 border border-teal-400 text-gray-900 px-8 py-3 rounded-full">
                            Get Started
                        </button>
                        <div className='w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center'>
                            <Image src="/arrow-right.png" alt="arrow-right" width={30} height={30} />
                        </div>
                    </Link>
                </div>

                {/* Right Content - Phone Images */}
                <div className="relative">
                    <div className="bg-gray-50 rounded-3xl px-8">
                        <Image src="/feature-phones.png" alt="Mobile app card settings screen" className="w-full max-w-full max-h-full rounded-3xl object-contain object-cover" width={500} height={50}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;