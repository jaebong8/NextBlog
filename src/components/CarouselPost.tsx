"use client";
import Image from "next/image";
import React from "react";
import { PostType } from "@/app/types/ts";
import { useRouter } from "next/navigation";

export default function CarouselPost({ post }: { post: PostType }) {
    const router = useRouter();
    return (
        <article key={post.id} className="flex flex-col shadow-md h-60 relative">
            <div
                className="relative w-full h-3/4 cursor-pointer"
                onClick={() => {
                    router.push(`/posts/${post.id}`);
                }}
            >
                <Image src={`/images/${post.id}.png`} alt="post" fill></Image>
            </div>

            <div className="p-2 text-center">
                <p className="text-right text-xs text-slate-400">{post.createdAt}</p>
                <p className="font-bold text-sm">{post.title}</p>
                <p className="text-xs">{post.desc}</p>
                <span className="bg-green-300 py-1 px-2 rounded-2xl text-xs">{post.tag}</span>
            </div>
        </article>
    );
}
