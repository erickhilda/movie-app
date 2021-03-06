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
  isBookmarked: boolean;
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
  bookmark: [] as IMovie[],
  bookmarkHandler: (movie: IMovie, e: any) => {},
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

  const [bookmark, setBookmark] = useState<IMovie[]>([]);

  const addBookmark = (movie: IMovie) => {
    setBookmark((prevBookmark) => [
      ...prevBookmark,
      { ...movie, isBookmarked: true },
    ]);
  };

  const removeBookmark = (movie: IMovie) => {
    setBookmark((prevBookmark) =>
      prevBookmark.filter((m) => m.imdbID !== movie.imdbID)
    );
  };

  const bookmarkHandler = (movie: IMovie, e: any) => {
    e.preventDefault();
    if (bookmark.some((item) => item.imdbID === movie.imdbID)) {
      removeBookmark(movie);
    } else {
      addBookmark(movie);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setSearch,
        movieDetails,
        getMovieDetails,
        bookmark,
        bookmarkHandler,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
