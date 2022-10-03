// /components/PostList.js
import Link from "next/link";
import { getDate, removeHTMLTags } from "../utils/utils";

export default function PostList({ post }) {
  return (
    <article className="flex flex-col mt-5 md:flex-row">
      <p className="pt-2 pl-2 w-32">{getDate(post.date)}</p>
      <div className="md:mx-5">
        <Link href={`/posts/${post.slug}`}>
          <a className="group transition-colors block hover:bg-teal-50 rounded-md p-2">
            <h2 className="text-xl font-bold group-hover:text-teal-900 capitalize">
              {post.title.rendered}
            </h2>
            <div className="max-w-2xl">
              <p className="text-zinc-400 group-hover:text-teal-700">
                {removeHTMLTags(post.excerpt.rendered)}
              </p>
              <p className="transition colors text-teal-300 group-hover:text-teal-700">
                Read More →
              </p>
            </div>
          </a>
        </Link>
      </div>
    </article>
  );
}
