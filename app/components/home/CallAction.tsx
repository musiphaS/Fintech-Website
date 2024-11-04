import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const CallAction = () => {
    return (

        <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 flex justify-center items-center">
            <div className="w-full max-w-6xl flex items-center bg-gradient-to-r from-blue-900 to-teal-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                    {/* left content */}
                    <div className="text-white space-y-4 w-full md:w-full lg:w-4/5">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            ARE YOU READY TO START?
                        </h1>

                        <p className="text-sm sm:text-base text-gray-200">
                            Personalize your settings, follow your progress, archieve your
                            highlights and notes automatically. Glose is the ultimate reading
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
                    </div>

                    {/* right side */}
                    <div className="hidden md:flex w-full justify-end items-center relative">
                        <div className="absolute left-0 lg:left-20 top-1/2 -translate-y-1/2 w-[240px] lg:w-[320px]">
                            <div className="relative">
                                <Image src="/Call-action.png" alt="image-phone" width={640} height={800} className='w-full h-auto' />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default CallAction