import Image from "next/image";
import Link from "next/link";


const Services = () => {
    return (

        <div className="w-full px-4 py-8 md:py-16">
            <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2 bg-gray-200 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span>🔥</span>
                    <span className="text-sm font-medium uppercase tracking-wider">Services</span>
                </div>
                <h1 className="lg:text-5xl md:text-3xl font-bold">Can Help You Achieve <br /> Financial Success</h1>
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
                    <Image src="/icon1.png" alt="icon" height={50} width={50}/>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 text-center">
                            Transfers Across The Globe Are Free
                        </h2>
                    </div>
                </div>


                {/* Create Card Section */}
                <div className=" lg:col-span-2 bg-[#F6F9F8] rounded-lg p-6">
                <Image src="/icon2.png" alt="icon" height={50} width={50}/>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">Create A Card That Is Unique And Customized</h3>
                    <p className="text-gray-500 mt-2 text-sm md:text-base">
                        We offer a comprehensive range of innovative financial services tailored to meet your needs. Our services include high-yield savings accounts.
                    </p>
                    <div className="mt-4 rounded-lg flex justify-center">
                        <Image src="/welcome-tom.png" alt="dashboard" height={100} width={250} />
                    </div>
                </div>

                {/* Personalized Insights Section */}
                <div className="col-span-1 lg:col-span-2 bg-[#1E293B] rounded-lg shadow-lg p-6 text-white">
                <Image src="/icon3.png" alt="icon" height={50} width={50}/>
                    <h3 className="text-lg md:text-xl font-semibold">Personalized Insights And Financial Goals</h3>
                    <p className="text-gray-300 mt-2 text-sm md:text-base">
                        Savings accounts that offer competitive interest rates and flexible deposit options. Invest wisely with our personalized services.
                    </p>
                    <div className="mt-4 p-4 rounded-lg flex justify-center">
                        <Image src="/Dashboard 2.png" alt="dashboard" height={100} width={400} />
                    </div>
                </div>

                {/* 100% Dedication Section */}
                <div className="col-span-1 lg:col-span-1 bg-lime-100 rounded-lg p-6 flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">100% Dedication</h3>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        We offer a comprehensive range of innovative financial services tailored to meet your needs.
                    </p>
                </div>

                {/* Hold Money in Currencies Section */}
                <div className="col-span-1 lg:col-span-1 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                <Image src="/icon4.png" alt="icon" height={50} width={50}/>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">Hold Money In 30+ Currencies</h3>
                    <Image src="/Expense-Details.png" alt="icon" height={50} width={110}/>
                </div>

                {/* Visit Our Services Page */}
                <div className="col-span-1 lg:col-span-2 bg-teal-500 rounded-lg p-6 flex items-center justify-center">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-center">
                        Visit Our Services Page
                    </h2>
                </div>
            </div>

            {/*  view button */}
            <div className="flex justify-center">
                <Link href="/get-started" className='inline-flex items-center group'>

                    <button className="flex items-center space-x-2 border font-bold border-green-400 text-black px-8 py-3 rounded-full">
                        View More
                    </button>
                    <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center'>
                        <Image src="/arrow-right.png" alt="arrow-right" width={30} height={30} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;