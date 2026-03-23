import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import { useCreateNewUser, type UserResponse} from "@api";
import { AddUserForm } from "@forms";
import { addUserSchema } from "@schema";
import type { UserCloseButtonProps } from "./createNewUser.type";

const CreateUser:React.FC<UserCloseButtonProps> = ({ onClose }) => {
  const methods = useForm<UserResponse>({
    resolver: yupResolver(addUserSchema),
    mode: "all",
  });
  const { mutate: createUser } = useCreateNewUser();

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: UserResponse) => {
    createUser(data, {
      onSuccess: () => {
        reset();
        onClose()
        toast.success("Added User Successfully");
      },
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-4 max-h-96 md:max-h-1/2 scrollbar-hide overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold text-xl">User Create</p>

          <X
            className="size-6 cursor-pointer hover:bg-gray-500 rounded-2xl transition-all duration-500"
            onClick={onClose}
          />
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <AddUserForm/>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateUser;
