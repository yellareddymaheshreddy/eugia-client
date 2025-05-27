import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

    function BlogCard({link="#",title,discription,date,image}:{link:string,title:string,discription:string,date:string,image:string}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                            <Image
                                src={image}
                                alt="Blog"
                                width={400}
                                height={200}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <small className="text-gray-500">{date}</small>
                            <h5 className="text-black text-xl font-semibold mt-3 mb-3">{title}</h5>
                            <p className="text-gray-600 mb-4">{discription}</p>
                            <Link href={link} className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center">
                                Read More <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
  )
}

export default BlogCard
