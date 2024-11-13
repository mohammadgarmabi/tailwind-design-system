export type Variant = "info" | "success" | "warning" | "error" | "default";
export type Size = "sm" | "md" | "lg";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
}
