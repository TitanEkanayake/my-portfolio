import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
// import project5 from "../assets/project-5.jpeg"
// import project6 from "../assets/project-6.jpeg"
// import project7 from "../assets/project-7.jpeg"
import { FaGithub } from "react-icons/fa";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

// const Project = ({ title }) => {

//     const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
//         bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
//     const projectTitle = title.split(" ").join("-").toLowerCase();

//     return (
//         <motion.div variants={projectVariant} className="relative">
//         <div className={overlayStyles}>
//             <p className="text-2xl font-playfair md:text-1xl">{title}</p>
//             <p className="mt-7 md:mt-7">
//             Curabitur arcu erat, accumsan id imperdiet et
//             </p>
//         </div>
//         <img src={projectTitle} alt={projectTitle} />
//         </motion.div>
//     );
// };

const Projects = () => {
  return (
    <section id="projects" className="pt-28 pb-48">
      {/* {Headings} */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red"> PRO</span>JECTS
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
        <p className="mt-10 mb-10">
          Explore a showcase of my portfolio projects, where I've applied my
          skills and expertise to create innovative solutions. Discover a
          diverse range of projects that highlight my technical abilities and
          creativity.
        </p>
      </motion.div>
      {/* {Projects} */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair md:text-1xl">
                Gym Application
              </p>
              <p className="mt-7 md:mt-7">
                A comprehensive Fitness Application using a tech stack that
                includes ReactJS, TypeScript, Vite, Tailwind CSS.
              </p>
              <FaGithub className="pt-1" size={30} />
              <a
                className="text-1xl "
                href="https://github.com/TitanEkanayake/GyM-TypeScript"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>View on GitHub</span>
              </a>
              🚀
              <a
                className="text-1xl "
                href="http://gym-typescript-adr.pages.dev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Launch</span>
              </a>
            </div>
            <img src={project1} alt="project1" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair md:text-1xl">
                Reservation.LK
              </p>
              <p className="mt-7 md:mt-7">
                Created a web application called Reservation.LK using React Js
                and firebase to help with future reservation services.
              </p>
              <FaGithub className="pt-1" size={30} />
              <a
                className="text-1xl "
                href="https://github.com/TitanEkanayake/final-project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>View on GitHub</span>
              </a>
            </div>
            <img src={project2} alt="project2" />
          </motion.div>

          {/* ROW 2 */}
          {/* <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair md:text-1xl">Heloo</p>
                <p className="mt-7 md:mt-7">
                Curabitur arcu erat, accumsan id imperdiet et
                </p>
            </div>
            <img src={project3} alt="project3" />
        </motion.div>
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair md:text-1xl">Heloo</p>
                <p className="mt-7 md:mt-7">
                Curabitur arcu erat, accumsan id imperdiet et
                </p>
            </div>
            <img src={project4} alt="project4" />
        </motion.div>
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair md:text-1xl">Heloo</p>
                <p className="mt-7 md:mt-7">
                Curabitur arcu erat, accumsan id imperdiet et
                </p>
            </div>
            <img src={project5} alt="project5" />
        </motion.div> */}

          {/* ROW 3 */}
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair md:text-1xl">
                Customer Management System
              </p>
              <p className="mt-7 md:mt-7">
                Created a Customer management system using Qt library from C++
                language.
              </p>
              <FaGithub className="pt-1" size={30} />
              <a
                className="text-1xl "
                href="https://github.com/TitanEkanayake/Cutomer-Management-System"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>View on GitHub</span>
              </a>
            </div>
            <img src={project3} alt="project3" />
          </motion.div>
          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair md:text-1xl">
                Messenger-Application
              </p>
              <p className="mt-7 md:mt-7">
                Developed a distributed Messenger Application using ReactJS and
                C# Languages.
              </p>
              <FaGithub className="pt-1" size={30} />
              <a
                className="text-1xl "
                href="https://github.com/TitanEkanayake/Messenger-Application"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>View on GitHub</span>
              </a>
            </div>
            <img src={project4} alt="project4" />
          </motion.div>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
