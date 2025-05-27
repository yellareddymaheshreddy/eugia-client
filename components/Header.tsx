import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"
const links=[{
    label:"About Us",
    href:"#"
},
{
    label:"Our Capabilities",   
    href:"#"
},
{
    label:"Investors",
    href:"#"
},
{
    label:"Products",
    href:"#"
},
{
    label:"Careers",
    href:"#"
},
{
    label:"Media",
    href:"#"
},
{
    label:"Responsibility",
    href:"#"
},
{
    label:"Contact",
    href:"#"
},
]
function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b maheshreddy">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Eugia Logo"
                width={120}
                height={40}
                className="h-10 w-auto filter invert"
              /></Link>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {links.map((link,index)=>(
                <Link href={link.href} key={index} className="text-gray-700 hover:text-purple-600 transition-colors">
                {link.label}
              </Link>
              ))}
              
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Header
