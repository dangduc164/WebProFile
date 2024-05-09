import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import type { AppProps } from "next/app";
import "~/assets/styles/globals.css";

const useRouterScroll = ({
  behavior = "smooth" as ScrollBehavior,
  left = 0,
  top = 0,
} = {}) => {
  const router = useRouter();
  useEffect(() => {
    // Scroll to given coordinates when router finishes navigating
    // This fixes an inconsistent behaviour between `<Link/>` and `next/router`
    // See https://github.com/vercel/next.js/issues/3249
    const handleRouteChangeComplete = () => {
      window.scrollTo({ top, left, behavior });
      document.body.scrollTop = top;
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // If the component is unmounted, unsubscribe from the event
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
