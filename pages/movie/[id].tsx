import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import { MovieContext, IRating } from "../../context/MovieContext";

const DescriptionPage = () => {
  const { movieDetails, getMovieDetails } = useContext(MovieContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getMovieDetails(id as string);
  }, []);
  return (
    <Layout>
      <div className="w-full">
        {movieDetails && (
          <div className="flex bg-white mx-auto w-1/2">
            <div className="flex w-1/2 p-10">
              <img
                src={movieDetails.Poster}
                alt="movie poster"
                className="rounded-lg"
              />
            </div>
            <div className="flex items-start text-left md:px-5 w-full pt-10">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800">
                  {movieDetails.Title}
                </h2>
                <div className="mt-2 text-sm text-gray-600 md:text-base">
                  <p className="mt-1 inline">
                    {movieDetails.Released} &bull; {movieDetails.Runtime}
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="inline">{movieDetails.Genre}</span>
                  </p>
                  <p className="text-lg mt-2 font-semibold">Actors</p>
                  <p className="mt-1 text-sm">{movieDetails.Actors}</p>
                  <p className="text-lg mt-2 font-semibold">Overview</p>
                  <p className="mt-1">{movieDetails.Plot}</p>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {movieDetails?.Ratings?.map(
                      (rating: IRating, index: number) => (
                        <span
                          key={index}
                          className="bg-transparent py-1 px-2 border border-gray-500 rounded"
                        >
                          {rating.Source}
                          {rating.Value}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DescriptionPage;
