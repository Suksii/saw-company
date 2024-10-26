import { AiFillMail } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 gap-6 items-center py-8">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-6 justify-center text-center w-2/3 mx-auto">
          <h2 className="text-2xl text-blue-900 font-semibold">Kontakt informacije</h2>
          <p className="text-lg text-blue-800">
            Hvala vam što ste zainteresovani za naše usluge u oblasti zaštite na
            radu. Vaša bezbijednost i dobrobit su nam od najvećeg značaja.
          </p>
          <div className="flex flex-col gap-1 justify-center items-center md:items-start mx-auto">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-blue-900" />
              <p className="text-blue-800">Crnogorskih serdara 7, Podgorica</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="text-blue-900" />
              <p className="text-blue-800">+382 69 078 048</p>
            </div>
            <div className="flex gap-2 items-center">
              <AiFillMail className="text-blue-900" />
              <p className="text-blue-800">inginspekt@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="flex flex-col justify-center items-center gap-4 text-center w-2/3 mx-auto">
          <h3 className="text-2xl text-blue-800 font-semibold">Kontaktirajte nas putem forme</h3>
          <p className="text-lg text-blue-800 pb-2">
            Imate pitanja, želite saznati više o našim uslugama ili vam je
            potrebna dodatna informacija? Ne ustručavajte se da nas
            kontaktirate. Naš tim stručnjaka je tu da vam pomogne.
          </p>
        </div>
        <form className="flex flex-col gap-6 w-[80%] mx-auto pt-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="w-full p-2 bg-transparent focus:outline-none border-b border-b-blue-900 outline-none peer"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-900 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-500">
                Your Full Name
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="w-full p-2 bg-transparent focus:outline-none border-b border-b-blue-900 outline-none peer"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-900 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-600">
                Your Email
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="w-full p-2 bg-transparent focus:outline-none border-b border-b-blue-900 outline-none peer"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-900 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-600">
                Subject
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full">
              <textarea
                type="text"
                placeholder=" "
                className="w-full p-2 bg-transparent focus:outline-none border-b border-b-blue-900 outline-none peer"
              />
              <label className="absolute left-2 top-2 transform -translate-y-1/2 text-blue-900 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-600">
                Message
              </label>
            </div>
          </div>
          <button className="w-48 bg-blue-900 py-2 rounded-sm text-blue-50 tracking-wider font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
