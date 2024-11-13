import { BaseProps } from "../component.types";
import { motion } from "framer-motion";

type SpinnerProps = BaseProps;

const Spinner = ({
  className = "",
  size = "md",
  variant = "default",
}: SpinnerProps) => {
  const sizes = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  };

  const colors: Record<NonNullable<SpinnerProps["variant"]>, string> = {
    default: "border-t-gray-500",
    error: "border-t-red-500",
    success: "border-t-green-500",
    warning: "border-t-yellow-500",
    info: "border-t-blue-500",
  };

  return (
    <motion.div
      className={`
        rounded-full
        border-2 border-gray-200
        ${colors[variant]}
        ${sizes[size as keyof typeof sizes]}
        ${className}
      `}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </motion.div>
  );
};
export default Spinner;
