import lotusMan from "../assets/lotus-man.png";
import quote from "../assets/quote.svg";
import chefWordBG from "../assets/about_bg.png";
import Header from "./Header";
import { motion } from "framer-motion";

const variants = {
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
      stiffness: 60,
      damping: 10,
      staggerChildren: 0.5,
    },
  },
};

const ChefWord = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-24 justify-center items-center min-h-screen xl:px-24 p-5 relative overflow-x-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10 opacity-50"
          style={{
            background: `url(${chefWordBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="relative">
          <div className="w-[60%] h-[60%] xl:w-[435px] xl:h-[435px] bg-[#dcca87] absolute -top-5 -right-5" />
          <div className="w-[60%] h-[60%] xl:w-[435px] xl:h-[435px] bg-[#dcca87] absolute -bottom-5 -left-5" />
          <img
            src={lotusMan}
            alt="chef with lotus"
            className="relative z-10 min-w-[300px]"
          />
        </div>
        <motion.div
          className="flex flex-col gap-16 items-start xl:max-w-[600px]"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <Header heading="Chef's Word" subHeading="What we believe in" />

          <motion.p
            className="text-[#AAA] text-base italic leading-[28px] tracking-[0.64px]"
            variants={variants}
          >
            <img src={quote} alt="quote" className="inline-block" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </motion.p>
          <motion.div
            className="flex flex-col gap-2 justify-start"
            variants={variants}
          >
            <motion.h4
              className="text-[#DCCA87] lining-nums tabular-nums text-[32px] leading-[41.6px] tracking-[1.28px] capitalize"
              variants={variants}
            >
              Kevin Luo
            </motion.h4>
            <motion.p
              className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]"
              variants={variants}
            >
              Chef & Founder
            </motion.p>
          </motion.div>
          <motion.p
            className="text-[#AAA] text-[64px] leading-[83.2px] tracking-[2.56px] font-vibes"
            variants={variants}
          >
            Kevin Luo
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default ChefWord;
