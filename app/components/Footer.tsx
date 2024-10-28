import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-white py-8 px-4 text-center">
            {/* logo section */}
            <div className="flex justify-center items-center mb-4">
                <Image src="/upgrade-logo1.svg" alt="Upgrade logo" width={150} height={50} />
            </div>

            {/* app store buttons */}
            <div className="flex justify-center space-x-4 mb-6">
                <a href="#app-store">
                    <Image src="/app-store.png" alt="google Play" width={200} height={50} />
                </a>
            </div>

            {/* navigation */}
            <div className="flex flex-wrap justify-center space-x-6 mb-6 text-sm text-gray-700">
                <a href="#">Personal Loan</a>
                <a href="#">One Card</a>
                <a href="#">Savings</a>
                <a href="#">Checking</a>
                <a href="#">Contact</a>
                <a href="#">Help</a>
                <a href="#">Support</a>
            </div>

            {/* social media links */}
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#facebook" className="tetx-green-700 hover:text-green-900">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#twitter" className="text-green-700 hover:text-green-900">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#instagram" className="text-green-700 hover:text-green-900">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#linkedin" className="text-green-700 hover:text-green-900">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>

            {/* Feedback and Legal Links */}
            <p className="text-sm font-semibold">Send Your Feedback: <a href="mailto:contact@upgrade.com" className="text-gray-700 underline">contact@upgrade.com</a></p>

            <div className="flex justify-center flex-wrap space-x-2 mt-4 text-xs text-gray-500">
                <a href="#">Privacy Policy</a>
                <span>|</span>
                <a href="#">Terms & Condition</a>
                <span>|</span>
                <a href="#">Cookie Notice</a>
                <span>|</span>
                <a href="#">Copyright Policy</a>
                <span>|</span>
                <a href="#">Data Policy</a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 mt-4">&copy; 2024 Design Monks. All rights reserved.</p>
        </footer>
    )
}

export default Footer;