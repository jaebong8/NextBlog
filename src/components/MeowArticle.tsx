'use client'

import { useEffect, useState } from "react";

export default function MeowArticle() {
    const [text,setText] = useState();

    useEffect(() => {
        fetch('https://meowfacts.herokuapp.com').then(res=>res.json()).then(data=>setText(data.data[0]));
    }, [])
  return (
    <article className="p-4 bg-gray-200 mb-4">{text}</article>
  )
}
 