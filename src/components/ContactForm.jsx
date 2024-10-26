import { AiFillMail } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center py-8">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-6 justify-center text-center w-2/3 mx-auto">
          <h2 className="text-2xl">Kontakt informacije</h2>
          <p className="text-lg">
            Hvala vam što ste zainteresovani za naše usluge u oblasti zaštite na
            radu. Vaša bezbijednost i dobrobit su nam od najvećeg značaja.
          </p>
          <div className="flex flex-col gap-1 justify-center items-center md:items-start mx-auto">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt />
              <p>Crnogorskih serdara 7, Podgorica</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt />
              <p>+382 69 078 048</p>
            </div>
            <div className="flex gap-2 items-center">
              <AiFillMail />
              <p>inginspekt@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="flex flex-col justify-center items-center gap-4 text-center w-2/3 mx-auto">
          <h3 className="text-2xl">Kontaktirajte nas putem forme</h3>
          <p className="text-lg">
            Imate pitanja, želite saznati više o našim uslugama ili vam je
            potrebna dodatna informacija? Ne ustručavajte se da nas
            kontaktirate. Naš tim stručnjaka je tu da vam pomogne.
          </p>
        </div>
        <form className="flex flex-col gap-6 w-[80%] mx-auto pt-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="w-full p-2 bg-blue-50 focus:outline-none outline-none border border-gray-300 rounded-md focus:border-blue-400 peer"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-500">
                Your Full Name
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="w-full p-2 bg-blue-50 focus:outline-none outline-none border border-gray-300 rounded-md focus:border-blue-400 peer"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-500">
                Your Email
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full">
              <input
                type="text"
                placeholder=" "
                className="w-full p-2 bg-blue-50 focus:outline-none outline-none border border-gray-300 rounded-md focus:border-blue-400 peer"
              />
              <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-500">
                Subject
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="relative w-full">
              <textarea
                type="text"
                placeholder=" "
                className="w-full p-2 bg-blue-50 focus:outline-none outline-none border border-gray-300 rounded-md focus:border-blue-400 peer"
              />
              <label className="absolute left-2 top-2 transform -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-500">
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
