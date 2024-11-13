import { BaseProps } from "../component.types";
import { createElement } from "react";

interface TypographyProps extends BaseProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption"
    | "subtitle";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "default" | "primary" | "secondary" | "success" | "error";
}

const Typography = ({
  variant = "body1",
  component,
  children,
  className = "",
  weight = "normal",
  color = "default",
  ...props
}: TypographyProps) => {
  const variants = {
    h1: "text-4xl leading-tight",
    h2: "text-3xl leading-tight",
    h3: "text-2xl leading-tight",
    h4: "text-xl leading-snug",
    h5: "text-lg leading-snug",
    h6: "text-base leading-snug",
    subtitle: "text-lg leading-relaxed",
    body1: "text-base leading-relaxed",
    body2: "text-sm leading-relaxed",
    caption: "text-xs leading-normal",
  };

  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const colors = {
    default: "text-gray-900",
    primary: "text-brand-500",
    secondary: "text-gray-600",
    success: "text-green-600",
    error: "text-red-600",
  };

  const elementMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle: "p",
    body1: "p",
    body2: "p",
    caption: "span",
  };

  return createElement(
    component || elementMap[variant],
    {
      className: `
        ${variants[variant]}
        ${weights[weight]}
        ${colors[color]}
        ${className}
      `,
      ...props,
    },
    children
  );
};

export default Typography;
