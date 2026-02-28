import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

import { useCreateNewUser, type CreateUserForm } from "@api";
import { AddUserForm } from "@forms";
import { addUserSchema } from "@schema";

const CreateUser = () => {
  const methods = useForm<CreateUserForm>({
    resolver: yupResolver(addUserSchema),
    mode: "all",
  });
  const { mutate: createUser } = useCreateNewUser();

  const { handleSubmit,reset } = methods;

  const onSubmit = (data: CreateUserForm) => {
    createUser(data, {
      onSuccess: () => {
        reset();
        toast.success("Product added Successfully");
      },
    });
  };

  return (
    
    <div className="fixed inset-0 flex items-center justify-center z-50 max-h-screen overflow-y-auto">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-4 max-h-screen overflow-y-auto">
        <p className="text-center font-bold text-xl">User Create </p>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <AddUserForm />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateUser;
