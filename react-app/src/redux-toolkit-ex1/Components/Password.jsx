import React, { useState } from "react";

const Password = ({ className, handleInput ,placeholder="••••••••" }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="relative ">
        <input  
          name="password"
          {...handleInput}
          id="password"
          placeholder={placeholder}
          type={toggle ? "text" : "password"}
          className={`${className} relative w-full`}
        />
        <span
          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? `📖` : `📕`}
        </span>
      </div>
    </>
  );
};

export default Password;
