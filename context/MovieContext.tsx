import { createContext, ReactNode, useState, useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export interface IMovie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Plot: string;
  Actors: string;
  Ratings: Array<IRating>;
}

export interface IRating {
  Value: string;
  Source: string;
}

export const MovieContext = createContext({
  movies: [] as IMovie[],
  setSearch: (search: string) => {},
  movieDetails: {} as IMovie,
  getMovieDetails: (id: string) => {},
});

export interface IMovieProviderProps {
  children: ReactNode;
}

export function MovieContextProvider({ children }: IMovieProviderProps) {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [search, setSearch] = useState<string>("");

  async function fetchMovies(searchValue: string) {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
    );
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  const [movieDetails, setMovieDetails] = useState<IMovie>({} as IMovie);

  async function getMovieDetails(movieId: string) {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
    );
    const movie = await res.json();
    setMovieDetails(movie);
  }

  return (
    <MovieContext.Provider
      value={{ movies, setSearch, movieDetails, getMovieDetails }}
    >
      {children}
    </MovieContext.Provider>
  );
}
