"use client";
import FormLine from "./formLine";
import "./styles.css";

export interface FormItem {
  label: string;
  type: string;
  placeholder: string;
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
  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("There was a problem submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <div className="flex flex-col gap-5 m-auto">
      <h2 className="text-2xl text-[var(--color)]">{title}</h2>
      <form onSubmit={onsubmit}>
        {formItems.map((item, index) => (
          <FormLine key={index} item={item} />
        ))}
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
