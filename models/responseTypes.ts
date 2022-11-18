interface Sys {
  id: string;
}

interface Asset {
  fields: {
    title: string;
    description: string;
    file: {
      contentType: string;
      details: {
        image: {
          height: number;
          width: number;
        };
        size: number;
      };
      url: string;
      fileName: string;
    };
  };
}

export interface User {
  fields: {
    discord: string;
    email: string;
    name: string;
    password: string;
    profilePicture: Asset;
  };
  sys: Sys;
}

export interface Game {
  fields: {
    name: string;
    icon?: Asset;
  };
  sys: Sys;
}

export interface Elo {
  fields: {
    game: Game;
    icon?: Asset;
    name: string;
  };
  sys: Sys;
}

export interface Role {
  fields: {
    game: Game;
    icon?: Asset;
    name: string;
  };
  sys: Sys;
}

export interface Post {
  fields: {
    author: User;
    game: Game;
    media?: Asset;
    message: string;
  };
  sys: Sys;
}

export interface UserPlaysGame {
  fields: {
    user: User;
    game: Game;
    elo: Asset;
    role: Role;
    nickname: string;
  };
  sys: Sys;
}
