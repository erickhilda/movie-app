import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const DescriptionPage = () => {
  interface IMovie {
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

  interface IRating {
    Value: string;
    Source: string;
  }

  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const router = useRouter();
  const { id } = router.query;

  const [description, setDescription] = useState<IMovie | null>();
  async function getMovie(movieId: string) {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
    );
    const movie = await res.json();
    setDescription(movie);
  }

  useEffect(() => {
    getMovie(id as string);
  }, [id]);
  return (
    <div className="w-full">
      <nav className="bg-gray-900 shadow-lg">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
          <div className="flex justify-between items-center">
            <div className="text-base font-bold text-gray-800">
              <Link href={`/`}>
                <a className="block bg-red-600 px-3 py-1 rounded-sm text-white font-semibold">
                  Back
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {description && (
        <div className="flex bg-white mx-auto w-1/2">
          <div className="flex w-1/2 p-10">
            <img
              src={description.Poster}
              alt="mountains"
              className="rounded-lg"
            />
          </div>
          <div className="flex items-start text-left md:px-5 w-full pt-10">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">
                {description.Title}
              </h2>
              <div className="mt-2 text-sm text-gray-600 md:text-base">
                <p className="mt-1 inline">
                  {description.Released} &bull; {description.Runtime}
                </p>
                <p className="mt-2 text-sm">
                  <span className="inline">{description.Genre}</span>
                </p>
                <p className="text-lg mt-2 font-semibold">Actors</p>
                <p className="mt-1 text-sm">{description.Actors}</p>
                <p className="text-lg mt-2 font-semibold">Overview</p>
                <p className="mt-1">{description.Plot}</p>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {description?.Ratings?.map((rating: IRating, index: number) => (
                    <span
                      key={index}
                      className="bg-transparent py-1 px-2 border border-gray-500 rounded"
                    >
                      {rating.Source}
                      {rating.Value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionPage;
