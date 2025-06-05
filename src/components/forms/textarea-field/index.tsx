import cn from "@/utils/classname-merge";
import React, { useState } from "react";
import AnimatedTextAreaLabel from "./animated-textarea-label";

interface ITextAreaFieldProps {
  label: string;
  textAreaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  error?: string;
  touched?: boolean;
  leftIconProps?: React.HTMLAttributes<HTMLDivElement>;
  rightIconProps?: React.HTMLAttributes<HTMLDivElement>;
}

const TextAreaField = ({
  label,
  textAreaProps,
  rightIcon,
  error,
  touched,
  leftIcon,
  leftIconProps,
  rightIconProps,
}: ITextAreaFieldProps) => {
  const {
    className: textAreaClassName,
    value,
    onBlur,
    onFocus,
    ...restTextAreaProps
  } = textAreaProps;
  const { className: leftIconClassName, ...restLeftIconProps } =
    leftIconProps || {};
  const { className: rightIconClassName, ...restRightIconProps } =
    rightIconProps || {};
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full">
      {/* <label htmlFor={name}>{label}</label> */}

      <div className="flex mt-1 bg-white items-center">
        {leftIcon && (
          <div
            className={cn("flex-shrink-0 px-3 ", leftIconClassName)}
            {...restLeftIconProps}
          >
            {leftIcon}
          </div>
        )}
        <div className={cn("flex-1 h-[120px]", !leftIcon ? "relative" : "")}>
          <AnimatedTextAreaLabel
            isFocused={isFocused}
            value={value}
            label={label}
          />
          <textarea
            className={cn(
              "bg-transparent size-full flex-1 text-sm py-3 rounded-lg outline-none px-3 resize-none h-[120px]",
              textAreaClassName
            )}
            {...restTextAreaProps}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
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

export default TextAreaField;
