import { Globe, Users, Award } from "lucide-react"

function Stats() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    
                    <StatsItem icon={<Globe className="w-8 h-8 text-white" />} title="Countries" description="We are proud to be operating in over 120+ countries, leveraging our expertise and valuable services across the globe." stats={120} bgColor="bg-green-500"/>
                        

                    <StatsItem icon={<Users className="w-8 h-8 text-white" />} title="Employees" description="Our global team works relentlessly to discover path-breaking innovations which make a difference." stats={4000} bgColor="bg-purple-600"/>
                    
                    <StatsItem icon={<Award className="w-8 h-8 text-white" />} title="Global Approvals" description="We have over 250 globally approved generics that have furthered our vision of making human lives better." stats={250} bgColor="bg-red-500"/>
                </div>
            </div>
        </section>
    )
}

export default Stats


function StatsItem({icon,title,description,stats,bgColor}:{icon:React.ReactNode,title:string,description:string,stats:number,bgColor:string}) {
    return (
        <div className="text-center p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
        <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
            {icon}
        </div>
        <h2 className="text-4xl font-bold mb-3 text-black">{stats}+</h2>
        <h5 className="text-xl font-semibold mb-3 text-black">{title}</h5>
        <p className="text-gray-600">
            {description}
        </p>
    </div>
    )
}