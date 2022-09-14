export interface DescriptionUser {
  _id: string;
  text: string;
}

export interface UserProps {
  _id: string;
  name: string;
  email: string;
  username: string;
  description: DescriptionUser[];
  avatar: string;
  created_at: string;
  __v: number;
}
