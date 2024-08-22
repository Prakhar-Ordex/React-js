import React, { useState } from "react";

const Rendering = () => {
    const [isLogin, setLogin] = useState(false);
    const [item, setItem] = useState(["Apples", "Banana", "ORanges", "grapes", "Mongo"]);
  return (
    <div>
      <h4>Conditional Rendering </h4>

      {/* Example 1 */}
      <div>
        {isLogin ? (
          <div>
            <p>Loggin </p>
            <p>Wlecome User</p>
          </div>
        ) : (
          <div>
            <p>Not Loggin</p>
            <p>Wlecome Guest</p>
          </div>
              )}
              <button onClick={()=> setLogin(!isLogin)}>login</button>
      </div>
      {/* Example 2 */}

      <div>
        {item.length > 0 ? (
          item.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No current items</p>
              )}
              <button onClick={()=>setItem([])}>emty</button>
              <button onClick={()=>setItem(["Apples", "Banana", "ORanges", "grapes", "Mongo"])}>fill</button>
      </div>

      {/* Example 3 */}
          <div>
              {
                  isLogin && (
                      <div>
                          <button onClick={()=>setLogin(false)}>Logout User</button>
                      </div>
                  )
              }
          </div>
          
    </div>
  );
};

export default Rendering;
