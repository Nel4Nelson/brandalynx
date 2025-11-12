"use client";
import React, { useState } from "react";
import { ContactForm, ContactFormData } from "./contact-form";

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Include newsletter preference with form data
      const submissionData = { ...data, newsletter };
      
      // TODO: Implement your form submission logic here
      console.log("Form submitted:", submissionData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Show success message or redirect
      alert("Thank you! Your message has been sent successfully.");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Container with Shadow */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  Discuss Your
                  <br />
                  Unique <span className="text-[#ff0000]">Branding</span>
                  <br />
                  <span className="text-[#ff0000]">Needs,</span> With
                  <br />
                  Our Sales Team
                </h2>

                <p className="text-gray-600 text-base leading-relaxed max-w-md">
                  Stay in the loop with exclusive offers, promos, early updates, free
                  resources, branding secrets, and insider gist straight to your inbox.
                </p>
              </div>

              {/* Newsletter Checkbox */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-[#ff0000] focus:ring-[#ff0000]"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-medium text-black">
                      Count me in, I want all the good stuff 🔥
                    </span>
                  </label>
                </div>
                <p className="text-xs text-gray-500 pl-8">
                  By checking this box, you agree to receive occasional emails from
                  BrandALYANX.{" "}
                  <a href="/privacy-policy" className="text-[#ffb000] underline hover:text-[#ff0000]">
                    You can unsubscribe anytime.
                  </a>
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  form="contact-form"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT MESSAGE"}
                </button>
              </div>
            </div>

            {/* Right Form Container */}
            <div>
              <ContactForm onSubmit={handleSubmit} isLoading={isSubmitting} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}