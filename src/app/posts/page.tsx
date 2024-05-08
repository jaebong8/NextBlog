import React from "react";
import { getPosts } from "../service/posts";
import FilterablePosts from "@/components/FilterablePosts";

export default async function PostsPage() {
  const postList = await getPosts();
  const categories = [...new Set(postList.map((post) => post.tag))];

  return <FilterablePosts posts={postList} categories={categories} />;
}
