import { Heart,Trophy,TrendingUp } from "lucide-react"

function CoreValues() {
  return (
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
  )
}

export default CoreValues
