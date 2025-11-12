import React, { forwardRef, useId } from "react";
import { Label } from "@/components/ui/label";

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  required?: boolean;
  showLabel?: boolean;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  (
    {
      label,
      error,
      required = false,
      showLabel = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = props.id || generatedId;

    return (
      <div className="space-y-2">
        {showLabel && label && (
          <Label htmlFor={textareaId} className="text-black font-medium">
            {label}
            {required && <span className="text-[#ff0000] ml-1">*</span>}
          </Label>
        )}

        {!showLabel && label && (
          <Label htmlFor={textareaId} className="sr-only">
            {label}
          </Label>
        )}

        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            className={`w-full px-4 py-3 bg-[#f5f5f5] border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff0000]/20 transition-all ${
              error ? "ring-2 ring-red-500" : ""
            } ${className}`}
            placeholder={props.placeholder}
            aria-invalid={error ? "true" : "false"}
            rows={6}
            style={{ minHeight: "141px", resize: "vertical" }}
            {...props}
          />
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

FormTextarea.displayName = "FormTextarea";