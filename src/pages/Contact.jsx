import ContactForm from "../components/ContactForm";
import HeaderTitle from "../components/HeaderTitle";

const Contact = () => {
  return (
    <div>
      <HeaderTitle
        title="Kontakt"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
