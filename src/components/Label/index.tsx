import { BaseProps } from "../component.types";

interface LabelProps extends BaseProps {
  htmlFor?: string;
  required?: boolean;
  variant?: "info" | "success" | "warning" | "error" | "default";
}

const Label = ({
  children,
  htmlFor,
  required = false,
  variant = "default",
  className = "",
}: LabelProps) => {
  const variants = {
    default: "text-gray-700",
    success: "text-green-600",
    error: "text-red-500",
    warning: "text-yellow-500",
    info: "text-blue-500",
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`
        text-sm font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label;
