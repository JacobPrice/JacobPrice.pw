//index.js

import Head from "next/head";

import { getPosts } from "../utils/wordpress";
import Header from "../components/layout/Header";
import Particles from "../components/ParticlesAnimation";
import Hero from "../components/Hero";

import Post from "../components/Post";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jacob Price</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}

// NextJS function to return props needed to render the page content.
export async function getStaticProps({ params }) {
  const posts = await getPosts();
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
    revalidate: 10,
  };
}
