import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <div className="flex justify-center flex-col items-center pt-[20px]">
      <Image
        src="images/undraw_drink_coffee_v0k6.svg"
        alt="avatar"
        width={150}
        height={150}
        priority
      />
      <div className="text-center">
        <h2 className="text-2xl font-bold">Hi, Im Jaehyun</h2>
        <p>Front Engineer</p>
        <p className="text-sm">꿈을 코딩하자</p>
      </div>
      <Link href="/contact" className="px-4 py-1 bg-amber-500 rounded-xl">
        Contact Me
      </Link>
    </div>
  );
}
