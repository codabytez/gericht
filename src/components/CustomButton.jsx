const CustomButton = ({ children, ...otherProps }) => (
  <button
    className="bg-[#DCCA87] flex flex-col justify-center px-8 py-2 text-[#0C0C0C] tracking-[0.64px] w-max font-upright font-bold"
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
