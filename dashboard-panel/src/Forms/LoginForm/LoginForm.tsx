import { useFormContext } from "react-hook-form";

import type { FormData } from "./LoginForms.types";
import { FormInput } from "@components";

const LoginForm = () => {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<FormData>();

  const handleMaxLength = (fieldName: "username" | "password") => (e: any) => {
    let value = e.target.value;

    if (value.length > 15) {
      value = value.slice(0, 15);

      setError(fieldName, {
        type: "max",
        message: "maximum 15 characters allowed",
      });
    } else {
      clearErrors(fieldName);
    }

    e.target.value = value;
  };

  const usernameRegister = register("username", {
    onChange: handleMaxLength("username"),
    setValueAs: (value) => value.trim(),
  });

  const passwordRegister = register("password", {
    onChange: handleMaxLength("password"),
  });

  return (
    <>
      <FormInput
        label="Username"
        type="text"
        placeholder="Enter your name"
        register={usernameRegister}
        error={errors.username}
      />

      <FormInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={passwordRegister}
        error={errors.password}
        autocomplete="password"
      />

      <button
        type="submit"
        className="w-full py-3 mt-5 rounded-lg font-semibold text-white bg-orange-500 transition-all duration-300"
      >
        Submit
      </button>
    </>
  );
};

export default LoginForm;
