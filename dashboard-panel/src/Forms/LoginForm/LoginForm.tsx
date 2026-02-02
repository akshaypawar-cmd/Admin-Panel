import { useFormContext } from "react-hook-form";

import type { FormData } from "@types";

const LoginForm = () => {

  const {
    register,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useFormContext<FormData>(); 

  const usernameRegister = register("username", {
    onChange: (e) => {
      let value = e.target.value;
      if (value.length > 15) {
        value = value.slice(0, 15);
        setError("username", {
          type: "max",
          message: "maximum 15 characters allowed",
        });
      } else {
        clearErrors("username");
      }
      e.target.value = value;
    },
    onBlur: (e) => {
      const trimmed = e.target.value.trim();
      setValue("username", trimmed, { shouldValidate: true });
    },
  });

  const passwordRegister = register("password", {
    onChange: (e) => {
      let value = e.target.value;
      if (value.length > 15) {
        value = value.slice(0, 15);
        setError("password", {
          type: "max",
          message: "maximum 15 characters allowed",
        });
      } else {
        clearErrors("password");
      }
      e.target.value = value;
    },
  });

  return (
    <>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-3">
          Username
        </label>
        <input
          {...usernameRegister}
          placeholder="Enter username"
          className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-all duration-200
                ${
                  errors.username
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-400"
                } focus:ring-2`}
        />
        {errors.username && (
          <p className="text-red-500 text-end mt-2 text-xs">
            {errors.username.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-3">
          Password
        </label>
        <input
          {...passwordRegister}
          placeholder="Enter password"
          className={`w-full px-4 py-2.5 rounded-lg border outline-none transition-all duration-200
                ${
                  errors.password
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-400"
                } focus:ring-2`}
        />
        {errors.password && (
          <p className="text-red-500 text-end mt-2 text-xs">
            {errors.password.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3 mt-5 rounded-lg font-semibold text-white bg-orange-500 transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default LoginForm ; 
