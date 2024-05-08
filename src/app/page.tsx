import Avatar from "@/components/Avatar";
import { getPosts } from "./service/posts";
import Post from "@/components/Post";
import Carousels from "@/components/Carousels";
import GridTemplate from "@/components/GridTemplate";

export default async function Home() {
  const postList = await getPosts();

  return (
    <>
      <Avatar />
      <section className="px-20 mt-4">
        <p className="text-lg font-bold">Featured Posts</p>
        <GridTemplate>
          {postList.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </GridTemplate>
      </section>
      <section className="px-20 py-20">
        <p className="text-lg font-bold">You may like</p>
        <div className="relative">
          <Carousels postList={postList} />
        </div>
      </section>
    </>
  );
}
