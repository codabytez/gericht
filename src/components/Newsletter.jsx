import spoon from "../assets/spoon.svg";
import CustomButton from "./CustomButton";
const NewsLetter = () => {
  return (
    <>
      <section className="relative z-[5]">
        <div className="newsletter_box-shadow py-16 px-64 flex flex-col gap-16 items-center border border-[#DCCA87]/20 bg-[#0C0C0C] min-w-[70%] absolute -top-[64px]">
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] tracking-[0.92px] capitalize text-center">
                Newsletter
              </h3>
              <div>
                <img src={spoon} alt="spoon" />
              </div>
              <h2 className="text-[#DCCA87] lining-nums tabular-nums text-[64px] font-semibold leading-[83.2px] tracking-[1.92px] capitalize text-center">
                Subscribe to Our Newsletter
              </h2>
            </div>
            <p className="text-[#FFF] text-base leading-[28px] tracking-[0.64px]">
              And never miss latest Updates!
            </p>
          </div>
          <div className="flex justify-center items-stretch gap-8">
            <input
              type="email"
              name="email"
              inputMode="email"
              placeholder="email address"
              className="w-[600px] py-4 px-5 text-[#AAA] text-left lining-nums tabular-nums text-base leading-[28px] placeholder:capitalize tracking-[0.64px] border border-[#F5EFDB] bg-transparent "
            />
            <CustomButton>Subscribe</CustomButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
