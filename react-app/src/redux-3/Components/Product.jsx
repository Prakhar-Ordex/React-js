import React from "react";
import {  useDispatch } from "react-redux";
import { Products } from "../constant/product";
import { addToCart } from "../redux/slices/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imgSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className=" inset-0" />
                      {product.category}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.title}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <button className="btn btn-primary mx-3">
                  <strong>{product.price} ₹</strong>
                </button>
                {product.quntity > 1 ? (
                  <div className="bg-gray-300 rounded-md flex justify-between ">
                    <button
                      className="bg-blue-300 p-0.5 text-2xl px-9"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      +
                    </button>
                    <span className="text-2xl">{product.quntity}</span>
                    <button
                      className="bg-blue-300 p-0.5 text-2xl px-9"
                      onClick={() => dispatch(removeItem(item))}
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-green-300 rounded-md p-2 "
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
