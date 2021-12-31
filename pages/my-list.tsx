import type { NextPage } from "next";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MyList: NextPage = () => {
  const { bookmark, bookmarkHandler } = useContext(MovieContext);

  return (
    <Layout>
      <div className="flex flex-col items-center w-3/4 mt-4">
        <div className="grid grid-cols-5 gap-3 w-full mt-4">
          {bookmark?.map((item) => (
            <Card
              key={item.imdbID}
              image={item.Poster}
              title={item.Title}
              releasedYear={item.Year}
              id={item.imdbID}
              isBookmarked={item.isBookmarked}
              handleBookmark={(e) => bookmarkHandler(item, e)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyList;
