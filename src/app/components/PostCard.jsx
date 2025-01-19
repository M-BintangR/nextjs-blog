import Link from "next/link";
import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="border border-slate-400 border-dashed p-4 rounded-md h-full bg-white">
      <p className="text-slate-600 text-xs">
        {post._id.getTimestamp().toLocaleString()}
      </p>
      <Link
        href={`/post/show/${post._id}`}
        className="block text-xl font-semibold mb-4"
      >
        {post.title}
      </Link>
      <p className="text-sm">{post.content}</p>
    </div>
  );
}
