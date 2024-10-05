import { ImSearch } from "react-icons/im";

import { createQueryObject } from "../helper";

export const SearchBox = ({ search, setSearch, setQuery }) => {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className="ml-3 mt-7 mb-5 items-end flex">
      <input
        className="border-2 border-dashed border-[#fe5d42] w-[250px] text-[1rem] text-[#fe5d42] outline-none rounded-[10px] p-2 mr-2"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button
        onClick={searchHandler}
        className="bg-[#fd5e42] p-3.5 rounded-[10px] text-lg text-[#fff] border-none cursor-pointer "
      >
        <ImSearch />
      </button>
    </div>
  );
};
