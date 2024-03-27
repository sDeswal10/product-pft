import React from "react";

const ItemCard = ({
  articleImage,
  articleName,
  articleNo,
  articleDescription,
  articleBrand,
  articleQuantity,
}) => {
  return (
    <div className="flex flex-col border border-gray-200 p-5 shadow-lg w-80">
      <div className="w-70 h-64">
        <img
          src={articleImage}
          alt={articleName}
          className="w-full h-full object-fit rounded"
        />
      </div>
      <div className="flex flex-col mt-3">
        <span className="text-center font-bold text-sm">
          ({articleNo}). {articleName}
        </span>
        <span className="text-sm">
          Brands Available:<span className="font-bold"> {articleBrand} </span>
        </span>
        <span className="text-sm">
          Alternate Names:{" "}
          <span className="font-bold"> {articleDescription} </span>
        </span>
        <span className="text-sm">
          Quantity Available:{" "}
          <span className="font-bold">
            {articleQuantity?.map((qt)=>{
              return(
                <li>{qt}</li>
              )
            })}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
