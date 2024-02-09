import React from "react";
import { Stories } from "@/pages/api/types";
import Link from "next/link";

export default function Stories({ stories, page, limit, type }) {
  return (
    <>
      <h1 className="mt-5 mb-5">{`${type?.slice(0,1).toUpperCase()}${type?.slice(1)}`} Strories</h1>
      <ul>
        {stories.map(({ id, title, url }) => (
          <li key={id}>
            {url ? (
              <Link href={url}>
                <h5 key={id}>{title}</h5>
              </Link>
            ) : (
                <h5 key={id}>{title}</h5>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
