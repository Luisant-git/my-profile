import WebsiteImg from '../assets/E-Commerce Website.jpg';
import foodWebsiteImg from "../assets/FoodEcommerce.jpg";
import BlogImge from "../assets/Blog.jpg";

export default function Projects() {

const config = {
    Projects : [
        {
            image: WebsiteImg,
            description: 'E-Commerce Website built with React.js,tailwind CSS,Node.js,Express.js and MongoDB.',
            link: ''
        },
        {
            image: foodWebsiteImg,
            description: 'Food E-Commerce Website built with React.js,tailwind CSS,Node.js,Express.js and MongoDB.',
            link:''
        },
        {
            image: BlogImge,
            description: 'Blog Website built with React.js,tailwind CSS,Node.js,Express.js and MongoDB.',
            link:''
        }
    ]
}
return <section id="projects" className="flex  flex-col py-20 px-5 justify-center bg-secondary text-white">
    <div className="w-full">
    <div className="flex flex-col px-10 py-5">
        <h1 className="text-4xl border-b-4 border-[#29094b] mb-5 w-[140px] font-bold">Projects</h1>
        <p>These are some of my best projects.I have built with react.Check them out!</p>
    </div>
    </div>
        <div className="w-full  text-black">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.Projects.map((project) => (
                    <div className='relative'>
                        <img className="h-[200px] w-[500px]" src={project.image} alt="Project" />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>
                                {project.description}
                            </p>
                            <div className='flex justify-center'> 
                               <a target='btn' href={project.link}>View Project</a>
                           </div>
                        </div>
                    
                        
                    </div>
            ))}
            </div>
    </div>
</section>
}