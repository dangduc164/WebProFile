import React from "react";
import Head from "next/head";
import MetaSeo from "~/components/MetaSeo";
import { Inter } from "next/font/google";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

const dataSeo = {
  title: "ProFiles",
  description: "Nguyen Dang Duc",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MetaSeo props={{ ...dataSeo }} />
      <div
        className={`min-h-screen flex flex-col bg-[#e2e8f0] *:text-[#222] *:font-normal *:text-base ${inter.className}`}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
