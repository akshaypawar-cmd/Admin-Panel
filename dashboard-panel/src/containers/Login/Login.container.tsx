import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginForm, type FormData } from "@forms";
import { schema } from "@schema";
import { login } from "@api";

const Login = () => {
  const navigate = useNavigate();
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await login(data);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid username or password");
    }
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
