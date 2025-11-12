import React, { forwardRef, useId, useState } from "react";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
  showLabel?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      error,
      required = false,
      showLabel = false,
      className = "",
      type,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const generatedId = useId();
    const inputId = props.id || generatedId;

    // Determine if this is a password field
    const isPasswordField = type === "password";

    // Use the actual input type (toggle between password and text for password fields)
    const inputType = isPasswordField
      ? showPassword
        ? "text"
        : "password"
      : type;

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="space-y-2">
        {showLabel && label && (
          <Label htmlFor={inputId} className="text-black font-medium">
            {label}
            {required && <span className="text-[#ff0000] ml-1">*</span>}
          </Label>
        )}

        {!showLabel && label && (
          <Label htmlFor={inputId} className="sr-only">
            {label}
          </Label>
        )}

        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            className={`w-full px-4 py-3 bg-[#f5f5f5] border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0000]/20 transition-all ${
              isPasswordField ? "pr-12" : ""
            } ${error ? "ring-2 ring-red-500" : ""} ${className}`}
            placeholder={props.placeholder}
            aria-invalid={error ? "true" : "false"}
            {...props}
          />

          {/* Password visibility toggle button */}
          {isPasswordField && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff0000]/30 focus:ring-offset-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-600" />
              ) : (
                <Eye className="h-5 w-5 text-gray-600" />
              )}
            </button>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-sm" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";