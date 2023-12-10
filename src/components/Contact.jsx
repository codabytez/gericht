import CustomButton from "./CustomButton";
import Header from "./Header";
import contactImg from "../assets/vitor-pinto.png";
import contactBG from "../assets/about_bg.png";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: -500,
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

const Contact = () => {
  return (
    <>
      <section className="h-screen flex justify-center items-center gap-32 overflow-hidden py-28 bg-[#0C0C0C]">
        <motion.div
          className="flex flex-col justify-center items-start gap-16 max-w-[513px] relative z-30"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div variants={variants}>
            <Header heading="Contact" subHeading="Find Us" />
          </motion.div>
          <motion.div
            className="flex flex-col items-start gap-8"
            variants={variants}
          >
            <motion.p
              className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]"
              variants={variants}
            >
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </motion.p>
            <motion.div
              className="flex flex-col items-start gap-4"
              variants={variants}
            >
              <motion.h4
                className="text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] tracking-[0.92px] capitalize"
                variants={variants}
              >
                Opening Hours
              </motion.h4>
              <motion.div
                className="flex flex-col justify-center items-start gap-4"
                variants={variants}
              >
                <motion.p
                  className="text-[#FFF] text-base leading-[28px] tracking-[0.64px]"
                  variants={variants}
                >
                  Mon - Fri: 10:00 am - 02:00 am
                </motion.p>
                <motion.p
                  className="text-[#FFF] text-base leading-[28px] tracking-[0.64px]"
                  variants={variants}
                >
                  Mon - Fri: 10:00 am - 02:00 am
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={variants}>
            <CustomButton>Visit Us</CustomButton>
          </motion.div>
        </motion.div>
        <div className="relative">
          <div className="w-[350px] h-[350px] bg-[#dcca87] absolute -top-5 -right-5 z-[16]" />
          <div className="w-[350px] h-[350px] bg-[#dcca87] absolute -bottom-5 -left-5 z-[16]" />
          <div className="absolute z-[15] right-0 -top-[100%] w-screen h-[calc(100vh+100%)] opacity-50 bg-[#0C0C0C]" />
          <div
            className="absolute z-10 right-0 -top-[100%] w-screen h-[calc(100vh+100%)] opacity-100"
            style={{
              background: `url(${contactBG})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <img
            src={contactImg}
            alt="contact Img"
            className="relative z-20 h-[550px] w-[490px] object-cover object-center"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
