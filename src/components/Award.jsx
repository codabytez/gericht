import Header from "./Header";
import bilGourmond from "../assets/award_1.svg";
import risingStar from "../assets/award_2.svg";
import aaHospitality from "../assets/award_5.svg";
import outstandingChef from "../assets/award_3.svg";
import awardImg from "../assets/mgg-vitchakorn.png";
import G from "../assets/G_white.svg";
import awardBG from "../assets/about_bg.png";
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

const awardVariants = {
  initial: { opacity: 1, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },
};

const Award = () => {
  return (
    <>
      <section className="flex items-center justify-center gap-28 p-32 h-screen relative overflow-x-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10 opacity-50"
          style={{
            background: `url(${awardBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <motion.div
          className="flex flex-col justify-center items-start gap-16 max-w-[700px]"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <Header heading="Awards & recognition" subHeading="Our Laurels" />
          <motion.div
            className="flex justify-center items-start gap-8"
            variants={awardVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.div
              className="flex justify-center items-center gap-8"
              variants={awardVariants}
            >
              <motion.img src={risingStar} alt="Rising Star" />
              <motion.div className="flex flex-col items-start gap-2">
                <h3 className="text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize">
                  Bib Gourmond
                </h3>
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center items-center gap-8"
              variants={awardVariants}
            >
              <motion.img src={bilGourmond} alt="Bil Gourmond" />
              <motion.div className="flex flex-col items-start gap-2">
                <h3 className="text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize">
                  Rising Star
                </h3>
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-start gap-8"
            variants={awardVariants}
            initial="initial"
            whileInView="animate"
          >
            <motion.div
              className="flex justify-center items-center gap-8"
              variants={awardVariants}
            >
              <motion.img src={aaHospitality} alt="AA Hospitality " />
              <motion.div className="flex flex-col items-start gap-2">
                <h3 className="text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize">
                  AA Hospitality
                </h3>
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center items-center gap-8"
              variants={awardVariants}
            >
              <motion.img src={outstandingChef} alt="Outstanding Chef" />
              <motion.div className="flex flex-col items-start gap-2">
                <h3 className="text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize">
                  Outstanding Chef
                </h3>
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="w-[483px] pl-[72px] relative">
          <img
            src={awardImg}
            alt="Mgg Vitchakorn"
            className="w-full h-auto border-2 border-[#DCCA87]/10"
          />
          <img src={G} alt="G" className="absolute bottom-0 left-0 h-[55%]" />
        </div>
      </section>
    </>
  );
};

export default Award;
