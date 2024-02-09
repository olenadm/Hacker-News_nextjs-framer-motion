import withTransition from "@/Hoc/withTransitions";
import { Slack } from "react-feather";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllDetails } from "@/pages/api/hello";
import Stories from "@/components/Stories";
import { useRouter } from "next/router";

function Services() {
  const router = useRouter();
  //const pn = usePathname().slice(1);
  const [story, setStory] = useState([]);
  const [type, setType] = useState("");
  const PER_PAGE = 10;

  useEffect(() => {
    async function fetchMyAPI() {
      if (router.isReady) {
        const type = router.query.type.toString();

        const stories = await getAllDetails(type, 0, PER_PAGE);

        setStory((old) => stories);
        setType((old) => type);
      }
    }
    fetchMyAPI();
  }, [router.isReady]);

  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <Slack size={120} className="mt-5 App-logo" />
        </div>
        <div className="col-sm-10 position-relative">
          <Stories
            stories={story}
            type={type}
            page={0}
            limit={PER_PAGE} /*isLoading={topLoading}*/
          />

          <a href="#" className="more d-inline-block">
            <span>More</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default withTransition(Services);
