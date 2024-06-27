import ContactFormComponent from "./ContactFormComponent";

interface Params {
  params: {
    contactType: string;
  };
}

export async function generateStaticParams() {
  const contactTypes = ["student", "company", "individual", "other"];
  return contactTypes.map((type) => ({
    contactType: type,
  }));
}

const DynamicContactFormPage = ({ params }: Params) => {
  return <ContactFormComponent contactType={params.contactType} />;
};

export default DynamicContactFormPage;
