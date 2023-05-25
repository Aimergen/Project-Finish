import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./Footer";
import Spinner from "./Spinner";
import Head from "next/head";
import ScrollTopButton from "./ScrollTopButton";

export default function Layout({
  children,
  title = "E-Commerce",
  description = "description",
}: {
  children: any;
  title: any;
  description: any;
}) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta name="og:url" content="seo-demo-three.vercel.app" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        {/* <meta name="og:image" content={image} /> */}
      </Head>
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 sm:px-3 lg:max-w-7xl lg:px-8">
        {children}
      </div>
      <ScrollTopButton />

      <Footer />
    </>
  );
}
