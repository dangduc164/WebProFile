import React from "react";
import Head from "next/head";
import MetaSeo from "~/components/MetaSeo";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


const dataSeo = {
  title: "ProFiles",
  description: "Nguyen Dang Duc",
};

export default function Layout({ children }: { children: React.ReactNode, }) {

  return (
    <>
       <MetaSeo props={{ ...dataSeo }} />
      <div className={`min-h-screen bg-[#e2e8f0] *:text-[#222] ${inter.className}`}>{children}</div>
    </>
  );
} 
