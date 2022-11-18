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

export interface Game {
  fields: {
    name: string;
    icon?: Asset;
  };
  sys: Sys;
}

export interface User {
    fields: {
        discord: string;
        email: string;
        name: string;
        password: string;
        profilePicture: Asset;
    }
    sys: Sys;
}
