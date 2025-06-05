import cn from "@/utils/classname-merge";
import React, { useState } from "react";
import AnimatedInputLabel from "./animated-input-label";

interface IInputFieldProps {
  label: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  error?: string;
  touched?: boolean;
  leftIconProps?: React.HTMLAttributes<HTMLDivElement>;
  rightIconProps?: React.HTMLAttributes<HTMLDivElement>;
}

const InputField = ({
  label,
  inputProps,
  rightIcon,
  error,
  touched,
  leftIcon,
  leftIconProps,
  rightIconProps,
}: IInputFieldProps) => {
  const {
    className: inputClassName,
    value,
    onBlur,
    onFocus,
    ...restInputProps
  } = inputProps;
  const { className: leftIconClassName, ...restLeftIconProps } =
    leftIconProps || {};
  const { className: rightIconClassName, ...restRightIconProps } =
    rightIconProps || {};

  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full">
      <div className="flex mt-1 bg-white items-center border border-border-secondary rounded-lg relative">
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
          <input
            className={cn(
              "bg-transparent size-full  flex-1 rounded-lg outline-none px-3 text-sm",
              inputClassName
            )}
            value={value}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            {...restInputProps}
          />
        </div>

        {rightIcon && (
          <div
            className={cn("flex-shrink-0", rightIconClassName)}
            {...restRightIconProps}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {error && touched ? (
        <p className="text-xs text-red-500">{error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
