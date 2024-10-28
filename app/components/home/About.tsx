import Image from "next/image";
import { FC } from "react";

// interface FeatureCardProps {
//     title: string;
//     description: string;
//     highlighted?: boolean;
// }

// const FeatureCard: FC<FeatureCardProps> = ({ title, description, highlighted }) => (
//     <div className={`p-6 rounded-xl border border-gray-100 ${highlighted ? 'bg-[#E7F8D7]' : 'bg-white'}`}>
//         <h3 className="font-semibold text-lg mb-2">{title}</h3>
//         <p className="text-gray-600 text-sm">{description}</p>
//     </div>
// )

// const About = () => {
//     const features = [
//         {
//             title: 'Expenses Tracker',
//             description: 'Our comprehensive selection of medications, supplements and healthcare products',
//             highlighted: true,
//         },
//         {
//             title: 'Crypto Connection',
//             description: 'Our comprehensive selection of medications, supplements and healthcare products',
//         },
//         {
//             title: 'Automated Invoicing',
//             description: 'Our comprehensive selection of medications, supplements and healthcare products',
//         },
//     ]

//     return (
//         <div className="w-full px-8 md:px-16 py-12 md:py-20">
//             <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//                 {/* left side chart */}
//                 <div className="bg-white p-10 rounded-3xl bg-gray-100">
//                     <div className="bg-teal-900 rounded-2xl p-6 text-white">
//                         <div className="mb-4">
//                             <h3 className="text-sm font-medium">Saving Month</h3>
//                             <div className="flex items-baseline space-x-1">
//                                 <span className="text-2xl font-bold">$1852,00</span>
//                             </div>
//                             <p className="text-sm text-teal-300">Increased of 12% from last month</p>
//                         </div>

//                         {/* chart componet  */}
//                         <div className="h-48 relative">
//                             <Image src="/Chart.png" alt="chart" height={300} width={300} />
//                         </div>
//                     </div>

//                 </div>

//                 {/* right side */}
//                 <div className="space-y-8">
//                     <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//                         ALL YOUR MONEY NEEDS IN ONE APP
//                     </h1>

//                     <div className="space-y-4">
//                         {features.map((feature, index) => (
//                             <FeatureCard key={index}
//                                 title={feature.title}
//                                 description={feature.description}
//                                 highlighted={feature.highlighted} />
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// };

// export default About;

// components/AboutSection.tsx
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
        <span className="flex items-center space-x-2 px-4 py-1 bg-white text-black text-xs font-semibold rounded-full">
          <span role="img" aria-label="fire">🔥</span>
          <span>ABOUT US</span>
        </span>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row md:space-x-32 items-center w-full">
        {/* Left Side - Image Placeholder */}
                 {/* left side chart */}
                 <div className="bg-white rounded-3xl p-5 bg-gray-300">
                 <Image src="/chart-2.png" alt="chart" width={400} height={50}/>
              </div>
        {/* Right Side - Content Cards */}
        {/* right side */}
                 <div className="space-y-8">
                     <h1 className="text-2xl md:text-3xl font-bold">
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
