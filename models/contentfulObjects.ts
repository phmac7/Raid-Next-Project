interface System {
  id: string;
}

interface LinkType {
  sys: LinkTypeSys;
}

interface LinkTypeSys {
    type: string;
  linkType: string;
  id: string;
}

interface Field<T> {
  'en-US': T;
}

export interface User {
  fields: {
    name: Field<string>;
    email: Field<string>;
    discord: Field<string>;
    password: Field<string>;
    profilePicture: Field<LinkType>;
  };
  sys: System;
}

export interface Game {
  fields: {
    name: Field<string>;
    icon?: Field<LinkType>;
  };
  sys: System;
}

export interface Elo {
  fields: {
    name: Field<string>;
    game: Field<LinkType>;
    icon: Field<LinkType>;
  };
  sys: System;
}

export interface Role {
  fields: {
    name: Field<string>;
    game: Field<LinkType>;
    icon: Field<LinkType>;
  };
  sys: System;
}

export interface UserPlaysGame {
  fields: {
    game: Field<LinkType>;
    elo: Field<LinkType>;
    role: Field<string>;
    user: Field<LinkType>;
    nickname: Field<string>;
  };
  sys: System;
}

export interface Post {
  fields: {
    game: Field<LinkType>;
    media?: Field<LinkType>;
    message: Field<string>;
    author: Field<LinkType>;
  };
  sys?: System;
}
