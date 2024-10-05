import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helper";

import { categories } from "../constants/categories";

export const Sidebar = ({ query, setQuery, setSearch }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();

    if (tagName != "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
    setSearch("");
  };
  console.log(query);
  return (
    <div className=" bg-[#fff] border-2 border-dashed border-[#fd5e42] rounded-[20px] h-fit mt-2 ml-7 w-[220px] p-4 ">
      <div className="flex gap-1 items-center pb-2 text-[#fd5e42] font-semibold ">
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler} className="cursor-pointer ">
        {categories.map(({ id, type }) => (
          <li
            key={id}
            className={` hover:text-[#fe5d42] mb-1 p-0.5 ${
              type.toLocaleLowerCase() === query.category
                ? "bg-[#df8979ac] text-[#fff] rounded-lg  "
                : null
            }`}
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};
