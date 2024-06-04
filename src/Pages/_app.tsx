import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import type { AppProps } from "next/app";
import "~/assets/styles/globals.css";
import "~/assets/styles/loading.css";

const useRouterScroll = ({
  behavior = "smooth" as ScrollBehavior,
  left = 0,
  top = 0,
} = {}) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      window.scrollTo({ top, left, behavior });
      document.body.scrollTop = top;
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [behavior, left, top]);
};

export default function App({ Component, pageProps }: AppProps) {
  useRouterScroll();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
