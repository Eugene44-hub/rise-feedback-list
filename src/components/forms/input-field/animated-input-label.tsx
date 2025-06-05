import cn from "@/utils/classname-merge";

const AnimatedInputLabel = ({
  label,
  isFocused,
  value,
}: {
  label: string;
  isFocused: boolean;
  value?: string | number | readonly string[];
}) => {
  return (
    <label
      className={cn(
        "absolute transition-all text-[#747881] duration-300 left-2 px-1 py-[1px] bg-white",
        isFocused ? "-top-2 text-xs z-10" : "top-1/2 -translate-y-1/2 -z-10 ",
        value && !isFocused ? "!-top-2 translate-y-0 text-xs" : ""
      )}
    >
      {label}
    </label>
  );
};

export default AnimatedInputLabel;
