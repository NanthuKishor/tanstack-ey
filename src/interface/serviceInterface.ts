export interface ICharacterInfoResponse {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

type ICharacterGender = "Female" | "Male" | "Genderless" | "unknown";

type ICharacterStatus = "Alive" | "Dead" | "unknown";

export interface ICharacterResultResponse {
  id: number;
  name: string;
  status: ICharacterStatus;
  species: string;
  type: string;
  gender: ICharacterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacterResponse {
  info: ICharacterInfoResponse;
  results: ICharacterResultResponse[];
}
