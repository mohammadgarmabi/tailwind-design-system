import { useState } from "react";
import HelperText from "../HelperText";
import Label from "../Label";
import { Size } from "../component.types";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  id?: string;
  required?: boolean;
  size?: Size;
  fallback?: {
    type: "info" | "success" | "warning" | "error" | "default";
    message: string;
  };
}

const Input = ({
  label,
  helperText,
  className = "",
  id,
  required = false,
  type = "text",
  size = "md",
  fallback,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-4 py-3 text-lg",
  };

  const fallbackBorderColors = {
    info: "border-blue-500",
    success: "border-green-500",
    warning: "border-yellow-500",
    error: "border-red-500",
    default: "border-gray-300",
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label
          htmlFor={id}
          required={required}
          variant={fallback?.type || "default"}
        >
          {label}
        </Label>
      )}
      <div className="relative">
        <input
          className={`
            w-full rounded-md border
            focus:outline-none focus:ring-2 focus:ring-brand-500
            ${
              fallback ? fallbackBorderColors[fallback.type] : "border-gray-300"
            }
            ${type === "password" ? "pr-10" : ""}
            ${sizeClasses[size]}
            ${className}
          `}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={togglePassword}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clipRule="evenodd"
                />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {fallback ? (
        <HelperText variant={fallback.type}>{fallback.message}</HelperText>
      ) : (
        helperText && <HelperText>{helperText}</HelperText>
      )}
    </div>
  );
};
export default Input;
