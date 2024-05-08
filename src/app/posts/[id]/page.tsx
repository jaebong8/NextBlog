import { getPost } from "@/app/service/posts";
import React from "react";
import fs from "fs";
import Markdown from "@/components/Markdown";
import Image from "next/image";
import { AiFillCalendar } from "react-icons/ai";
import MeowArticle from "@/components/MeowArticle";
import { redirect } from "next/navigation";
import { PostType } from "@/app/types/ts";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const revalidate = 3; // ISR : 3초마다 리렌더링

const ICON_CLASSNAME =
  "m-4 text-5xl text-yellow-300 group-hover:text-6xl transition-all";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

  const fileContent = fs.readFileSync(
    `data/markdowns/${params.id}.md`,
    "utf-8"
  );
  if (!post) {
    redirect("/posts");
  }
  // const res = await fetch('https://meowfacts.herokuapp.com',{
  //     next: {revalidate:10}, // ISR 설정
  //     // cache:"no-store" SSR과 같음

  // });
  // const data = await res.json();
  // const factText = data.data[0]
  return (
    <section className="px-20 py-10">
      <MeowArticle />
      <div className="bg-stone-100 rounded-xl">
        <div className="relative w-full h-96">
          <Image
            src={`/images/${post?.image}`}
            alt={`${post?.title}`}
            fill
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <p className="flex justify-end gap-2 text-sm flex-end text-cyan-500">
            <AiFillCalendar />
            {post?.createdAt}
          </p>
          <p className="text-3xl font-bold">{post?.title}</p>
          <p className="font-bold">{post?.desc}</p>
          <div className="w-1/5 h-1 my-4 bg-sky-500"></div>
          <Markdown file={fileContent} />
        </div>
      </div>
      <section className="flex shadow-md">
        {post.prev && <AdjacentPostCard post={post.prev} type="prev" />}
        {post.next && <AdjacentPostCard post={post.next} type="next" />}
      </section>
    </section>
  );
}
const AdjacentPostCard = ({
  post,
  type,
}: {
  post: PostType;
  type: "next" | "prev";
}) => {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="relative w-full bg-black max-h-56"
    >
      <Image
        src={`/images/${post.image}`}
        alt={`${post.title}`}
        width={150}
        height={100}
        className="w-full h-full opacity-40"
      />
      <div className="absolute flex justify-around w-full px-8 text-white -translate-x-1/2 -translate-y-1/2 group top-1/2 left-1/2">
        {type === "prev" && <FaArrowLeft className={ICON_CLASSNAME} />}
        <div className="w-full text-center">
          <h3 className="font-bold ">{post.title}</h3>
          <p>{post.desc}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASSNAME} />}
      </div>
    </Link>
  );
};
// SSG rendering
export function generateStaticParams() {
  const posts = ["1", "2", "3"];
  return posts.map((post) => ({
    id: post,
  }));
}
