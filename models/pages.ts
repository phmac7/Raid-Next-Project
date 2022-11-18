import { Post, User, UserPlaysGame, Game } from '@/models/responseTypes';

export interface ProfilePageProps {
  userId: string | string[] | undefined;
  userPosts: Post[];
  userGames: UserPlaysGame[];
}

export interface HomePageProps {
  games: Game[];
}
