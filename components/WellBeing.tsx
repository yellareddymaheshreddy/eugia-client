
function WellBeing() {
  return (
    <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 md:px-14">
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
  )
}

export default WellBeing
