import spoon from "../assets/spoon.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import footerBG from "../assets/about_bg.png";
import scroll from "../assets/scroll.svg";
import { motion } from "framer-motion";

const date = new Date();
const year = date.getFullYear();

const scrollToTop = () => {
  console.log("scrolling to top");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <>
      <footer className="text-white relative z-[2] mt-[150px] pt-[350px] pb-32 px-6 flex flex-col gap-16 overflow-x-hidden">
        <div className="absolute z-10 right-0 top-0 w-screen h-full opacity-50 bg-[#0C0C0C]" />
        <div
          className="absolute -z-10 right-0 bottom-0 w-full h-full opacity-100"
          style={{
            background: `url(${footerBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          className="hidden absolute top-[173px] right-1 xl:flex flex-col items-center gap-4 mr-6 pb-10 justify-end z-10 hover:cursor-pointer"
          onClick={scrollToTop}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.5, y: 20 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        >
          <img src={scroll} alt="scroll svg" />
          <p className="text-[#DCCA87] font-bold uppercase tracking[0.64px]">
            Top
          </p>
        </motion.div>

        <div className="flex justify-between lg:items-start flex-col lg:flex-row gap-10">
          <div className="flex flex-col justify-center items-center gap-6 sm:w-[306px] m-auto lg:m-0">
            <h4 className="text-[#F5EFDB] lining-nums tabular-nums text-[32px] leading-[41.6px] tracking-[1.28px] capitalize">
              Contact Us
            </h4>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]">
                9 W 53rd St, New York, NY 10019, USA
              </p>
              <div>
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]">
                  +1 212-344-1230
                </p>
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px]">
                  +1 212-555-1230
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 sm:w-[306px] m-auto lg:m-0 lg:order-3">
            <h4 className="text-[#F5EFDB] lining-nums tabular-nums text-[32px] leading-[41.6px] tracking-[1.28px] capitalize">
              Working Hours
            </h4>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col justify-center">
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px] text-center">
                  Monday-Friday:
                </p>
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px] text-center">
                  08:00 am -12:00 am
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px] text-center">
                  Saturday-Sunday:
                </p>
                <p className="text-[#AAA] text-base leading-[28px] tracking-[0.64px] text-center">
                  07:00am -11:00 pm
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-8 sm:w-[438px] m-auto lg:m-0">
            <h4 className="text-[#DCCA87] text-center text-[64px] font-bold leading-[83.2px] tracking-[2.56px] uppercase">
              Gerícht
            </h4>
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-white text-base leading-[28px] tracking-[0.64px] text-center">
                "The best way to find yourself is to lose yourself in the
                service of others.”
              </p>
              <img src={spoon} alt="spoon" />
              <div className="flex justify-center items-center gap-4">
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-4">
          <p className="text-[#AAA] text-center text-base leading-[28px] tracking-[0.64px]">
            {year} Gerícht. All Rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
