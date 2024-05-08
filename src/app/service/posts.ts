import { PostType } from "./../types/ts";
import path from "path";
import { promises as fs } from "fs";

export const getPosts = async (): Promise<PostType[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
};

export const getPost = async (id: string) => {
  const posts = await getPosts();
  const post = posts.find((item) => item.id === Number(id));
  if (!post) {
    throw new Error("포스트를 찾을 수 없음");
  }

  const index = posts.indexOf(post);
  const next = index < posts.length - 1 ? posts[index + 1] : null;
  const prev = index > 0 ? posts[index - 1] : null;
  return {
    ...post,
    next,
    prev,
  };
};
