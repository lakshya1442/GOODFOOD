import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const arr =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  let categories = arr.flatMap((elem) => elem?.card?.card) || [];

  console.log("category is", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="border border-b-black mb-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category}
            key={category?.title || index}
            isOpen={index === openCategoryIndex}
            setIsOpen={() =>
              setOpenCategoryIndex(index === openCategoryIndex ? null : index)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

