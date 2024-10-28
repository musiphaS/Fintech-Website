import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image: string;
    bgColor?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Mike Torello',
        role: 'CEO',
        company: 'Intech',
        content: 'I like getting the SMS & knowing the jobs done. l often refer to it, "hope you get a ping today!" because my product',
        rating: 5,
        image: '/Ellipse 12.jpg'
    },
    {
        id: 2,
        name: 'Richards Hawkins',
        role: 'Marketing Manager',
        company: 'Upnow',
        content: 'We have successfully sold digital product and have happy with the results & look forward to using it again this.',
        rating: 5,
        image: '/Ellipse 121.jpg',
        bgColor: 'bg-teal-900'
    },
    {
        id: 3,
        name: 'Mike Torello',
        role: 'CEO',
        company: 'Barellon NSW',
        content: 'Design Monks offers producers a cost-effictive selling tool. Having the ability to post prices that you want on an exchange visible.',
        rating: 5,
        image: '/Ellipse 123.jpg'
    },
];

const TestimonialCard: FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className={`p-12 mb-6 rounded-2xl ${testimonial.bgColor || 'bg-white'
            }`}>
                <Image src="/quote.png" alt="quote" width={50} height={50} />
                <p className="text-gray-500 mb-8 mt-6">{testimonial.content}</p>

                <div className="flex items-center gap-4">
                    <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className='rounded-full' />
                    
                    <div>
                    <Image src="/5star.png" alt="star" height={100} width={100} />
                        <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role} of {testimonial.company}</p>
                    </div>
                </div>
        </div>
    )
}


const Testimonials = () => {

    return (
        <section className='bg-gray-100 py-16 px-4'>
            <div className="container mx-auto max-w-6xl">
                {/* header */}
                <div className="mb-4 flex items-center justify-center gap-2">
                    <span>🔥</span>
                    <span className='text-gray-900 uppercase text-sm font-medium tracking-wider'>
                        TESTIMONIAL
                    </span>
                </div>
                <h2 className='text-5xl font-bold text-center text-gray-900 mb-12'>
                    GET TO KNOW OUR CLIENTS
                </h2>

                {/*  testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
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

        </section>
    )
}

export default Testimonials;
