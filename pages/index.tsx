import type { NextPage } from "next";
import { useContext } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const { movies, setSearch } = useContext(MovieContext);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
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
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
