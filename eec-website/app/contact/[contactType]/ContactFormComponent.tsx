"use client";
import { useParams } from "next/navigation";
import ContactForm, { FormItem } from "../../cmp/contact/form";
import Link from "next/link";

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

interface ContactFormComponentProps {
  contactType: string;
}

const ContactFormComponent: React.FC<ContactFormComponentProps> = ({
  contactType,
}) => {
  const formConfig = formConfigurations[contactType];

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <section className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Get in Touch with Us</h1>
        <p className="text-lg mb-6">
          We are here to answer any questions you may have. Choose the type of
          inquiry below to get started.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link href="/contact/student">
            <button
              className={`button ${
                contactType === "student" ? "button-active" : ""
              }`}
            >
              Interested Student
            </button>
          </Link>
          <Link href="/contact/company">
            <button
              className={`button ${
                contactType === "company" ? "button-active" : ""
              }`}
            >
              Interested Company
            </button>
          </Link>
          <Link href="/contact/individual">
            <button
              className={`button ${
                contactType === "individual" ? "button-active" : ""
              }`}
            >
              Interested Individual
            </button>
          </Link>
          <Link href="/contact/other">
            <button
              className={`button ${
                contactType === "other" ? "button-active" : ""
              }`}
            >
              Other Inquiries
            </button>
          </Link>
        </div>
      </section>

      {formConfig ? (
        <section className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <ContactForm
            formItems={formConfig.formItems}
            title={formConfig.title}
            formType={contactType}
          />
        </section>
      ) : (
        <section className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">Please Choose a Form Type</h2>
        </section>
      )}
    </main>
  );
};

export default ContactFormComponent;
