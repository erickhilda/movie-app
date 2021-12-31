import type { NextPage } from "next";
import Layout from "../components/Layout";

const MyList: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-3/4 mt-4">My list page</div>
    </Layout>
  );
};

export default MyList;
