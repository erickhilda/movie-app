import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";

const Home: NextPage = () => {
  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("");

  async function fetchMovies(searchValue: string) {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
    );
    const data = await response.json();
    setMovies(data.Search);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>OMDB Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 shadow w-full">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <Image src="/vercel-light.svg" alt="logo" width={72} height={16} />
        </div>
      </header>
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
    </div>
  );
};

export default Home;
