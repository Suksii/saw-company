const Textarea = ({ label, onChange }) => {
    return (
      <div className="relative w-full">
        <textarea
          type="text"
          placeholder=" "
          className="w-full p-2 bg-transparent focus:outline-none border-b border-b-blue-900 outline-none peer"
          onChange={onChange}
        />
        <label className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-900 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:text-blue-600">
          {label}
        </label>
      </div>
    );
  };
  
  export default Textarea;