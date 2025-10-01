import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaG } from "react-icons/fa6";
import headshot from"../public/headshot.png"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-start flex-col gap-12">
      <nav className="flex justify-between py-8 w-full max-w-4xl ">
        <h1 className="font-bold text-lg">Joseph Nguyen</h1>
        <a className="bg-sky-700 px-4 py-1 rounded-sm border-b-2 border-sky-800 ring ring-sky-800 hover:bg-white hover:text-sky-700 transition-colors focus:border-b-0 focus:mt-0.5" href="/Joseph_s_resume.pdf">Resume</a>
      </nav>  

      <header className="w-full max-w-prose space-y-8">
        <figure className="size-48 rounded-full overflow-hidden">
          <Image src={headshot} alt="Joseph Nguyen" />
        </figure>

        <h1 className="font-bold text-4xl">Hi, I'm Joseph!</h1>

        <p className="text-lg">Hanging in there</p>

        <ul className="flex text-3xl gap-4">
          <li><a href="https://github.com/joseph5456"><FaGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/joseph-nguyen-685711334/"><FaLinkedin /></a></li>
        </ul>
      </header> 

      <section className="w-full max-w-prose space-y-4">
        <h2 className="text-2xl text-sky-400 font-bold">Education</h2>

        <div className="flex">
          <article className="flex-1">
            <p><b>The University of Georgia </b></p>
            <p>B.S. in Computer Science</p>
          </article>
          <article className="text-right">
            <p>Expected Gradution: May 2028</p>
            <p>GPA: 3.78</p>
          </article>
        </div>
      </section>

      <section className="w full max-w-prose space-y-4">
        <h2 className="text-2xl text-sky-400 font-bold">Work Experience</h2>

          <article>
            <h3>
              <span><b>Customer Service Representative</b><br /><i>Q&T Dental Lab LLC. (Lawrenceville, GA) </i></span>
              <span>May 2023-Dec 2023</span>
            </h3>

            <ul className="list-disc pl-6 text-sm">
              <li> Managed client communications and appointment coordination for dental laboratory services, ensuring seamless scheduling
                and customer satisfaction
              </li>
              <li> Facilitated B2B relationships by serving as primary liaison between dental professionals and laboratory supply vendors to fulfill
                custom prosthetic and restoration orders
              </li>
              <li> Worked with dental specialists to resolve customer inquiries and technical issues regarding dental prosthetics, crowns, bridges,
                and orthodontic devices
              </li>
            </ul>
          </article>
      </section>

      <section className="w full max-w-prose space-y-4">
        <h2 className="text-2xl text-sky-400 font-bold">Projects</h2>

        <div className=" grid grid-cols-2 gap-4">
          <a href="https://github.com/joseph5456/world-eco-data" className="bg-sky-700 gap-2 shadow-md transition-shadow hover:shadow-lg rounded-md px-6 py-4 flex flex-col">
            <span className="font-bold text-xl">World Eco Data</span>
            <span>HackGwinnett3 project: An interactable world map that displays various information about how arable the land is, how much forest coveres each area, and permanent crops.</span>
          </a>
          </div>
        </section>


        <footer className="flex justify-between py-8 w-full max-w-4xl border-t border-gray-500 ">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Joseph Nguyen
          </p>
          <ul className="flex text-xl gap-4">
          <li><a href="https://github.com/joseph5456"><FaGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/joseph-nguyen-685711334/"><FaLinkedin /></a></li>
        </ul>
        </footer>
        </div>
  
  );
}
