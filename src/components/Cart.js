import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Clear the cart
  const handleClear = () => {
    dispatch(clearCart());
  };

  // Remove an item by index
  const handleRemove = (index) => {
    dispatch(removeItem(index));

  };

  return cartItems.length === 0 ? (
    <h1 className="text-center mt-16">Your cart is empty, add some items</h1>
  ) : (
    <div className="text-center m-4 p-4 relative">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="flex flex-col items-center">
        {cartItems.map((element, index) => (
          <div
            key={element.card.info.id}
            className="flex w-7/12 justify-between items-center mt-2 bg-slate-100 my-3 p-3 rounded-lg shadow-sm h-[150px] overflow-hidden"
          >
            <div className="flex flex-col justify-between h-full w-2/3 items-start">
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
                className="absolute bg-white text-black py-2 px-6 bottom-0 left-0 hover:bg-black hover:text-white"
                onClick={() => handleRemove(index)}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <img
                className="w-[156px] h-[144px] object-cover rounded-2xl box-border py-2"
                src={CDN_URL + `${element.card.info.imageId}`}
                alt={element.card.info.name}
              />
            </div>
          </div>
        ))}
        <button
          className=" bg-black text-white p-2 bottom-full border b-black right-0 m-4 "
          onClick={handleClear}
          >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
