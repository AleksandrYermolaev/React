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

export interface InfoType {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ExtraCharacterInfo {
  name: string;
  url: string;
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ExtraCharacterInfo;
  location: ExtraCharacterInfo;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface CharacterResponse {
  info: InfoType;
  results: Array<CharacterType>;
}
