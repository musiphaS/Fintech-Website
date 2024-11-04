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
        <div className="flex items-center space-x-2 px-3 py-1 text-sm font-medium bg-headings text-black text-xs font-semibold rounded-full">
          <span role="img" aria-label="fire">🔥</span>
          <span>ABOUT US</span>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row md:space-x-48 items-center w-full">
        {/* Left Side - Image Placeholder */}
                 {/* left side chart */}
                 <div className="rounded-3xl p-10 bg-gray-200 mb-8 md:mb-0">
                 <Image src="/chart-2.png" alt="chart" width={400} height={50}/>
              </div>
        {/* Right Side - Content Cards */}

        {/* right side */}
                 <div className="space-y-8">
                     <h1 className="text-3xl md:text-5xl font-bold">
                         ALL YOUR MONEY NEEDS IN ONE APP
                     </h1>

                     <Image src="/Bar.png" alt="bar" className="absolute w-2 ml-[-25px] hidden lg:block" width={5} height={10}/>
                     <div className="space-y-4">
                        {features.map((feature, index) => (
                            <FeatureCard key={index}
                                title={feature.title}
                                description={feature.description}
                                highlighted={feature.highlighted} />
                        ))}
                    </div>
                </div>
      </div>
    </section>
  );
};

export default About;
