import {Facebook, Linkedin, Instagram, ArrowRight} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Investors", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Privacy Policy", href: "#" },
];
const getInTouchLinks = [
  { name: "Contact Us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Reports & Policies", href: "#" },
];

function Footer() {
  return (
    <footer className="bg-purple-300 text-gray-800 pt-16 pb-8 relative overflow-hidden ymr">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo + Social */}
            <div>
              <Image
                src="/Logo.png"
                alt="Eugia Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-6 filter invert"
              />
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h6 className="font-bold mb-4">Quick Links</h6>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                  <Link href="#" className="text-gray-600 hover:text-gray-800" >
                    {link.name}
                  </Link>
                </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h6 className="font-bold mb-4">Get in touch</h6>
              <ul className="space-y-2">
                {getInTouchLinks.map((link) => (
                  <li key={link.name}>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">
                    {link.name}
                  </Link>
                </li>))}
                
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h6 className="font-bold mb-4">Be the first to know!</h6>
              <p className="text-gray-600 text-sm mb-4">Get Eugia updates delivered straight to your inbox.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Subscribe Now <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-gray-300 pt-6 mt-12 text-center text-gray-600 text-sm">
            <p>&copy; 2025 Eugia Pharma. All Rights Reserved.</p><Link href="https://mahs.me" className="text-purple-600 hover:text-purple-800 ml-2 text-xs">By Your Dev</Link>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-0 right-0 h-full w-48 bg-gradient-to-br from-purple-800 to-purple-900 rounded-tl-[60px] hidden md:block opacity-20"></div>
      </footer>
  )
}

export default Footer
