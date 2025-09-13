export type RemoteUser = {
  name: string; // full name
  email: string;
  picture: string;
};

export type AuthUser = RemoteUser & {
  phone: string;
};
