import { getCollection } from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const postsCollection = await getCollection("posts");
  const posts = await postsCollection?.find().sort({ $natural: -1 }).toArray();

  if (posts) {
    return (
      <div className="grid grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post._id.toString()}
            className="border border-slate-400 border-dashed p-4 rounded-md h-full"
          >
            <p className="text-slate-600 text-xs">
              {post._id.getTimestamp().toLocaleString()}
            </p>
            <Link href="" className="block text-xl font-semibold mb-4">
              {post.title}
            </Link>
            <p className="text-sm">{post.content}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return <p>Failed to fetch the data from database.</p>;
  }
}
