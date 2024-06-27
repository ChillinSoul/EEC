"use client";
import { useState } from "react";
import ContactForm, { FormItem } from "../cmp/contact/form";

const formConfigurations: {
  [key: string]: { title: string; formItems: FormItem[] };
} = {
  student: {
    title: "Interested Student",
    formItems: [
      {
        label: "First Name",
        type: "text",
        placeholder: "e.g., John",
        required: true,
      },
      {
        label: "Last Name",
        type: "text",
        placeholder: "e.g., Doe",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        placeholder: "e.g., john.doe@example.com",
        required: true,
      },
      {
        label: "University",
        type: "text",
        placeholder: "e.g., ECAM Brussels",
        required: true,
      },
      {
        label: "Study Field",
        type: "text",
        placeholder: "e.g., Industrial Engineering",
        required: true,
      },
      {
        label: "Study Field Details",
        type: "text",
        placeholder: "e.g., Electronics, Mechanics",
      },
      {
        label: "Phone",
        type: "tel",
        placeholder: "+32",
        required: true,
        isPhone: true,
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "Your Message",
        required: true,
      },
    ],
  },
  company: {
    title: "Interested Company",
    formItems: [
      {
        label: "Company Name",
        type: "text",
        placeholder: "e.g., Tech Corp",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        placeholder: "e.g., contact@techcorp.com",
        required: true,
      },
      {
        label: "Phone",
        type: "tel",
        placeholder: "e.g., +1 234 567 8901",
        required: true,
        isPhone: true,
      },
      {
        label: "Country",
        type: "select",
        placeholder: "Select your country",
        required: true,
        options: [
          "Belgium",
          "United States",
          "United Kingdom",
          "France",
          "Germany",
          "Other",
        ],
      },
      {
        label: "Industry",
        type: "text",
        placeholder: "e.g., Information Technology",
      },
      {
        label: "Contact Position in Company",
        type: "text",
        placeholder: "e.g., Project Manager",
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "Your Message",
        required: true,
      },
    ],
  },
  individual: {
    title: "Interested Individual",
    formItems: [
      {
        label: "First Name",
        type: "text",
        placeholder: "e.g., Alex",
        required: true,
      },
      {
        label: "Last Name",
        type: "text",
        placeholder: "e.g., Johnson",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        placeholder: "e.g., alex.johnson@example.com",
        required: true,
      },
      {
        label: "Phone",
        type: "tel",
        placeholder: "e.g., +44 1234 567890",
        required: true,
        isPhone: true,
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "Your Message",
        required: true,
      },
    ],
  },
  other: {
    title: "Other Inquiries",
    formItems: [
      {
        label: "First Name",
        type: "text",
        placeholder: "e.g., Sam",
        required: true,
      },
      {
        label: "Last Name",
        type: "text",
        placeholder: "e.g., Lee",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        placeholder: "e.g., sam.lee@example.com",
        required: true,
      },
      {
        label: "Subject",
        type: "text",
        placeholder: "e.g., Collaboration Proposal",
        required: true,
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "Your Message",
        required: true,
      },
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
        <main className="flex flex-col items-center min-h-screen p-6">
          <p className=" text-gray-400">
            Please choose the form type that suits you best.
          </p>
        </main>
      )}
    </main>
  );
};

export default ContactPage;
