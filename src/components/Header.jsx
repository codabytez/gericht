import spoon from "../assets/spoon.svg";

const Header = ({ heading, subHeading }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-white lining-nums tabular-nums text-[23px] font-bold leading-[29.9px] tracking-[0.92px] capitalize">
          {heading}
        </h3>
        <div>
          <img src={spoon} alt="spoon" />
        </div>
        <h2 className="text-[#DCCA87] lining-nums tabular-nums text-[64px] font-semibold leading-[83.2px] tracking-[1.92px] capitalize">
          {subHeading}
        </h2>
      </div>
    </>
  );
};

export default Header;
