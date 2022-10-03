// /posts/[slug].js

import Link from "next/link";

import { getPost, getSlugs } from "../../utils/wordpress";

export default function PostPage({ post }) {
  return (
    <div className="post-style layout mt-10">
      <h1 className="text-3xl text-white capitalize">{post.title.rendered}</h1>
      <div className="h-1 w-auto bg-gradient-to-r from-teal-300 to-teal-50"></div>
      <div
        className="mt-2 prose prose-invert max-w-none p-2 rounded-xl"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
    </div>
  );
}

//return the paths to Next
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
