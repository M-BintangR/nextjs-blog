import { updatePost } from "@/actions/posts";
import BlogForm from "@/app/components/BlogForm";
import { getCollection } from "@/lib/db";
import getAuthUser from "@/lib/getAuthUser";
import { ObjectId } from "mongodb";
import { redirect } from "next/dist/server/api-utils";
import React, { use } from "react";

export default async function Edit({ params }) {
  const { id } = params;

  // get the auth cookies
  const user = getAuthUser();

  const postCollection = await getCollection("posts");
  let post;
  if (id.length === 24 && postCollection) {
    post = await postCollection.findOne({
      _id: ObjectId.createFromHexString(id),
    });
    post = JSON.parse(JSON.stringify(post));
    if (user.userId !== post.userId) return redirect("/");
  } else {
    post = null;
  }

  return (
    <div className="container w-1/2">
      <h1 className="title">Edit your post</h1>
      {post ? (
        <BlogForm handler={updatePost} post={post} />
      ) : (
        <p>Failed to fetch the data.</p>
      )}
    </div>
  );
}
