import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "~/const/router"; // Import the routes

import Meta from "~/components/MetaSeo";

export default function Home() {
  useEffect(() => {
    console.log("Contact page", routes);
  }, []);
  const dataSeo = {
    title: "Home page",
    type: "website",
    description: "Home page",
    url: "https://nextjs.org",
    keywords: "nextjs, seo, seo, seo",
    domain: "https://nextjs.org",
  };

  return (
    <>
      <Meta props={{ ...dataSeo }} />
      <main>
        <h1 className="flex text-3xl font-bold">Homae 111</h1>
      </main>
    </>
  );
}
