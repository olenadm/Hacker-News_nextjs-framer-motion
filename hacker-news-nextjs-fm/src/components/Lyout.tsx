import React from "react";
import Head from "next/head";
import { Mulish } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./Navbar";
import {  usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const mulish = Mulish({ subsets: ["latin"] });

export default function Lyout(props: any) {
  const [type, setType] = useState("o")
    //const path = usePathname().slice(1);
    const router = useRouter();
    useEffect(()=> {
      if (router.isReady) {
        const typeQ = router.query.type;
        if (typeQ) {
          setType(old => typeQ.toString());
        } else {
          setType("");
        }
       
      }
    }, [router.isReady, router.query.type]);
  
    //const type = router.query.type;

  return (
    <>
      <Head>
        <title>Hacker News</title>
        <meta name="description" content="Hacker News  -  Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${mulish.className}  py-5 ${type}`}>
        <Navbar />
        <div className="container py-5">{props.children}</div>
      </main>
    </>
  );
}
