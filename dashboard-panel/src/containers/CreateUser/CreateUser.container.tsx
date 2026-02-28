import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";

import { useCreateNewUser, type CreateUserForm } from "@api";
import { AddUserForm } from "@forms";
import { addUserSchema } from "@schema";

const CreateUser = () => {
  const methods = useForm<CreateUserForm>({
    resolver: yupResolver(addUserSchema),
    mode: "onTouched",
  });
  const { mutate: createUser } = useCreateNewUser();

  const { handleSubmit } = methods;

  const onSubmit = (data: CreateUserForm) => {
    createUser(data, {
      onSuccess: () => {
        toast.success("Product added Successfully");
      },
    });
  };
  
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
          <p className="text-center p-2 font-bold text-xl">User Create</p>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <AddUserForm />
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
