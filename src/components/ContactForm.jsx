const ContactForm = () => {
  return (
    <div>
      <div>{/* Contact Informations */}</div>
      <form>
        <div>
          <input placeholder="Full Name" />
        </div>
        <div>
          <input placeholder="Email" />
        </div>
        <div>
          <input placeholder="Subject" />
        </div>
        <div>
          <textarea placeholder="Message" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
