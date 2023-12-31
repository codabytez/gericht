import CustomButton from "./CustomButton";
import aboutBG from "../assets/about_bg.png";
import knive from "../assets/savernake-knives.png";
import spoon from "../assets/spoon.svg";
import { motion } from "framer-motion";
import G from "./G";

const aboutVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 0.5,
    },
  },
};

const historyVariants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
      damping: 10,
      staggerChildren: 0.5,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="xl:h-screen flex flex-col lg:flex-row justify-center gap-10 xl:gap-[85px] items-center relative overflow-hidden py-5"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10 opacity-50"
        style={{
          background: `url(${aboutBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <motion.div className="absolute bottom-[calc(50%-208px)] left-[calc(50%-196px)] -z-10">
        <G />
      </motion.div>
      <motion.div
        className="lg:w-[523px] px-5 flex flex-col gap-8"
        variants={aboutVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div variants={aboutVariants}>
          <motion.h2
            className="text-[#DCCAB7] lining-nums tabular-nums text-4xl lg:text-[64px] leading-[83.2px] tracking-[1.92px] capitalize"
            variants={aboutVariants}
          >
            About Us
          </motion.h2>
          <motion.img src={spoon} alt="spoon" />
        </motion.div>
        <motion.p className="text-[#AAA]" variants={aboutVariants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </motion.p>
        <motion.div variants={aboutVariants} className="w-max m-auto lg:m-0">
          <CustomButton>Know More</CustomButton>
        </motion.div>
      </motion.div>

      <img
        src={knive}
        alt="knive"
        className="object-cover object-center opacity-80"
      />

      <motion.div
        className="lg:w-[523px] px-5 flex flex-col gap-8"
        variants={historyVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div variants={historyVariants}>
          <motion.h2
            className="text-[#DCCAB7] lining-nums tabular-nums text-[64px] leading-[83.2px] tracking-[1.92px] capitalize"
            variants={historyVariants}
          >
            Our History
          </motion.h2>
          <motion.img src={spoon} alt="spoon" />
        </motion.div>
        <motion.p className="text-[#AAA]" variants={historyVariants}>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </motion.p>
        <motion.div variants={historyVariants} className="w-max m-auto lg:m-0">
          <CustomButton>Know More</CustomButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
