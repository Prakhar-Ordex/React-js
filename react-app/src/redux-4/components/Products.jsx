import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../redux/Slices/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {" "}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          {state.loading ? (
            <h1 className="text-center text-2xl font-bold">Loadding.....</h1>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {state.products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.name}
                      src={product.image}
                      className="h-full w-full  lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className=" inset-0" />
                        {product.title}
                      </h3>
                      <p className="w-64 truncate ">{product.description}</p>
                      
                    </div>
                   
                  </div>
                  <button className="btn btn-primary mx-3">
                    <strong>{product.price} $</strong>
                  </button>
                  <button
                    className="bg-green-300 rounded-md p-2 "
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
