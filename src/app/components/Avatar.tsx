import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
    return (
        <div className="flex justify-center flex-col items-center">
            <Image src="images/undraw_drink_coffee_v0k6.svg" alt="avatar" width={150} height={150} />
            <div className="text-center">
                <h2 className="text-2xl font-bold">Hi, I'm Jaehyun</h2>
                <p>Front Engineer</p>
                <p className="text-sm">꿈을 코딩하는 드림코더</p>
            </div>
            <Link href="/contact" className="bg-amber-500 py-1 px-4 rounded-xl">
                Contact Me
            </Link>
        </div>
    );
}
