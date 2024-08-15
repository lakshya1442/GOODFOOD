
import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantCategory = (props) => {
  const { data, isOpen, setIsOpen } = props;
  const dispatch = useDispatch();

  // Toggle the open/close state
  const handleToggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  // Dispatch the addItems action with the selected item
  const handleAddItems = (element) => {
    dispatch(addItems(element));
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="my-2 bg-slate-100 w-[825px] rounded-lg p-4 flex justify-between cursor-pointer"
        onClick={handleToggleOpen}
      >
        <h2 className="text-lg font-bold">
          {data.title}({data.itemCards.length})
        </h2>
        <h2 className="text-lg">
          <span
            className={`material-symbols-outlined transform transition-transform duration-200 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
          >
            expand_more
          </span>
        </h2>
      </div>
      {isOpen &&
        data.itemCards.map((element) => (
          <div
            key={element.card.info.id}
            className="flex w-7/12 justify-between items-center mt-2 bg-slate-100 my-3 p-3 rounded-lg shadow-sm h-[150px] overflow-hidden"
          >
            <div className="cont2 flex flex-col justify-between h-full w-2/3 items-start">
              <h2 className="text-md font-semibold">
                {element.card.info.name} - ₹
                {Math.floor(element.card.info.price / 100) ||
                  Math.floor(element.card.info.defaultPrice / 100)}
              </h2>

              <h4 className="text-gray-600 text-sm text-start">
                {element.card.info.description}
              </h4>
            </div>
            <div className="ml-3 overflow-hidden relative">
              <button
                className="absolute bg-white text-black p-2 bottom-0 left-0 hover:bg-black hover:text-white"
                onClick={() => handleAddItems(element)}
              >
                Add +
              </button>
              <img
                className="w-[156px] h-[144px] object-cover rounded-2xl box-border py-2"
                src={CDN_URL + `${element.card.info.imageId}`}
                alt={element.card.info.name}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantCategory;
