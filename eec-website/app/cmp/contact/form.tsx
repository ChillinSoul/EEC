"use client";
import FormLine from './formLine'

export interface FormItem{
    label: string;
    type: string;
    placeholder: string;
}
interface ContactFormProps {
    formItems: FormItem[];
}


const ContactForm: React.FC<ContactFormProps> = ({ formItems }) => {
    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
    }
    return (
        <div className="flex flex-col gap-5 m-auto">
            <form onSubmit={onsubmit}>
            {formItems.map((item, index) => (
                <FormLine key={index} item={item} />
            ))}
            <button className="button">Submit</button>
            </form>
        </div>
    );
}
export default ContactForm;