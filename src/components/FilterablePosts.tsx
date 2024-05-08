"use client";
import { PostType } from "@/app/types/ts";
import React, { useState } from "react";
import GridTemplate from "@/components/GridTemplate";
import Post from "@/components/Post";
import Category from "./Category";

const ALL_POST = "All Posts";
const FilterablePosts = ({
  posts,
  categories,
}: {
  posts: PostType[];
  categories: string[];
}) => {
  const [selected, setSelected] = useState(ALL_POST);
  const filtered =
    selected === ALL_POST
      ? posts
      : posts.filter((post) => post.tag === selected);
  return (
    <section className="flex p-4">
      <GridTemplate>
        {filtered.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </GridTemplate>
      <Category
        categories={[ALL_POST, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
};

export default FilterablePosts;
