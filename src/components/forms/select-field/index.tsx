import cn from "@/utils/classname-merge";
import React, { useState } from "react";
import AnimatedInputLabel from "../input-field/animated-input-label";

interface ISelectFieldProps {
  label: string;
  selectProps: React.SelectHTMLAttributes<HTMLSelectElement> & {
    placeholder?: string;
  };
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  error?: string;
  touched?: boolean;
  leftIconProps?: React.HTMLAttributes<HTMLDivElement>;
  rightIconProps?: React.HTMLAttributes<HTMLDivElement>;
}

const SelectField = ({
  label,
  selectProps,
  rightIcon,
  error,
  touched,
  leftIcon,
  leftIconProps,
  rightIconProps,
}: ISelectFieldProps) => {
  const { className: selectClassName, value, ...restSelectProps } = selectProps;
  const { className: leftIconClassName, ...restLeftIconProps } =
    leftIconProps || {};
  const { className: rightIconClassName, ...restRightIconProps } =
    rightIconProps || {};
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full">
      {/* <label htmlFor={name}>{label}</label> */}

      <div className="flex mt-1 bg-white items-center border border-border-secondary rounded-lg">
        {leftIcon && (
          <div
            className={cn("flex-shrink-0 px-3 ", leftIconClassName)}
            {...restLeftIconProps}
          >
            {leftIcon}
          </div>
        )}
        <div className={cn("flex-1 h-[56px]", !leftIcon ? "relative" : "")}>
          <AnimatedInputLabel
            isFocused={isFocused}
            value={value}
            label={label}
          />
          <select
            className={cn(
              "bg-transparent size-full  flex-1 rounded-lg outline-none px-3 appearance-none text-sm",
              selectClassName
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...restSelectProps}
          />
        </div>
        {rightIcon && (
          <div
            className={cn("flex-shrink-0 px-3", rightIconClassName)}
            {...restRightIconProps}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {error && touched && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default SelectField;
