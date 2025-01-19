import PostCard from "@/app/components/PostCard";
import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
import React from "react";

export default async function Show({ params }) {
  const { id } = params;

  const postCollection = await getCollection("posts");
  const post =
    id.length == 24
      ? await postCollection?.findOne({
          _id: ObjectId.createFromHexString(id),
        })
      : null;

  return (
    <div className="container w-1/2">
      {post ? <PostCard post={post} /> : <p>Failed to fetch the data</p>}
    </div>
  );
}
