import ContactForm from "../cmp/contact/form";
export default function test() {
  const formItems = [
    { label: "Name", type: "text", placeholder: "John Doe" },
    { label: "Email", type: "email", placeholder: "email@mail.com" },
    { label: "Message", type: "text", placeholder: "Your message here" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ContactForm formItems={formItems} />
    </main>
  );
}
