import withTransition from "@/Hoc/withTransitions";
import { Slack } from "react-feather";

function Services() {
  return (
    <>
      <div className="row">
        <div className="col-sm-4"><Slack size={200} className="mt-5 App-logo"/></div>
        <div className="col-sm-8 position-relative">
          <h1 className="mt-5 mb-5">Job Stories</h1>

          <h3 className="mb-4">Lorem Ipsum</h3>

            <a href="#" className="more d-inline-block">
              <span>More</span>
            </a>
         
        </div>
      </div>
    </>
  );
}

export default withTransition(Services);