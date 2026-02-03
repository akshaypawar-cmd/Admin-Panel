import type { props } from "./FormInput.type"

const FormInput = ({label, type="text", placeholder, register, error, autocomplete,}:props) => {
  return (
    <div>
        <label className="text-sm font-medium text-gray-700 mb-3 block"> 
            {label}
        </label>
        
        <input type={type} {...register} placeholder= {placeholder}  autoComplete={autocomplete} 
        className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-all duration-200
        ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-400"
        } focus:ring-2`}
      />
    
       {error && (
        <p className="text-red-500 text-end mt-2 text-xs">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default FormInput
