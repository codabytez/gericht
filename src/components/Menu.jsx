import wine from "../assets/wine.png";
import CustomButton from "./CustomButton";
import spoon from "../assets/spoon.svg";
import { motion } from "framer-motion";

const menuVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const cocktailVariants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const Menu = () => {
  return (
    <>
      <section
        id="menu"
        className="bg-[#0C0B08] min-h-screen flex w-full items-center lg:px-16 py-28 overflow-x-hidden"
      >
        <div className="w-full flex flex-col gap-16">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-white text-[23px] font-bold leading-[29.9px] tracking-[0.92px] capitalize text-center">
              Menu that fits you palatte
            </h3>
            <img src={spoon} alt="spoon" />
            <h2 className="text-[#DCCA87] text-center text-[64px] font-semibold leading-[83.2px] tracking-[2.56px] capitalize">
              Today's Special
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 flex-1 items-center justify-center">
            <motion.div
              className="flex flex-col gap-10 flex-1 w-full px-5 lg:max-w-[412px] lg:w-auto"
              variants={menuVariants}
              initial="initial"
              whileInView="animate"
            >
              <motion.h4
                className="text-white text-center lining-nums tabular-nums text-[45px] font-semibold leading-[58.5px] tracking-[1.8px] capitalize pb-2"
                variants={menuVariants}
              >
                Wine & Beer
              </motion.h4>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={menuVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={menuVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    Chapel Hill
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />
                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $56
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  AU | Bottle
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={menuVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={menuVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    Catena Malbec
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />

                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $59
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  AR | Bottle
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={menuVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={menuVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    La Vieille Rosé
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />

                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $44
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  FR | 750 ml
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={menuVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={menuVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    Rhino Pale Ale
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />

                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $31
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  CA | 750 ml
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={menuVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={menuVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    Irish Guinness
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />

                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $26
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  IE | 750 ml
                </p>
              </motion.div>
            </motion.div>

            <div className="px-5 lg:px-0 lg:hidden xl:flex">
              <img src={wine} alt="wine" className="object-cover" />
            </div>

            <motion.div
              className="flex flex-col gap-10 flex-1 w-full px-5 lg:max-w-[412px] lg:w-auto"
              variants={cocktailVariants}
              initial="initial"
              whileInView="animate"
            >
              <motion.h4
                className="text-white text-center lining-nums tabular-nums text-[45px] font-semibold leading-[58.5px] tracking-[1.8px] capitalize pb-2"
                variants={cocktailVariants}
              >
                Cocktails
              </motion.h4>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={cocktailVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={cocktailVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    Aperol Spritz
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />
                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $20
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  Aperol | Villa Marchesi prosecco | soda | 30ml
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={cocktailVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={cocktailVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    Dark 'N' Stormy
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />
                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $16
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  Dark rum | Ginger beer | Slice of lime.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={cocktailVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={cocktailVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    Daiquiri
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />
                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $10
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  Rum | Citrus juice | Sugar
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={cocktailVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={cocktailVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    Old Fashioned
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />
                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $31
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  Bourbon | Brown sugar | Angostura Bitters
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-2 items-start w-full"
                variants={cocktailVariants}
              >
                <motion.div
                  className="flex gap-8 justify-between items-center w-full"
                  variants={cocktailVariants}
                >
                  <h5 className="w-[200px] text-[#DCCA87] lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px]">
                    Negroni
                  </h5>
                  <div className="h-[1px] w-28 bg-[#FAFAFA]" />
                  <h6 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] capitalize tracking-[0.92px] text-center">
                    $26
                  </h6>
                </motion.div>
                <p className="text-[#AAA] text-left lg:w-[400px] text-base leading-[28px] tracking-[0.64px]">
                  Gin | Sweet Vermouth | Campari | Orange garnish
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-max mx-auto">
            <CustomButton>View More</CustomButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
