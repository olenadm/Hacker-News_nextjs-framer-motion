import React from "react";
import { Stories } from "@/pages/api/types";
import Link from "next/link";

export default function Stories({ stories, type }) {
  return (
    <>
      <h1 className="mb-4 mt-lg-5 mb-lg-5">{type} Strories</h1>
      <div className="row">
        {stories.map(({ id, title, url }, index: number) => (
          <div className="col-sm-6" key={id}>
            <div className="story">
              {url ? (
                <Link href={url}>
                  <h5 key={id}> {title}</h5>
                </Link>
              ) : (
                <h5 key={id}>{title}</h5>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
