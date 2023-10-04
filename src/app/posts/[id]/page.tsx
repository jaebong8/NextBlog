import { getPost } from "@/app/service/posts";
import React from "react";
import fs from "fs";
import Markdown from "@/components/Markdown";
import Image from "next/image";
import { AiFillCalendar } from "react-icons/ai";
import MeowArticle from "@/components/MeowArticle";

export const revalidate = 3;  // ISR : 3초마다 리렌더링

export default async function PostDetailPage({ params }: { params: { id: string } }) {
    const post = await getPost(params.id);
    const fileContent = fs.readFileSync(`data/markdowns/${params.id}.md`, "utf-8");
    // const res = await fetch('https://meowfacts.herokuapp.com',{
    //     next: {revalidate:10}, // ISR 설정
    //     // cache:"no-store" SSR과 같음
        
    // });
    // const data = await res.json();
    // const factText = data.data[0]
    return (
        <section className="py-10 px-20">
           <MeowArticle />
            <div className="bg-stone-100 rounded-xl">
                <div className="w-full relative h-96">
                    <Image src={`/images/${post?.image}`} alt={`${post?.title}`} fill className="rounded-t-lg" />
                </div>
                <div className="p-2">
                    <p className="flex gap-2 flex-end justify-end text-sm text-cyan-500">
                        <AiFillCalendar />
                        {post?.createdAt}
                    </p>
                    <p className="text-3xl font-bold">{post?.title}</p>
                    <p className="font-bold">{post?.desc}</p>
                    <div className="w-1/5 h-1 bg-sky-500 my-4"></div>
                    <Markdown file={fileContent} />
                </div>
            </div>
            
        </section>
    );
}



// SSG rendering
export function generateStaticParams() {
    const posts = ["1","2","3"];
    return posts.map((post)=>({
        id: post
    }))
}
