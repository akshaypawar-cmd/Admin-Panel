export type CreateUserForm = {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  address: string;
  city: string;
  
};

export type UserFieldType = {
  name:keyof CreateUserForm 
  label:string 
  type:string
} 
