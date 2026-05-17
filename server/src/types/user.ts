export interface Profile {
  id: number;
  name: string | null;
  avatar: string | null;
  bio: string | null;
  userId: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  profile: Profile | null;
}
