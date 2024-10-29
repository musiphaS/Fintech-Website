import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const CallAction = () => {
    return (

        <div className="bg-white py-16 flex justify-center items-center">
            <div className="max-w-6xl flex items-center bg-gradient-to-r from-blue-900 to-teal-700 rounded-3xl p-8 sm:p-11">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* left content */}
                    <div className="text-white space-y-4 w-full sm:w-1/2">
                        <h1 className="text-4xl sm:text-2xl lg:text-4xl font-bold">
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
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <Image src="/arrow-right.png" alt="arrow-right" width={30} height={30} />
                            </div>
                        </Link>
                    </div>

                    {/* right side */}
                    <div className="hidden sm:flex w-full sm:w-1/2 justify-end items-center relative">
                        <div className="absolute left-20 top-1/2 -translate-y-1/2 w-[280px] md:w-[320px]">
                            <div className="relative">
                                <Image src="/Call-action.png" alt="image-phone" width={640} height={800} />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default CallAction