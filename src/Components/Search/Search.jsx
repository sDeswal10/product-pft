import React, { useState } from "react";
import { itemsList } from "../../Data/ItemsList";
import ItemCard from "../ItemCard/ItemCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    
    const result = [];

    itemsList.forEach(parent => {
      parent.items.forEach(child => {
        if (child.articleName.toLowerCase().includes(searchQuery)) {
          result.push({ parent, child });
        }
      });
    });
    setFiltered(result);

  };
  return (
    <>
    
    <input
      type="text"
      placeholder="Search...."
      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 my-8 px-4 py-2 w-96"
      value={searchQuery}
      onChange={handleSearchChange}
    />
      <div className="flex flex-row flex-wrap gap-10 mb-20">
      {filtered?.map((item)=>(
            <ItemCard articleImage={item.child.articleImage} articleName={item.child.articleName} articleDescription={item.child.articleDescription} articleBrand={item.child.articleBrand} articleNo={item.child.articleNo} articleQuantity={item.child.articleQuantity}/>
        ))}

      </div>
        
    </>
  );
        }

export default Search;
