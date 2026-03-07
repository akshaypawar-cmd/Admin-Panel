import type { ColumnDef } from "@tanstack/react-table";
import type { Path } from "react-hook-form";

export type CreateUserForm = {
  id?:number
  name :{
    firstname: string;
    lastname: string;
  }
  email: string;
  phone: string;
  address?: {
    city:string
  }
};

export type UserFieldType = {
  name:Path <CreateUserForm>
  label:string 
  type:string
} 

export interface UserTableProps {
  data: CreateUserForm[];
  columns: ColumnDef<CreateUserForm, any>[];
}

export interface UserCloseButtonProps{
  onClose : ()=> void 
}