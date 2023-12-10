const CustomButton = ({ children, ...otherProps }) => (
  <button
    className="bg-[#DCCA87] flex flex-col justify-center px-8 py-2 text-[#0c0b08] tracking-[0.64px] w-max"
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
