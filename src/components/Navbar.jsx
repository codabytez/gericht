export const Navbar = () => {
  return (
    <nav className="hidden lg:block sticky top-0 left-0 z-50">
      <div className="bg-[#0C0C0C] flex py-8 px-5 xl:px-[120px] justify-between items-center">
        <h2 className="uppercase text-white text-center text-3xl xl:text-5xl font-bold leading-10 tracking-[1.76px]">
          Gerícht
        </h2>
        <div className="inline-flex items-start justify-center gap-8 text-white tracking-[0.64px] leading-7">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#menu">Menu</a>
          </p>
          <p>
            <a href="#award">Awards</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
        <div className="flex justify-center items-center gap-12 text-white tracking-[0.64px] leading-7 capitalize">
          <p>
            <a href="#">Log In / Registration</a>
          </p>
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
          <p>
            <a href="">Book Table</a>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
