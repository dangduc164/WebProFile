import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
        <Head>
          <title>About page</title>
        </Head>

        <main>
          <h1 className="flex text-3xl font-bold">About</h1>
        </main>
    </>
  );
}
