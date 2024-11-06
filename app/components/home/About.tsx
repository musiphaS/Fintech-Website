import Image from "next/image";
import { FC } from "react";
import React from 'react';


interface FeatureCardProps {
    title: string;
    description: string;
    highlighted?: boolean;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description, highlighted }) => (
    <div className={`p-6 rounded-xl border border-gray-100  ${highlighted ? 'bg-[#E7F8D7]' : 'bg-white'}`}>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
)

const About: React.FC = () => {

    const features = [
        {
            title: 'Expenses Tracker',
            description: 'Our comprehensive selection of medications, supplements and healthcare products',
            highlighted: true,
        },
        {
            title: 'Crypto Connection',
            description: 'Our comprehensive selection of medications, supplements and healthcare products',
        },
        {
            title: 'Automated Invoicing',
            description: 'Our comprehensive selection of medications, supplements and healthcare products',
        },
    ]

    return (
        <section className="py-10 px-6 md:px-12 lg:px-20 flex flex-col items-center">
            {/* About Badge */}
            <div className="mb-6">
                <div className="flex items-center space-x-2 px-3 py-1 text-xs md:text-sm font-medium bg-headings text-black rounded-full">
                    <span role="img" aria-label="fire">🔥</span>
                    <span>ABOUT US</span>
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-20 items-center w-full">
                {/* Left Side - Image Placeholder */}
                <div className="rounded-3xl p-6 sm:p-10 bg-gray-200 mb-8 md:mb-0 w-full max-w-sm sm:max-w-md lg:max-w-lg">
                    <Image src="/chart-2.png" alt="chart" width={400} height={50} className="w-full h-auto" />
                </div>

                {/* Right Side - Content Cards */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8 w-full max-w-xl text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold">
                        ALL YOUR MONEY NEEDS IN ONE APP
                    </h1>

                    <Image src="/Bar.png" alt="bar" className="absolute w-1 h-auto ml-[-15px] md:ml-[-25px] hidden lg:block" width={5} height={10} />
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                highlighted={feature.highlighted}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
