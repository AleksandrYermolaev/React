export type CardType = {
  image: string;
  title: string;
  subtitle: string;
  categories: string;
  likes: number;
  views: number;
  date: number;
};

export type UserType = {
  name: string;
  surname: string;
  birthday: number;
  family: string;
  gender: string;
  avatar: string;
  notifications: string;
};

export type InputsType = {
  name: string;
  surname: string;
  birthday: string;
  family: string;
  gender: string;
  avatar: FileList;
  notifications: Array<string>;
};
