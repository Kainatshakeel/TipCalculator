
import Dollar from "./components/svg/Dollar";

const InputField = ({ id, label, onChange, type = "number", placeholder = "0", svg }) => (
  <div className="grid grid-cols-1 gap-4 min-w-full">
    <label htmlFor={id} className="text-grayish-cyan text-xl font-bold">
      {label}
    </label>
    
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {svg}
      </span>
      <input
        id={id}
        className="p-2 pl-10 text-right text-2xl bg-very-light-grayish-cyan rounded-lg text-very-dark-cyan font-extrabold border border-transparent focus:outline-none focus:border-primary"
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
    </div>
);

export default InputField;
