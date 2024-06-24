"use client";
import { useParams } from "next/navigation";
import ContactForm from "../../cmp/contact/form";

export default function Test() {
  const { job } = useParams(); 
  const decodedJob = decodeURIComponent(Array.isArray(job) ? job[0] : job); 

  const formItems = [
    { label: "Name", type: "text", placeholder: "John Doe" },
    { label: "Email", type: "email", placeholder: "email@mail.com" },
    { label: "Message", type: "textarea", placeholder: "Your message here" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-4">Job: {decodedJob}</h1>
      <ContactForm formItems={formItems} job={decodedJob} />
    </main>
  );
}