import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const navLinks = [
        {title: 'Personal Loan', href:'/personal-loan'},
        {title: 'One Card', href:'/one-card'},
        {title: 'Savings', href:'/savings'},
        {title: 'Checking', href:'/checking'},
        {title: 'Help', href:'/help'},
    ];

    return (
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
            <button className="hidden px-6 py-2 rounded-full border border-teal-400 text-white hover:bg-teal-400 transition-colors">
                Sign in
            </button>

        </nav>
    )
}

export default Navbar;