export type UserResponse = {
  id?:number
  name:{
    firstname: string;
    lastname: string;
  }
  email: string;
  phone: string;
  address: {
    city:string
  }
};
