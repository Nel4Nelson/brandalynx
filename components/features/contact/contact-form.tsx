/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { FormSelect } from "@/components/ui/form-select";
import { Paperclip } from "lucide-react";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name must not exceed 100 characters." }),

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must not exceed 100 characters." }),

  industry: z
    .string()
    .min(1, { message: "Please select an industry." }),

  interestedIn: z
    .string()
    .min(1, { message: "Please select what you're interested in." }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must not exceed 1000 characters." }),

  file: z.any().optional(),

  newsletter: z.boolean().optional(),
});

export interface ContactFormData {
  name: string;
  email: string;
  industry: string;
  interestedIn: string;
  message: string;
  file?: File;
  newsletter?: boolean;
}

interface ContactFormProps {
  onSubmit: (values: ContactFormData) => void;
  isLoading?: boolean;
}

const industryOptions = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance" },
  { value: "retail", label: "Retail" },
  { value: "education", label: "Education" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "hospitality", label: "Hospitality" },
  { value: "real-estate", label: "Real Estate" },
  { value: "other", label: "Other" },
];

const interestedInOptions = [
  { value: "brand-strategy", label: "Brand Strategy" },
  { value: "brand-identity", label: "Brand Identity Design" },
  { value: "branded-merchandise", label: "Branded Merchandise" },
  { value: "full-branding", label: "Full Branding Package" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
];

export function ContactForm({ onSubmit, isLoading = false }: ContactFormProps) {
  const [fileName, setFileName] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      industry: "",
      interestedIn: "",
      message: "",
    },
  });

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <FormInput
        label="Name"
        placeholder="Name*"
        type="text"
        required
        error={errors.name?.message}
        {...register("name")}
      />

      {/* Email */}
      <FormInput
        label="Email"
        placeholder="Email*"
        type="email"
        required
        error={errors.email?.message}
        {...register("email")}
      />

      {/* Industry Select */}
      <Controller
        name="industry"
        control={control}
        render={({ field }) => (
          <FormSelect
            label="Industry"
            placeholder="Industry"
            options={industryOptions}
            value={field.value}
            onValueChange={field.onChange}
            error={errors.industry?.message}
            required
          />
        )}
      />

      {/* What are you interested in? Select */}
      <Controller
        name="interestedIn"
        control={control}
        render={({ field }) => (
          <FormSelect
            label="What are you interested in?"
            placeholder="What are you interested in?"
            options={interestedInOptions}
            value={field.value}
            onValueChange={field.onChange}
            error={errors.interestedIn?.message}
            required
          />
        )}
      />

      {/* File Upload */}
      <div className="space-y-2">
        <label
          htmlFor="file-upload"
          className="flex items-center justify-between w-full px-4 py-3 bg-[#f5f5f5] rounded-lg cursor-pointer hover:bg-[#ebebeb] transition-colors"
        >
          <span className="text-gray-500">
            {fileName || "Attach File (optional)"}
          </span>
          <Paperclip className="h-5 w-5 text-gray-400" />
        </label>
        <input
          id="file-upload"
          type="file"
          className="sr-only"
          {...register("file", {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) {
                setFileName(file.name);
              }
            },
          })}
        />
      </div>

      {/* Message Textarea */}
      <FormTextarea
        label="Message"
        placeholder="Message* (add all necessary details)"
        required
        error={errors.message?.message}
        {...register("message")}
      />
    </form>
  );
}