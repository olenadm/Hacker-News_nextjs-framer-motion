import withTransition from "@/Hoc/withTransitions";
import { ArrowRightCircle, Meh, Slack } from "react-feather";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllDetails, getdataLength } from "@/pages/api/hello";
import Stories from "@/components/Stories";
import { useRouter } from "next/router";
import Link from "next/link";

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

          console.log(
            `Current page ${currentPage} total stories ${totalStories} total pages - ${totalPages}`
          );
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }
    }
    fetchMyAPI();
  }, [router.isReady, currentPage, totalStories]);

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
          <Link href="/">Let's go back...</Link>
        </div>
      )}

      {!loading && !error && (
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block">
            <Slack size={120} className="mt-5 App-logo" />
          </div>
          <div className="col-lg-10 position-relative">
            <Stories stories={story} type={type} page={0} limit={PER_PAGE} />

            <div className="my-3">
              <button
                onClick={() =>
                  handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
                className="more d-inline-block mt-3 me-2"
              >
                <span>Previous</span>
              </button>
              <span>
                Page {currentPage + 1} of {totalPages}
              </span>

              <button
                onClick={() =>
                  handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages-1}
                className="more d-inline-block ms-2 mt-3"
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default withTransition(Services);
