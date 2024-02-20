import React from "react";
import { Stories } from "@/pages/api/types";
import Link from "next/link";

export default function Stories({ stories,  type }) {
  return (
    <>
      <h1 className="mb-4 mt-lg-5 mb-lg-5">{type} Strories</h1>
      <ol>
        {stories.map(({ id, title, url }) => (
          <li key={id}>
            {url ? (
              <Link href={url}>
                <h5 key={id}>{id} {title}</h5>
              </Link>
            ) : (
              <h5 key={id}>{title}</h5>
            )}
          </li>
        ))}
      </ol>
      
    </>
  );
}
