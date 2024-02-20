import React from "react";
import { Stories } from "@/pages/api/types";
import Link from "next/link";
import { Slack } from "react-feather";

export default function Stories({ stories, type }) {
  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col-lg-2 d-none d-lg-block">
          <Slack size={100} className="App-logo" />
        </div>
        <div className="col-lg-10">
          {" "}
          <h1 className="my-4">{type} Strories</h1>
        </div>
      </div>

      <div className="row">
        {stories.map(
          ({ id, title, url, score, descendants, by }, index: number) => (
            <div className="col-sm-6" key={id}>
              <div className="story d-flex  flex-row">
                <div className="me-3 score">{score}</div>
                <div className="description">
                  {url ? (
                    <>
                      <Link href={url}>
                        <h5 key={id}> {title}</h5>
                      </Link>
                      <span className="small">
                        Published by {by}{" "}
                        {descendants
                          ? ` / ${descendants} comments`
                          : " / No comments yet"}
                      </span>
                    </>
                  ) : (
                    <h5 key={id}>{title}</h5>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
