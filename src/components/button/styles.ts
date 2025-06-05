const buttonStyles = {
  base: "px-4 md:h-[52px] h-[42px] text-sm md:text-base rounded-md flex justify-center items-center gap-2 font-semibold transition-all duration-300",
  variant: {
    neutral: "text-primary bg-button-neutral",
    solid: "bg-primary  text-white hover:opacity-90 disabled:opacity-50",
  },
};

const buttonSpinnerStyles = {
  neutral: "border-primary",
  solid: "border-white",
};

export { buttonStyles, buttonSpinnerStyles };
