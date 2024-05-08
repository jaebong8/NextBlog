import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
const Category = ({ categories, selected, onClick }: Props) => {
  return (
    <section className="p-4 text-center">
      <p className="mb-2 border-b text-bold border-b-teal-400">Category</p>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`cursor-pointer hover:text-emerald-300 ${
              category === selected && "text-sky-600"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
