export interface Character {
  id: number;
  name: string;
  thumbnail: Image;
}

export interface FullCharacter extends Character {
  description: string;
  comics: Comic[];
}

export interface Comic {
  id: number;
  title: string;
  description: string;
  images: Image[];
}

export interface Image {
  path: string;
  extension: string;
}
