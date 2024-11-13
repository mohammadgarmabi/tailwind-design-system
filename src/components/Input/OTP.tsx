import React, { useState, useRef, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { BaseProps } from "../component.types";
import HelperText from "../HelperText";

interface EnhancedOTPProps extends BaseProps {
  length?: number;
  onComplete?: (value: string) => void;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  helperText?: string;
  fallback?: {
    type: "info" | "success" | "warning" | "error" | "default";
    message: string;
  };
}

const OTP = ({
  length = 4,
  onComplete,
  onChange,
  autoFocus = true,
  disabled = false,
  className = "",
  helperText,
  fallback,
}: EnhancedOTPProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const otpValue = newOtp.join("");
    onChange?.(otpValue);

    // Move to next input if value is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (otpValue.length === length) {
      onComplete?.(otpValue);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Move to previous input on backspace if current is empty
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
        onChange?.(newOtp.join(""));
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`flex flex-col items-center ${className}`}
    >
      <motion.div className="flex gap-3">
        {otp.map((value, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={value}
              autoFocus={autoFocus && index === 0}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={disabled}
              className={`
                w-14 h-16 text-center text-2xl font-bold
                border-2 rounded-xl
                focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20
                outline-none transition-all
                ${disabled ? "bg-gray-100" : "bg-white"}
                ${value ? "border-brand-500" : "border-gray-300"}
                ${fallback?.type === "error" ? "border-red-500" : ""}
                ${fallback?.type === "success" ? "border-green-500" : ""}
                ${fallback?.type === "warning" ? "border-yellow-500" : ""}
                ${fallback?.type === "info" ? "border-blue-500" : ""}
                ${fallback?.type === "default" ? "border-gray-300" : ""}
              `}
            />
          </motion.div>
        ))}{" "}
      </motion.div>
      {fallback ? (
        <HelperText variant={fallback.type}>{fallback.message}</HelperText>
      ) : (
        helperText && <HelperText>{helperText}</HelperText>
      )}
    </motion.div>
  );
};
export default OTP;
