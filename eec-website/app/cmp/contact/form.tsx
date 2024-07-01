"use client";
import { useState } from "react";
import FormLine from "./formLine";
import LoadingModal from "./LoadingModal";
import "./styles.css";

export interface FormItem {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  options?: string[];
  isPhone?: boolean;
}

interface ContactFormProps {
  formItems: FormItem[];
  title: string;
  formType: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formItems,
  title,
  formType,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setIsLoading(true); // Show loading modal

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setIsLoading(false); // Hide loading modal

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("There was a problem submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting the form.");
      setIsLoading(false); // Hide loading modal in case of error
    }
  };

  return (
    <div className="flex flex-col gap-5 m-auto">
      {isLoading && <LoadingModal />}
      <h2 className="text-2xl text-[var(--color)]">{title}</h2>
      <form onSubmit={onsubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formItems.map((item, index) => (
            <FormLine key={index} item={item} />
          ))}
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
