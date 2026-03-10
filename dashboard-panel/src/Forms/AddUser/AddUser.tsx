import { get, useFormContext } from "react-hook-form";

import type { UserResponse } from "@api";
import { FormInput } from "@components";
import type { UserFieldType } from "./userInputsField.types";

const AddUserForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserResponse>();

  const usersField: UserFieldType[] = [
    { name: "name.firstname", label: "First name", type: "text" },
    { name: "name.lastname", label: "Last name", type: "text" },
    { name: "email", label: "E-mail", type: "email" },
    { name: "phone", label: "Phone No.", type: "number" },
    { name: "address.city", label: "Address", type: "text" },
  ];
  
  return (
    <div  className="rounded-xl flex flex-col">
      {usersField.map((user) => (
        <FormInput
          key={user.name}
          id={user.name}
          label={user.label}
          type={user.type}
          register={register(user.name)}
          error={get(errors, user.name)}
        />
      ))}
      
        <div className="flex justify-end gap-3 mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer"
        > 
           Create User 
        </button>
      </div>
    </div>
  );
};

export default AddUserForm;
