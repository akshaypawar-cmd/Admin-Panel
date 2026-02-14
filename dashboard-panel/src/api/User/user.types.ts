export type UserProfileResponse = {
  id: number;
  email: string;
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
};
