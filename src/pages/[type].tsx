import withTransition from "@/Hoc/withTransitions";
import { ArrowRightCircle, Meh, Slack } from "react-feather";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllDetails, getdataLength } from "@/pages/api/hello";
import Stories from "@/components/Stories";
import { useRouter } from "next/router";
import Link from "next/link";
import Pagination from "@/components/Pagination";

function Services() {
  const router = useRouter();
  const [story, setStory] = useState([]);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalStories, setTotalStories] = useState(null);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      if (router.isReady) {
        const type = router.query.type.toString();

        try {
          const totalStories = await getdataLength(type);
          const stories = await getAllDetails(type, currentPage, PER_PAGE);
          setStory((old) => stories);
          setType((old) => type);
          setLoading(false);
          setError(false);
          setTotalStories(totalStories);
          setTotalPages((old) => Math.ceil(totalStories / PER_PAGE));
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }
    }
    fetchMyAPI();
  }, [router.isReady, currentPage, totalStories, router.query.type]);

  return (
    <>
      {loading && (
        <h2 className="my-5">
          Loading ... <ArrowRightCircle />
        </h2>
      )}
      {error && (
        <div>
          <h2 className="my-5">
            Opps ... <Meh />{" "}
          </h2>
          <Link href="/">Let&apos;s go back...</Link>
        </div>
      )}

      {!loading && !error && (
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block">
            <Slack size={120} className="mt-5 App-logo" />
          </div>
          <div className="col-lg-10 position-relative">
            <Stories stories={story} type={type} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              previous={handlePageChange}
              next={handlePageChange}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default withTransition(Services);
