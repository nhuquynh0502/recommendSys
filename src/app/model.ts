export interface User {
    id: number;
    name: string;
    image: string;
    movies?: Movie[]
  }

export interface Movie {
    movie_id: number;
    title: string;
    info: string;
    image: string;
    all_genres: string[];
    genres?: string;
}

export interface cBasedMovie {
  user_id: number;
  movie_id: number;
  title: string;
  ratingPredict: string;
  imgStr: string;
  all_genres: string[];
  genres?: string;
}

export interface MovieForUser {
  movie_id: number;
  title: string;
  image: string;
  all_genres: string[];
  genres?: string;
}