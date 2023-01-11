import Nav from "../components/Nav";
import parse from "html-react-parser";
import { saltLogo } from "../utils/saltLogo";
import tailwind from '../utils/tailwind.svg'

const About = ({ children }) => {
  return (
    <>
    <Nav children={children} />
    <main className='px-20 py-10'>
        <article className='bg-neutral-300'>
          <h3 lassName='mb-10'>
            Created by Tamlyn Springer.
          </h3>
          <h3 className='mb-10'>During the School of Applied Technology's JavaScript Fall 2022 career program. <a href='https://www.salt.dev/' target='_blank' rel='noreferrer'>{parse(saltLogo)}</a></h3>
        
          <h3>Connect:</h3>
          <span><a href='https://www.linkedin.com/in/tamlyn-springer-v/' target='_blank' rel='noreferrer'><i className='fa-brands fa-linkedin fa-2x linkedin-logo cursor-pointer'></i></a> </span>
            <span><a href='https://github.com/TamlynSpringer' target='_blank' rel='noreferrer'><i className='fa-brands fa-square-github fa-2x github-logo cursor-pointer'></i></a></span>
        </article>
        <br></br>
        <article className='bg-neutral-300'>
          <h3>
            Tech stack:
          </h3>
          <p><i className="fa-brands fa-2x fa-square-js"></i>ES6 JavaScript</p>
          <p><i className="fa-brands fa-2x fa-react"></i> React</p>
          <p><i className="fa-brands fa-2x fa-unsplash"></i> Unsplash API</p>
          <p><i className="fa-brands fa-2x fa-css3-alt"></i> CSS3</p>
          <p><i className="fa-brands fa-html5"></i>Semantic HTML5</p>
          <span className="flex flex-wrap"><img src={tailwind} alt='tailwind-logo'/>Tailwind CSS</span>
        </article>

    </main>
    </>
  )
}

export default About;