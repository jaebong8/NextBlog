import React from "react";
import Avatar from "../components/Avatar";

export default function AboutPage() {
    return (
        <>
            <Avatar />
            <section className="p-20 pt-4">
                <div className="bg-stone-200 flex flex-col items-center py-4">
                    <div className="text-center">
                        <p className="font-bold text-xl mb-2">Who am I</p>
                        <p>개발을 사랑하는 프론트엔드 개발자</p>
                        <p>최신 기술에 관심이 많음</p>
                    </div>
                    <div className="text-center mt-2">
                        <p className="font-bold text-xl mb-2">Career</p>
                        <p>CEO(NOW)</p>
                        <p>CBA회사(~2022)</p>
                        <p>ABC회사(~2015)</p>
                    </div>
                    <div className="text-center mt-2">
                        <p className="font-bold text-xl mb-2">Who am I</p>
                        <p>개발을 사랑하는 프론트엔드 개발자</p>
                        <p>최신 기술에 관심이 많음</p>
                    </div>
                </div>
            </section>
        </>
    );
}
