"use client";
import { useState } from "react";
import ContactForm, { FormItem } from "../cmp/contact/form";

const formConfigurations: {
  [key: string]: { title: string; formItems: FormItem[] };
} = {
  student: {
    title: "Interested Student",
    formItems: [
      { label: "Name", type: "text", placeholder: "John Doe" },
      { label: "Email", type: "email", placeholder: "email@mail.com" },
      { label: "Course", type: "text", placeholder: "Engineering" },
      { label: "Message", type: "textarea", placeholder: "Your message here" },
    ],
  },
  company: {
    title: "Interested Company",
    formItems: [
      { label: "Name", type: "text", placeholder: "Jane Smith" },
      { label: "Email", type: "email", placeholder: "email@company.com" },
      { label: "Industry", type: "text", placeholder: "Tech" },
      { label: "Message", type: "textarea", placeholder: "Your message here" },
    ],
  },
  individual: {
    title: "Interested Individual",
    formItems: [
      { label: "Name", type: "text", placeholder: "Alex Johnson" },
      { label: "Email", type: "email", placeholder: "email@individual.com" },
      { label: "Subject", type: "text", placeholder: "Inquiry" },
      { label: "Message", type: "textarea", placeholder: "Your message here" },
    ],
  },
  other: {
    title: "Other Inquiries",
    formItems: [
      { label: "Name", type: "text", placeholder: "Sam Lee" },
      { label: "Email", type: "email", placeholder: "email@other.com" },
      { label: "Reason", type: "text", placeholder: "Reason" },
      { label: "Message", type: "textarea", placeholder: "Your message here" },
    ],
  },
};

const ContactPage = () => {
  const [formType, setFormType] = useState<string | null>(null);

  const handleFormTypeChange = (type: string) => {
    setFormType(type);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold mb-4">Get in Touch with Us</h1>
      <p className="text-lg mb-6">
        We are here to answer any questions you may have. Choose the type of
        inquiry below to get started.
      </p>
      <div className="mb-8 align-middle">
        <button
          className="button"
          onClick={() => handleFormTypeChange("student")}
        >
          Interested Student
        </button>
        <button
          className="button"
          onClick={() => handleFormTypeChange("company")}
        >
          Interested Company
        </button>
        <button
          className="button"
          onClick={() => handleFormTypeChange("individual")}
        >
          Interested Individual
        </button>
        <button
          className="button"
          onClick={() => handleFormTypeChange("other")}
        >
          Other Inquiries
        </button>
      </div>
      {formType ? (
        <ContactForm
          formItems={formConfigurations[formType].formItems}
          title={formConfigurations[formType].title}
          formType={formType}
        />
      ) : (
        <p>Please choose a form type.</p>
      )}
    </main>
  );
};

export default ContactPage;
