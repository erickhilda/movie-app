import type { NextPage } from "next";
import { useContext } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import { MovieContext, IMovie } from "../context/MovieContext";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { movies, setSearch, bookmarkHandler, bookmark } =
    useContext(MovieContext);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const isBookmarked = (movie: IMovie) => {
    return bookmark.some((item) => item.imdbID === movie.imdbID);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-3/4 mt-4">
        <Input handleSearch={handleSearch} />
        <div className="grid grid-cols-5 gap-3 w-full mt-4">
          {movies?.map((item) => (
            <Card
              key={item.imdbID}
              image={item.Poster}
              title={item.Title}
              releasedYear={item.Year}
              id={item.imdbID}
              isBookmarked={isBookmarked(item)}
              handleBookmark={(e) => bookmarkHandler(item, e)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
