import withTransition from "@/Hoc/withTransitions";
import RecentBox from "@/components/RecentBox";
import { getAllDetails } from "./api/hello";
import { useEffect, useState } from "react";

function Home() {
  const [tops, setTops] = useState([]);
  const [shows, setShows] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [topLoading, setTopLoading] = useState(true);
  const [showsLoading, setShowsLoading] = useState(true);
  const [jobsLoading, setJobsLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const top = await getAllDetails("top", 1, 5);
      const show = await getAllDetails("show", 1, 5);
      const job = await getAllDetails("job", 1, 5);

      console.log(show);

      if (top.length > 0) {
        setTops((old) => top);
        setTopLoading(false);
      }
      if (show.length > 0) {
        setShows((old) => show);
        setShowsLoading(false);
      }
      if (job.length > 0) {
        setJobs((old) => job);
        setJobsLoading(false);
      }
    }
    fetchMyAPI();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <h1 className="mb-4 mt-lg-5 mb-lg-5">Recent Stories</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 mb-3">
          <RecentBox stories={tops} href="top" isLoading={topLoading} />
        </div>
        <div className="col-sm-4 mb-3">
          <RecentBox stories={shows} href="show" isLoading={showsLoading} />
        </div>
        <div className="col-sm-4 mb-3">
          <RecentBox stories={jobs} href="job" isLoading={jobsLoading} />
        </div>
      </div>
    </>
  );
}

export default withTransition(Home);
