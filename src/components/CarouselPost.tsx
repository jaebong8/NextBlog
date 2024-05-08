"use client";
import Image from "next/image";
import React from "react";
import { PostType } from "@/app/types/ts";
import { useRouter } from "next/navigation";

export default function CarouselPost({ post }: { post: PostType }) {
  const router = useRouter();
  return (
    <article
      key={post.id}
      className="relative flex flex-col shadow-md h-[300px]"
    >
      <div
        className="relative w-full cursor-pointer h-3/4"
        onClick={() => {
          router.push(`/posts/${post.id}`);
        }}
      >
        <Image src={`/images/${post.id}.png`} alt="post" fill priority></Image>
      </div>

      <div className="p-2 text-center">
        <p className="text-xs text-right text-slate-400">{post.createdAt}</p>
        <p className="text-sm font-bold">{post.title}</p>
        <p className="text-xs">{post.desc}</p>
        <span className="px-2 py-1 text-xs bg-green-300 rounded-2xl">
          {post.tag}
        </span>
      </div>
    </article>
  );
}
