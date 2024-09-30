import { useSelector } from "react-redux";

const Order = () => {
  const state = useSelector((state) => state.products);

  return (
    <div>
      <div className="font-[sans-serif] bg-white">
        <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
            <div className="relative h-full">
              <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                <div className="space-y-4 mt-16">
                  {state.cart?.map((product) => (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                          <img
                            src={product.image}
                            className="w-full object-contain"
                          />
                        </div>
                        <div className="w-full truncate">
                          <h3 className="text-base text-white ">
                            {product.title}
                          </h3>
                          <ul className="text-xs text-gray-300 space-y-2 mt-2">
                            <li className="flex flex-wrap gap-4">
                              rate{" "}
                              <span className="ml-auto">
                                {product.rating.rate}
                              </span>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Quantity{" "}
                              <span className="ml-auto">
                                {product.quantity}
                              </span>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Total Price{" "}
                              <span className="ml-auto">
                                {(product.quantity * product.price).toFixed(2)}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>

              <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-base text-white">
                  Total <span className="ml-auto">${state.total}</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
            <h2 className="text-2xl font-bold text-gray-800">
              Complete your order
            </h2>
            <form className="mt-8">
              <div className="mt-8">
                <h3 className="text-base text-gray-800 mb-4">
                  Shipping Address
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Address Line"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                </div>
              </div>
              <form className="mt-5 grid gap-6">
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_1"
                    type="radio"
                    name="radio"
                    checked
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="radio_1"
                  >
                    <img
                      className="w-14 object-contain"
                      src="/images/naorrAeygcJzX0SyNI4Y0.png"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">
                        Cash on Delivery
                      </span>
                      <p className="text-slate-500 text-sm leading-6">
                        Delivery: 2-4 Days
                      </p>
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_2"
                    type="radio"
                    name="radio"
                    checked
                  />
                  <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                    htmlFor="radio_2"
                  >
                    <img
                      className="w-14 object-contain"
                      src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">Online Pyment</span>
                      <p className="text-slate-500 text-sm leading-6">
                        Delivery: 2-4 Days
                      </p>
                    </div>
                  </label>
                </div>
                <div className="flex gap-4 max-md:flex-col mt-8">
                  <button
                    type="button"
                    className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-gray-900 hover:bg-blue-700 text-white"
                  >
                    Complete Purchase
                  </button>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
