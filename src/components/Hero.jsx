import HeroImg from "../assets/heroImg.jpg";
import CustomButton from "./CustomButton";
import spoon from "../assets/spoon.svg";
import scroll from "../assets/scroll.svg";
import { motion } from "framer-motion";

const scrollToBottom = () => {
  console.log("scrolling to bottom");
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <section className="bg-[#0C0C0C]  pb-20 overflow-x-hidden">
      <div className=" relative min-h-screen flex items-center">
        <div className="m-auto w-[80%] max-w-7xl flex gap-[180px]  items-center h-full">
          <motion.div
            className="flex flex-col gap-8"
            variants={textVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.div variants={textVariants}>
              <motion.p
                className="text-white text-2xl font-bold capitalize tracking-[0.92px] lining-nums tabular-nums"
                variants={textVariants}
              >
                Chase the new Flavour
              </motion.p>
              <img src={spoon} alt="spoon" />
            </motion.div>
            <motion.h1
              className="text-[#DCCA87] text-[90px] leading-[117px] tracking-[3.6px] capitalize"
              variants={textVariants}
            >
              The key to Fine dining
            </motion.h1>
            <motion.p
              className="text-[#aaa] leading-[28px] tracking-[0.64px]"
              variants={textVariants}
            >
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus
            </motion.p>
            <motion.div className="flex gap-4 w-max" variants={textVariants}>
              <CustomButton>Explore Menu</CustomButton>
            </motion.div>
          </motion.div>
          <div className=" basis-full relative">
            <div className="w-[435px] h-[435px] bg-[#dcca87] absolute -top-5 -right-5"></div>
            <div className="w-[435px] h-[435px] bg-[#dcca87] absolute -bottom-5 -left-5"></div>
            <img src={HeroImg} alt="hero" className="relative" />
          </div>
        </div>
        <div className="text-white absolute h-[calc(100vh-100px)] top-0 flex items-center -rotate-90 gap-6 text-lg tracking-[0.72px]">
          <p>#Gericht</p>
          <p>#Bar</p>
        </div>
        <motion.div
          className="absolute bottom-[100px] right-1 flex flex-col items-center gap-4 mr-6 pb-10 justify-end hover:cursor-pointer"
          onClick={scrollToBottom}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.5, y: 20 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        >
          <motion.img src={scroll} alt="scroll" />
          <motion.p className="text-[#DCCA87] font-bold uppercase tracking[0.64px]">
            scroll
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
