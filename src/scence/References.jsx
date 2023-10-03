import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const References = () => {
  const referenceStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
  before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
  return (
    <section id="references" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          REFERENCES
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's of few individuals who can vouch for my qualifications,
          character, and work experience. These references provide valuable
          insights into my professional background and abilities.
        </p>
      </motion.div>

      {/* REFERENCES */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${referenceStyles} before:content-person1 rounded-lg`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* <p className="font-playfair text-6xl">“</p> */}
          <p className="text-center text-2xl">Deepal Sriyantha</p>
          <p className="text-center text-1xl">
            Associate Software Architect at LSEG Technology.
          </p>
          <p className="text-center text-xl">+94 71 817 5045</p>
          <p className="text-center text-xl">Deepal.desilva@lseg.com</p>
        </motion.div>

        <motion.div
          className={`bg-blue ${referenceStyles} before:content-person2 rounded-lg`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-2xl">Tharindu Ranasinghe</p>
          <p className="text-center text-1xl">
            Staff Software Engineer at M-DAQ Global.
          </p>
          <p className="text-center text-xl">+94 71 154 9042</p>
          <p className="text-center text-xl">thranasingha@gmail.com</p>
        </motion.div>

        {/* <motion.div
          className={`bg-yellow ${referenceStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default References;
