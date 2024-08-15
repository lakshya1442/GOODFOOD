import { CDN_URL } from "../utils/constants";
import { Rating } from '@mui/material';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from "react";


const RestaurantCard = (props) => {

  const { resData } = props;
   const { avgRating, cuisines, name, cloudinaryImageId } = resData?.info;
   const { deliveryTime } = resData?.info.sla;
   
   // Use avgRating as the initial value for the rating
   const [value, setValue] = useState(avgRating);

   const cui_filter=cuisines.slice(0,6);

   return (
      <div className="res_card h-full bg-white-56 shadow-lg rounded-2xl overflow-hidden hover:bg-gray-100 flex flex-col cursor-pointer">
         <div className="overflow-hidden">
            <img alt="res-logo" className="res_img w-full h-60 object-inherit box-border p-1 rounded-t-2xl" src={CDN_URL + cloudinaryImageId}></img>
         </div>
         <div className="contain flex flex-col justify-between flex-grow">
            <div className="main-info p-2">
               <h4 style={{margin:"3px 0 5px 0"}}>{name}</h4>
               <h5 style={{margin:"0 0 3px 0",letterSpacing:"0.5px"}} className="text-sm">{cui_filter.join(", ")}</h5>
            </div>
            <div className="other-info pl-2 ">
               <div className="rate flex justify-between content-center">
                  <Rating
                     name={`rating-${name}`}
                     value={avgRating}
                     precision={0.1}
                     readOnly
                     
                     icon={<StarIcon fontSize="small" />}
                     emptyIcon={<StarBorderIcon fontSize="small" />}
                  />
                  <h5 className="ml-4 w-full text-sm ">{avgRating}</h5>
                </div>
               <h5 className="text-sm mt-1 ">{deliveryTime} mins</h5>
            </div>
         </div> 
      </div>
   );
};

export default RestaurantCard;
