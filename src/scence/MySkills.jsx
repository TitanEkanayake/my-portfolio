import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import SkillsImage from "../assets/skills-image.png";
// import companyLogo from "../assets/lseg-logo.png"
// import Skills from "../assets/Skills.png"
// import Skills1 from "../assets/Skills1.png"

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-24 ">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">EDUCATION,EXPERIENCE</span> AND{" "}
            <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Explore my journey, qualifications, and skills—a glimpse into my
            professional growth and capabilities.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                    before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src={SkillsImage} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={SkillsImage} />
          )}
        </div>
      </div>
      <div className="md:flex md:justify-between mt-16 gap-32 display-flex flex-wrap-wrap  ">
        {/* EDUCATION */}
        <motion.div
          className="md:w-1/3 mt-10 flex-grow-1 flex-basis-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 mb-20 left-13">
            <div className="z-10 ">
              <p className="font-playfair font-semibold text-3xl mt-1">
                EDUCATION <LineGradient width="w-1/3" />
              </p>
              <p className="font-playfair font-semibold text-1xl mt-2">
                BSC (HONS) IN SOFTWARE ENGINEERING [MARCH 2019 - 2022 DECEMBER]
                <br />
                University of Plymouth UK Affiliated
                <br />
                with NSBM Green University
              </p>
              <p className="font-playfair font-semibold text-1xl mt-1 mb-0">
                Awarded Second Class Honours (Upper Division)
              </p>
              <p className="font-playfair font-semibold text-1xl mt-1 mb-5">
                [MARCH 2019 - 2022 DECEMBER]
              </p>
            </div>
          </div>
        </motion.div>
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10 flex-grow-1 flex-basis-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-4xl">01</p> */}
              <p className="font-playfair font-semibold text-3xl mt-1">
                EXPERIENCE
                <LineGradient width="w-1/3" />
              </p>
              <p className="font-playfair font-semibold text-1xl mt-1">
                INTERN ENGINEER,
                <br />
                LSEG
              </p>
              <p className="font-playfair font-semibold text-1xl mt-1">
                AUGUST 2022 –AUGUST 2023
              </p>
            </div>
          </div>
          <p className="mt-5">
            Worked in Foreign Exchange Surveillance project aimed at developing
            market manipulations.
          </p>
          <p className="mt-5 text-sm">
            <li className="mt-5">
              Developed and implemented new client-required features for market
              manipulation detection algorithms. [Scala | Python | C++]
            </li>
            <li className="mt-5">Automation Script development. [Python]</li>
            <li className="mt-5">
              Performance tests in market manipulation algorithms with
              production rates. [Confluence | JIRA]
            </li>
            <li className="mt-5">
              Unit test implementations for manipulation algorithms. [Scala]
            </li>
          </p>
        </motion.div>
        {/* Certifications */}
        <motion.div
          className="md:w-1/3 mt-10 flex-grow-1 flex-basis-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 mb-20 left-13">
            <div className="z-10 ">
              <p className="font-playfair font-semibold text-3xl mt-1">
                CERTIFICATIONS <LineGradient width="w-1/3" />
              </p>

              <li className="font-playfair font-semibold text-1xl mt-5">
                Open Day Exhibition under the theme of 'Smart Sri Lanka'
                <br />
                Won 1st place for the project we implemented, The 'Choon Paan
                Application,' which serves online bakery sellers User Interface
                using ReactJs.
              </li>
              <li className="font-playfair font-semibold text-1xl mt-5 mb-0">
                Complete JavaScript Course Offered by Udemy
                <br />
                [August/2023 - November/2023]
              </li>

              <li className="font-playfair font-semibold text-1xl mt-5 mb-0">
                Introduction to python Programming Offered by Coursera
                <br />
                [December/2023 - January/2024]
              </li>
              <li className="font-playfair font-semibold text-1xl mt-5 mb-0">
                Google IT Automation with Python
                <br />
                [January/2024 - Present]
              </li>
            </div>
          </div>
        </motion.div>
        {/* Skills */}
        {/* <motion.div
          className="md:w-1/3 mt-0 flex-grow-1 flex-basis-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 mt-10">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-0 mr-(-10)">
                Skills <LineGradient width="w-1/3" />
              </p>
            </div>

            <div className="flex justify-between">
              <div className="w-1/3 p-4">
                <h2 className="text-xl font-playfair font-semibold">
                  Web Development
                </h2>
                <p className="mt-5 text-sm">
                  <li className="mt-5">
                    React | REDUX | Node Js Express API | .Net REST API C# |
                    JavaScript | HTML | CSS
                  </li>
                </p>
              </div>
              <div className="w-1/3 p-4">
                <h2 className="text-xl font-playfair font-semibold">
                  Programming Languages
                </h2>
                <p className="mt-5 text-sm">
                  <li className="mt-5">Java | Python | Scala | C++ | C#</li>
                </p>
              </div>
              <div className="w-1/3 p-4">
                <h2 className="text-xl font-playfair font-semibold">
                  Automation & Algorithm Development
                </h2>
                <p className="mt-5 text-sm">
                  <li className="mt-5">
                    Python Script | Scala market manipulation algorithm
                    development
                  </li>
                </p>
              </div>
              <div className="w-1/3 p-4">
                <h2 className="text-xl font-playfair font-semibold">Tools</h2>
                <p className="mt-5 text-sm">
                  <li className="mt-5">
                    VC Code | GIT | Jenkins | JIRA | QT |Intellij
                  </li>
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default MySkills;
