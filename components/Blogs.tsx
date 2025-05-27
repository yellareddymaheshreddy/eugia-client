import BlogCard from "./BlogCard"

function Blogs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-black text-3xl lg:text-4xl font-bold mb-4">BLOGS & ARTICLES</h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest research, discoveries, and innovations in the pharmaceutical industry.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    
                    <BlogCard link="#" title="How Services Can Ease Your Pain" discription="Customer-centered software design insights can help improve service delivery and reduce operational costs." date="April, 2023" image="https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg" />

                   
                    <BlogCard link="#" title="Penicillins: Uses, and Mechanism" discription="Overview of penicillin's discovery and its purpose's today." date="Dec 01, 2024" image="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg" />

                    <BlogCard link="#" title="Proteins: An Overview of Mechanism and Erignostine" discription="Learn about the complex protein mechanisms that are fundamental." date="Nov 20, 2024" image="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg" />
                                
                </div>
            </div>
        </section>
    )
}

export default Blogs
