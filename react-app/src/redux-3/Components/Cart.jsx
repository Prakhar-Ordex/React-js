import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { clearCart, selectCartItems } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  
  return (
    <>
      <div className="container text-center py-16 " style={{ width: "700px" }}>
        {state.items.length == 0 && (
          <>
            <h1>Your Cart is Empty</h1>
            <Link
              to={"/"}
              className="bg-blue-500 text-2xl text-white rounded-md p-1"
            >
              Continue Shopping...
            </Link>
          </>
        )}

       

        {state.items.length != 0 && (
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 text-2xl rounded-md p-1 text-white"
          >
            Clear Cart
          </button>
        )}
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {state.items.map((item,index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                alt=""
                src={item.imgSrc}
                className="h-16 w-16 flex-none  bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {item.title} <span>({item.quntity })</span>
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {item.price} ₨
              </p>

              <div className="mt-1 flex items-center gap-x-1.5 p-1">
                <button className="bg-red-500 text-white rounded-md p-0.5 px-2"
                onClick={()=> dispatch(removeItem(item))}
                >
                  🧹
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
