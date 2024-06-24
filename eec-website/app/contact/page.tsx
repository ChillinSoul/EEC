import ContactForm from "../cmp/contact/form";
export default function Contact() {
  const formItems = [
    { label: "Name", type: "text", placeholder: "John Doe" },
    { label: "Email", type: "email", placeholder: "email@mail.com" },
    { label: "Message", type: "textarea", placeholder: "Your message here" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ContactForm formItems={formItems} title="Contact Form"/>
    </main>
  );
}
