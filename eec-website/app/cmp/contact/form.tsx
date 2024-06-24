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
  job?: string;
  title: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ formItems, title, job }) => {

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted");
    if (job){
        console.log("Job: ", job);
    }
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-5 m-auto">
    <h2 className="text-2xl text-[var(--color)]">{title}</h2>
      <form onSubmit={onsubmit}>
        {formItems.map((item, index) => (
          <FormLine key={index} item={item} />
        ))}
        <button className="button">Submit</button>
      </form>
    </div>
  );
};
export default ContactForm;
