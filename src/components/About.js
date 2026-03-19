import AboutImg from '../assets/About.jpg';
export default function About() {

    const config = {
        line1:'Hi,My name is Pavithra. I am a Full Stack web Developer. I built beautiful websites with React.js and tailwind CSS',
        line2:'I am proficient Frontend skills like React.js,Redux,Redux Tool Kit,tailwind,Javascript,HTML,CSS.',
        line3:'In backend I have experience with Node.js,Express.js and MongoDB.'   
    }
    return <section className='flex flex-col md:flex-row bg-primary px-5 py-32 justify-center items-center'id='about'>
        <div className="py-5 w-1/2">
            <img className = "md:w-1/2" src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center text-white'>
                 <h1 className='text-4xl border-b-4 border-[#29b2d8ed] mb-5 w-[170px] font-bold'>About Me</h1>
                 <p className='pb-5'>{config.line1}</p>
                 <p className='pb-5'>{config.line2}</p>
                 <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}