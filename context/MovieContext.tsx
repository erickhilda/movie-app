import { createContext, ReactNode, useState, useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export interface IMovies {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

export const MovieContext = createContext({
  movies: [] as IMovies[],
  setSearch: (search: string) => {},
});

export interface IMovieProviderProps {
  children: ReactNode;
}

export function MovieContextProvider({ children }: IMovieProviderProps) {
  const [movies, setMovies] = useState<IMovies[]>([]);
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

  return (
    <MovieContext.Provider value={{ movies, setSearch }}>
      {children}
    </MovieContext.Provider>
  );
}
