import { BaseProps } from "../component.types";

interface HelperTextProps extends BaseProps {
  variant?: "info" | "success" | "warning" | "error" | "default";
  icon?: React.ReactNode;
}

const HelperText = ({
  children,
  variant = "info",
  icon,
  className = "",
}: HelperTextProps) => {
  const variants = {
    info: "text-gray-500",
    success: "text-green-600",
    warning: "text-yellow-600",
    error: "text-red-500",
    default: "text-gray-500",
  };

  return (
    <p
      className={`
        text-sm mt-1 flex items-center gap-1
        ${variants[variant]}
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </p>
  );
};

export default HelperText;
