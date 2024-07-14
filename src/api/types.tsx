export interface Position {
  name: string;
  url: string;
}

export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface Character {
  id: number;
  created?: string;
  episode?: [];
  gender?: string;
  image?: string;
  location?: Position;
  name: string;
  origin?: Position;
  species?: string;
  status?: string;
  url?: string;
}

export interface ApiResponse {
  info: Info;
  results: Character[];
}
