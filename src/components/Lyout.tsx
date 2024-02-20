import React from "react";
import Head from "next/head";
import { Mulish } from "next/font/google";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const mulish = Mulish({ subsets: ["latin"] });

export default function Lyout(props: any) {
  const [type, setType] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const typeQ = router.query.type;
      if (typeQ) {
        setType((old) => typeQ.toString());
      } else {
        setType("");
      }
    }
  }, [router.isReady, router.query.type]);


  return (
    <>
      <Head>
        <title>Hacker News</title>
        <meta name="description" content="Hacker News  -  Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${mulish.className} vh-100 py-5 ${type}`}>
        <Navbar />
        <div className="container py-5">{props.children}</div>
      </main>
    </>
  );
}
