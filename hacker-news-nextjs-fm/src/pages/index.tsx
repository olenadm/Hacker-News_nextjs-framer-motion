import withTransition from "@/Hoc/withTransitions";

function Home() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 position-relative">
          <h1 className="mt-5 mb-5">Recent Stories</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="animated card">
            <div className="card-body">
              <h3 className="mb-4">Top Strories</h3>

              <a href="#" className="more d-inline-block">
                <span>More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card white-border">
            <div className="card-body">
              <h3 className="mb-4">Show Strories</h3>

              <a href="#" className="more d-inline-block">
                <span>More</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
        <div className="animated card">
            <div className="card-body">
              <h3 className="mb-4">Job Strories</h3>

              <a href="#" className="more d-inline-block">
                <span>More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTransition(Home);
