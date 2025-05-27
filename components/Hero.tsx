
function Hero() {
  return (
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
  )
}

export default Hero
