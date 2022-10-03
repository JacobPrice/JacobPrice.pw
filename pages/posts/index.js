import PostList from "../../components/PostList";
import { getPosts } from "../../utils/wordpress";

export default function Blog({ posts }) {
  const jsxPosts = posts.map((post) => {
    return <PostList post={post} key={post.id} />;
  });
  return (
    <div className="flex flex-col mt-10 layout">
      <h1 className="text-4xl pb-1">Blog</h1>
      <div className="h-1 w-auto bg-gradient-to-r from-teal-300 to-teal-50"></div>
      {jsxPosts}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
