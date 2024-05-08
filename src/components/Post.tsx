"use client";
import Image from "next/image";
import React from "react";
import { PostType } from "@/app/types/ts";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Post({ post }: { post: PostType }) {
  const router = useRouter();
  return (
    <article
      key={post.id}
      className="flex flex-col shadow-md rounded-b-xl hover:opacity-80"
    >
      <Link href={`/posts/${post.id}`}>
        <div className="relative w-full cursor-pointer">
          <Image
            src={`/images/${post.id}.png`}
            alt="post"
            width={300}
            height={200}
            className="w-full rounded-t-xl"
            priority
          ></Image>
        </div>

        <div className="p-2 text-center">
          <p className="text-sm text-right text-slate-400">{post.createdAt}</p>
          <p className="text-lg font-bold">{post.title}</p>
          <p className="text-sm">{post.desc}</p>
          <span className="px-2 py-1 text-sm bg-green-300 rounded-2xl">
            {post.tag}
          </span>
        </div>
      </Link>
    </article>
  );
}
