import cn from "@/utils/classname-merge";
import { buttonSpinnerStyles, buttonStyles } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  variant?: keyof typeof buttonStyles.variant;
}

interface IButtonSpinnerProps {
  className?: string;
  variant?: keyof typeof buttonStyles.variant;
}

const Button = ({
  className,
  children,
  variant = "solid",
  loading = false,
  disabled = false,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(
        buttonStyles.base,
        buttonStyles.variant[variant],
        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && <ButtonSpinner variant={variant} />}
      {children}
    </button>
  );
};

export default Button;

const ButtonSpinner = ({
  className,
  variant = "solid",
}: IButtonSpinnerProps) => {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-t-2 border-b-2 size-4",
        buttonSpinnerStyles[variant],
        className
      )}
    />
  );
};
