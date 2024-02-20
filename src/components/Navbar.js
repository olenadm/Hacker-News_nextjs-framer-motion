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
        
          <div>
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" href="/top">
                  <Award size={16} /> <span>Top Stories</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/show" className="nav-link">
                  <Coffee size={16} /> <span>Show Stories</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/job" className="nav-link">
                  <Slack size={16} /> <span>Job Stories</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
