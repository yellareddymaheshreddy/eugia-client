import Image from "next/image"
import Germs from "@/public/assets/germs.jpg"

function Portfolio() {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-14">
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
                  src={Germs}
                  alt="Portfolio"
                  placeholder="blur"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Portfolio
