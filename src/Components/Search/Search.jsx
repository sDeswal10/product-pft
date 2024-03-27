import React, { useState } from "react";

const Search = ({data}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredItems = data?.filter(data =>
    data?.articleName?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );
  console.log(data)
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return (
    <>
    
    <input
      type="text"
      placeholder="Search...."
      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 my-8 px-4 py-2"
      value={searchQuery}
      onChange={handleSearchChange}
    />
    <ul>
        {filteredItems?.map((item)=>(
            <li>{item?.articleName}</li>
        ))}
    </ul>
    </>
  );
};

export default Search;
