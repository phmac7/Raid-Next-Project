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

export interface Elo {
  fields: {
    game: Game;
    icon: Asset;
    name: string;
  };
  sys: Sys;
}
