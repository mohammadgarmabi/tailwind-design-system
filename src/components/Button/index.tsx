import { ReactNode } from "react";
import { BaseProps } from "../component.types";
import Spinner from "../Spinner";

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button = ({
  size = "md",
  children,
  className = "",
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  variant = "default",
  ...props
}: ButtonProps) => {
  const variants = {
    default: "bg-transparent hover:bg-gray-100",
    info: "bg-blue-500 text-white hover:bg-blue-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    error: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  } as const;

  return (
    <button
      className={`
        rounded-md transition-colors inline-flex items-center justify-center
        ${variants[variant]}
        ${sizes[size]}
        ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Spinner variant={"default"} />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="mr-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className="ml-2">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};
export default Button;
