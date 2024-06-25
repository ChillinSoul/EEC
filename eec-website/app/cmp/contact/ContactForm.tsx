import React from "react";
import FormLine from "./FormLine";
import { FormItem } from "./FormLine";

interface ContactFormProps {
  formItems: FormItem[];
}

const ContactForm: React.FC<ContactFormProps> = ({ formItems }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    // Send email and save to CSV (implement your backend logic here)

    // Example: Sending email logic (to be implemented)
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formItems.map((item, index) => (
        <FormLine key={index} item={item} />
      ))}
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
