import Link from "next/link";
import React from "react";
import { RecentBoxProps } from "@/pages/api/types";
import { ArrowRight } from "react-feather";

export default function RecentBox({
  stories,
  href,
}: /* isLoading,*/

RecentBoxProps) {
  return (
    <div className={`${href !== "show" ? "animated" : "white-border"} card h-100`}>
      <div className="card-body">
        <h3 className="mb-4">{href.toUpperCase()} Strories</h3>
        <ul>
          {stories.slice(0, 5).map(({ id, title, url }) => (
           
            <li key={id}>  
              { url? <Link href={url}>
                <h5 key={id}>{title}</h5>
              </Link> : title}
            </li>
          ))}
        </ul>

        <Link href={href} className="more d-inline-block mt-3">
          <span>
            More <ArrowRight size={15} />
          </span>
        </Link>
      </div>
    </div>
  );
}
