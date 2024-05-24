import Head from "next/head";
import React from "react";

export default function MetaSeo({props}) {
  let { url, type, title, description, image, domain, card, keywords } = props;

  // set defaults
  if (!url) {
    url = "";
  }
  if (!type) {
    type = "website";
  }
  if (!title) {
    title = "";
  }
  if (!description) {
    description = "";
  }
  if (!image) {
    image = "";
  }
  if (!domain) {
    domain = "";
  }
  if (!card) {
    card = "summary_large_image";
  }
  if (!keywords) {
    keywords = "";
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="news_keywords" content={keywords} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="keywords" content={keywords} />
        <meta name="twitter:card" content={card} />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
    </>
  );
}
