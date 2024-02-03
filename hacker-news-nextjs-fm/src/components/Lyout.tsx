import React from "react";
import Head from "next/head";
import { Mulish } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./Navbar";
import {  usePathname } from "next/navigation";

const mulish = Mulish({ subsets: ["latin"] });

export default function Lyout(props: any) {
    const path = usePathname().slice(1);

  return (
    <>
      <Head>
        <title>Hacker News</title>
        <meta name="description" content="Hacker News  -  Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${mulish.className}  py-5 ${path}`}>
        <Navbar />
        <div className="container py-5">{props.children}</div>
      </main>
    </>
  );
}
