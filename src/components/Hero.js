import HeroImg from "../assets/Hero.jpg"
import { AiOutlineTwitter, AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
      const config = {
        subtitle:'I am a Frontend Developer',
        social: {
          twitter: 'https://twitter.com/',
          facebook: 'https://facebook.com/',
          linkedin: 'https://linkedin.com/'
        }
      }


    return <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center items-center">
        <div className="w-1/2 flex flex-col">
              <h1 className="text-black text-6xl font-hero-font">Hi, <br/><b>I am Pavithra</b> 
                <p className="text-white text-2xl"> {config.subtitle}</p>
             </h1>
          <div className="flex py-10 ">
            <a href={config.social.twitter} className="pr-3 hover:text-blue-800"><AiOutlineTwitter size={40}/></a>
            <a href={config.social.facebook} className="pr-3 hover:text-blue-200"><AiOutlineFacebook size={40}/></a>
            <a href={config.social.linkedin} className="pr-3 hover:text-blue-500"><AiOutlineLinkedin size={40}/></a>
          </div>
         </div>
        <img className="md:w-1/4" src={HeroImg} alt="Pavithra"/>
    </section>
} 