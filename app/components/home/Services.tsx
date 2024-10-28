import Image from "next/image";
// import { FC } from "react";
// import { title } from "process";
// import React from "react";
// import {ArrowUpRight, CreditCard, Globe, PieChart, Timer, Users } from 'lucide-react';


// interface FeatureCardProps {
//     title: string;
//     description: string;
//     icon: React.ReactNode;
//     imageSrc?:string;
//     variant?:'default' | 'highlight' | 'image';
// }

// const FeatureCard: FC<FeatureCardProps> = {

// }

// const Services = () => {
//   return (
//     <div className="min-h-screen bg-white">
//     {/* Services Section */}
//     <div className="w-full px-4 py-8 md:py-16">
//       <div className="text-center mb-4">
//         <p className="text-orange-500 font-semibold">SERVICES</p>
//       </div>

//       {/* Main Heading */}
//       <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20 max-w-3xl mx-auto">
//         CAN HELP YOU ACHIEVE FINANCIAL SUCCESS
//       </h1>

//       {/* Content Container */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
//         {/* Left Side - Phone Images */}
//         <div className="w-full md:w-1/2 relative">
//           <div className="relative h-[500px] w-full max-w-[400px] mx-auto">
//             {/* Replace with actual image paths */}
//             <img 
//               src="/api/placeholder/400/800"
//               alt="Mobile banking interface"
//               className="object-contain w-full h-full"
//             />
//           </div>
//         </div>

//         {/* Right Side - Feature Description */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <div className="flex flex-col items-center md:items-start gap-6">
//             <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
//               <div className="w-8 h-8 text-white" />
//             </div>

//             <h2 className="text-2xl md:text-4xl font-bold">
//               Transfers Across The Globe Are Free
//             </h2>

//             <p className="text-gray-600 max-w-lg">
//               Send and receive money globally without any transfer fees. 
//               Experience seamless international transactions with our 
//               user-friendly platform.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Services;

const Services = () => {
    return (

        <div className="w-full px-4 py-8 md:py-16">
      <div className="text-center mb-4">
        <p className="text-orange-500 font-semibold">SERVICES</p>
      </div>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 bg-white">
            {/* Combined Image and Transfer Section */}
            <div className="col-span-1 lg:col-span-4 bg-[#F6F9F8] rounded-lg shadow-lg p-4 flex flex-col lg:flex-row items-center justify-center gap-4">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <Image src="/phones-2.png" width={400} height={250} alt="Mobile UI" />
                </div>

                {/* Transfer Section */}
                <div className="w-full lg:w-1/2 rounded-lg p-4 flex items-center justify-center">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 text-center">
                        Transfers Across The Globe Are Free
                    </h2>
                </div>
            </div>


            {/* Create Card Section */}
            <div className="col-span-1 lg:col-span-2 bg-[#F6F9F8] rounded-lg p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Create A Card That Is Unique And Customized</h3>
                <p className="text-gray-500 mt-2 text-sm md:text-base">
                    We offer a comprehensive range of innovative financial services tailored to meet your needs. Our services include high-yield savings accounts.
                </p>
                <div className="mt-4 rounded-lg flex justify-center">
                   <Image src="/welcome-tom.png" alt="dashboard" height={100} width={250}/>
                </div>
            </div>

            {/* Personalized Insights Section */}
            <div className="col-span-1 lg:col-span-2 bg-[#1E293B] rounded-lg shadow-lg p-6 text-white">
                <h3 className="text-lg md:text-xl font-semibold">Personalized Insights And Financial Goals</h3>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                    Savings accounts that offer competitive interest rates and flexible deposit options. Invest wisely with our personalized services.
                </p>
                <div className="mt-4 p-4 rounded-lg flex justify-center">
                   <Image src="/Dashboard 2.png" alt="dashboard" height={100} width={400}/>
                </div>
            </div>

            {/* 100% Dedication Section */}
            <div className="bg-lime-100 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">100% Dedication</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                    We offer a comprehensive range of innovative financial services tailored to meet your needs.
                </p>
            </div>

            {/* Hold Money in Currencies Section */}
            <div className="col-span-1 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Hold Money In 30+ Currencies</h3>
            </div>

            {/* Visit Our Services Page */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2 bg-teal-500 rounded-lg shadow-lg p-6 flex items-center justify-center">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-center">
                    Visit Our Services Page
                </h2>
            </div>
        </div>
        </div>
    );
};

export default Services;