import Avatar from "@/components/Avatar";
import { getPosts } from "./service/posts";
import Post from "@/components/Post";
import Carousels from "@/components/Carousels";

export default async function Home() {
    const postList = await getPosts();

    return (
        <>
            <Avatar />
            <section className="mt-4 px-20">
                <p className="font-bold text-lg">Featured Posts</p>
                <div className="grid grid-cols-3 auto-rows-[minmax(50vh,1fr)] gap-4">
                    {postList.map((post) => {
                        return <Post post={post} key={post.id} />
                    })}
                </div>
            </section>
            <section className="px-20 py-20">
                <p className="font-bold text-lg">You may like</p>
                <div className="relative">
                    <Carousels postList={postList} />
                </div>
            </section>
        </>
    );
}
