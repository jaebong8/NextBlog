"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { PostType } from "@/app/types/ts";
import CarouselPost from "./CarouselPost";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function Carousels({ postList }: { postList: PostType[] }) {
  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay
      autoPlaySpeed={1000}
      transitionDuration={1000}
      containerClass="carousel-container"
      className="relative h-auto "
    >
      {postList.map((post) => {
        return <CarouselPost post={post} key={post.id} />;
      })}
    </Carousel>
  );
}
