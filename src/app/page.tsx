import Avatar from "./components/Avatar";

import fs from "fs";
import Markdown from "./components/Markdown";

export default function Home() {
    const fileContent = fs.readFileSync("data/markdowns/1.md", "utf-8");

    return (
        <main>
            <Avatar />
            <section className="mt-4 px-8">
                <p>Featured Posts</p>
                <div>
                    <Markdown file={fileContent} />
                </div>
            </section>
        </main>
    );
}
