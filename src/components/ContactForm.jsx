const ContactForm = () => {
  return (
    <div>
      <div>{/* Contact Informations */}</div>
      <form className="w-[80%] mx-auto py-8 flex flex-col gap-6">
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
            <label className="absolute left-2 top-2 transform text-gray-400 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-500">
              Message
            </label>
          </div>
        </div>
        <button className="w-48 bg-blue-900 py-2 rounded-sm text-blue-50 tracking-wider font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
