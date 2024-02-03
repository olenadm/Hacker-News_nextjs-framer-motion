import Link from "next/link";
import { Award, Coffee, Slack } from "react-feather";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="/">
            Y
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
              <li class="nav-item">
                <Link className="nav-link" href="/">
                  <Award size={16} /> Top Stories
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/show" className="nav-link">
                  <Coffee size={16} /> Show Stories
                </Link>
              </li>
              <li class="nav-item">
                <Link href="/job" className="nav-link">
                  <Slack size={16} /> Job Stories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
