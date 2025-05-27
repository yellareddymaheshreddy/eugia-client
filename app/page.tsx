import Image from "next/image"
import Link from "next/link"
import { Globe, Heart, Trophy, TrendingUp} from "lucide-react"
import Footer from "@/components/Footer"
import Blogs from "@/components/Blogs"
import Stats from "@/components/Stats"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Eugia Logo"
                width={120}
                height={40}
                className="h-10 w-auto filter invert"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Our Capabilities
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Investors
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Products
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Careers
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Media
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Responsibility
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/11/15/66/28/360_F_1115662820_7YcsP1O5tBYwjg9RFFhgH0DNbXzF0ETw.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-2">LEVERAGING SCIENCE FOR</h1>
            <h1 className="text-5xl lg:text-6xl font-bold text-purple-500 mb-6">HUMANKIND</h1>
            <p className="text-xl text-white mb-8">Paving way towards affordable and accessible healthcare for all.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-red-500 text-sm font-bold uppercase tracking-wide mb-4">OUR PORTFOLIO</h4>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
                We cater to a wide range of medical therapies - from anti-infective to oncology treatments.
              </h2>
              <p className="text-gray-600 mb-8">
                Our responsibility extends to not just patients, but to the communities around us and to our
                stakeholders.
              </p>
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore More
              </button>
            </div>

            <div className="relative">
              <div className="rounded-r-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://t3.ftcdn.net/jpg/13/07/88/96/360_F_1307889681_neXsRSujd20DbT2TFdxgXL8KYwBNnQBv.jpg"
                  alt="Portfolio"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Well Being Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Envisioning a State of <span className="text-red-500">GLOBAL WELL-BEING</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-4xl mx-auto">
            Our aim is to deliver good health globally, expeditiously. Our therapies extend to unmet medical needs in
            specialized products such as General Injectables, Oncology, Ophthalmics and Hormonal products.
          </p>

          <div className="aspect-video max-w-6xl mx-auto">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/hxqlHVz7q4E?si=TWqJB9TnirYlO2jA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-24 relative"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/57b7a2f937c581dad578f863/7579a534-bc8f-49f2-901b-07690221aead/Firefly+chaplin,+carer+hand+holding+elder+hand+woman+in+hospice+care.+Philanthropy+kindness+to+disab+(1).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Moving <span className="text-red-500">FORWARD TOGETHER</span>
              </h2>
              <p className="text-black font-semibold mb-8">
                We at eugia believe that medical treatment should be patient-centric and value-oriented. To achieve this
                we have established 3 fundamental pillars at eugia:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-48">
                <div className="text-center mb-4">
                  <Heart className="w-12 h-12 mx-auto" />
                </div>
                <h5 className="text-center font-semibold">Superior Patient Experience</h5>
              </div>

              <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-48">
                <div className="text-center mb-4">
                  <Trophy className="w-12 h-12 mx-auto" />
                </div>
                <h5 className="text-center font-semibold">Quality</h5>
              </div>

              <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-48">
                <div className="text-center mb-4">
                  <TrendingUp className="w-12 h-12 mx-auto" />
                </div>
                <h5 className="text-center font-semibold">Value-Based Care</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blogs />
      

      <Footer />
    </div>
  )
}
