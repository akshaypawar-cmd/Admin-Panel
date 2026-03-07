import { useFormContext } from "react-hook-form";

import type { FormData } from "./LoginForms.types";
import { FormInput } from "@components";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

   const usernameRegister = register("username", {
    setValueAs: (value) => value.trim(),
  });

  const passwordRegister = register("password", {
   
  });

  return (
    <>
      <FormInput
        id={"name"}
        label="Username"
        type="text"
        placeholder="Enter your name"
        register={usernameRegister}
        error={errors.username}
      />

      <FormInput
      id={"name"}
       label="Password"
       type="password"
       placeholder="Enter your password"
       register={passwordRegister}
       error={errors.password}
       autoComplete="password"
      />

      <button
        type="submit"
        className="w-full py-3 mt-5 rounded-lg cursor-pointer font-semibold text-white bg-orange-500 transition-all duration-300"
      >
        Submit
      </button>
    </>
  );
};

export default LoginForm;
