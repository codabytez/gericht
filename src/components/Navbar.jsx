export const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-50">
      <div className="bg-[#0C0C0C] flex py-8 px-[120px] justify-between items-center">
        <div className="uppercase text-white text-center text-5xl font-bold leading-10 tracking-[1.76px]">
          Gerícht
        </div>
        <div className="inline-flex items-start gap-8 text-white tracking-[0.64px] leading-7">
          <div className="">Home</div>
          <div className="">About</div>
          <div className="">Blog</div>
          <div className="">Contact</div>
          <div className="">Careers</div>
        </div>
        <div className="flex justify-center items-center gap-12 text-white tracking-[0.64px] leading-7 capitalize">
          <div>Log In / Registration</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="57"
              viewBox="0 0 2 57"
              fill="none"
            >
              <path d="M1 0V57" stroke="url(#paint0_radial_0_363)" />
              <defs>
                <radialGradient
                  id="paint0_radial_0_363"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)"
                >
                  <stop offset="0.588542" stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div>Book Table</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
