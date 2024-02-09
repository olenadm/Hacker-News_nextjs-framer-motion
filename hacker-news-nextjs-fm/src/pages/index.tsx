import withTransition from "@/Hoc/withTransitions";
import RecentBox from "@/components/RecentBox";
import { getAllDetails } from "./api/hello";
import { useEffect, useState } from "react";

function Home() {
  const [tops, setTops] = useState([]);
  const [shows, setShows] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const top = await getAllDetails("top", 0, 5);
      const show = await getAllDetails("show", 0, 5);
      const job = await getAllDetails("job", 0, 5);

      console.log(show)

      setTops((old) => top);
      setShows((old) => show);
      setJobs((old) => job);
    }
    fetchMyAPI();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-sm-12 position-relative">
          <h1 className="mt-5 mb-5">Recent Stories</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <RecentBox stories={tops} href="top" /*isLoading={topLoading}*/ />
        </div>
        <div className="col-sm-4">
          <RecentBox stories={shows} href="show" /*isLoading={topLoading}*/ />
        </div>
        <div className="col-sm-4">
          <RecentBox stories={jobs} href="job" /*isLoading={topLoading}*/ />
        </div>
      </div>
    </>
  );
}

export default withTransition(Home);
