export type CreateUserForm = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;

};

export type UserFieldType = {
  name:keyof CreateUserForm 
  label:string 
  type:string
} 
