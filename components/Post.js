// /components/Post.js

import Link from 'next/link';

export default function Post({ post}) {
  return (
          <Link href={`/posts/${post.slug}`}>
            <a>
                {post.title.rendered}
            </a>
          </Link>
  );
}