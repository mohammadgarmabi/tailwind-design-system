import React from "react";
import Label from "../Label";
import HelperText from "../HelperText";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  helperText?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  min?: number;
  max?: number;
  fallback?: {
    type: "info" | "success" | "warning" | "error" | "default";
    message: string;
  };
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  helperText,
  placeholder,
  className = "",
  required = false,
  min,
  max,
  fallback,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value ? Number(e.target.value) : 0;
    onChange(newValue);
  };

  const getFallbackColor = (type: string) => {
    switch (type) {
      case "info":
        return "border-blue-500";
      case "success":
        return "border-green-500";
      case "warning":
        return "border-yellow-500";
      case "error":
        return "border-red-500";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <Label required={required} variant="default">
        {label}
      </Label>

      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`
          w-full
          px-3
          py-2
          rounded-md
          border
          ${fallback ? getFallbackColor(fallback.type) : "border-gray-300"}
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-transparent
          transition
          duration-200
          [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:m-0
          [&::-webkit-inner-spin-button]:m-0
          ${className}
        `}
      />

      {fallback ? (
        <HelperText variant={fallback.type}>{fallback.message}</HelperText>
      ) : (
        helperText && <HelperText>{helperText}</HelperText>
      )}
    </div>
  );
};
