//index.js

import Head from 'next/head';

import { getPosts } from '../utils/wordpress';

import Post from '../components/Post';

export default function Home({ posts }) {
  const jsxPosts = posts.map((post) => {
    return <Post post={post} key={post.id} />;
  });
  return (
  <>
  {jsxPosts}
  </>
  )

}

// NextJS function to return props needed to render the page content.
export async function getStaticProps({params}) {
  const posts = await getPosts();
  return {
    props: {
      posts
    }, // will be passed to the page component as props
    revalidate: 10,
  }
}
