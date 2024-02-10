import withTransition from "@/Hoc/withTransitions";
import { ArrowRightCircle, Meh, Slack } from "react-feather";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllDetails } from "@/pages/api/hello";
import Stories from "@/components/Stories";
import { useRouter } from "next/router";
import Link from "next/link";

function Services() {
  const router = useRouter();
  //const pn = usePathname().slice(1);
  const [story, setStory] = useState([]);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const PER_PAGE = 10;

  useEffect(() => {
    async function fetchMyAPI() {
      if (router.isReady) {
        const type = router.query.type.toString();

        try {
          const stories = await getAllDetails(type, 0, PER_PAGE);
          setStory((old) => stories);
          setType((old) => type);
          setLoading(false);
          setError(false);
        } catch (error) {
          setLoading(true);
          setError(true);
        }
      }
    }
    fetchMyAPI();
  }, [router.isReady]);

  return (
    <>
      {loading && <h2 className="my-5">Loading ... <ArrowRightCircle /></h2>}
      {error && <div><h2 className="my-5">Opps ... <Meh /> </h2><Link href="/">Let's go back...</Link></div>}
      {(!loading || !error) && (
        <div className="row">
          <div className="col-sm-2">
            <Slack size={120} className="mt-5 App-logo" />
          </div>
          <div className="col-sm-10 position-relative">
            <Stories stories={story} type={type} page={0} limit={PER_PAGE} />

            <a href="#" className="more d-inline-block">
              <span>More</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default withTransition(Services);
