export type RandomUsersResponse = {
  results: {
    name: { first: string; last: string };
    email: string;
    picture: { large: string };
  }[];
};

export type RemoteUser = {
  name: string; // full name
  email: string;
  picture: string;
};

export type AuthUser = RemoteUser & {
  phone: string;
};
