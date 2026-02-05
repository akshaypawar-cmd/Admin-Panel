import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "@schema";
import { LoginForm, type FormData } from "@forms";

const Login = () => {

  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log("user data", data);
    return data;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-700">
      <div className="bg-white w-96 rounded-2xl shadow-2xl p-8 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          User Login
        </h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <LoginForm />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Login;
