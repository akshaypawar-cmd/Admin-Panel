import { useFormContext } from "react-hook-form";

import type { CreateUserForm, UserFieldType } from "@api";
import { FormInput } from "@components";

const AddUserForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateUserForm>();

  const usersField: UserFieldType[] = [
    { name: "firstname", label: "Firstname", type: "text" },
    { name: "lastname", label: "Lastname", type: "text" },
    { name: "email", label: "E-mail", type: "email" },
    { name: "phone", label: "Phone No.", type: "number" },
    { name: "address", label: "Address", type: "text" },
  ];
  
  return (
    <div>
      {usersField.map((user) => (
        <FormInput
          key={user.name}
          id={user.name}
          label={user.label}
          type={user.type}
          register={register(user.name)}
          error={errors[user.name as keyof CreateUserForm]}
        />
      ))}

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-lg w-full mt-4"
      >
        AddeUser
      </button>
    </div>
  );
};

export default AddUserForm;
