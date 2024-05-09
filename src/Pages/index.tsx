import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Meta from "~/components/MetaSeo";

export default function HomePage() {
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
        <h1 className="flex text-3xl font-bold">Homae 111</h1>
    </>
  );
}
