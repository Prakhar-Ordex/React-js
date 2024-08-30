import React, { useEffect, useState } from "react";

const GetMethod = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(`error : ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h5>Get Method </h5>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((data, index) => (
            <div key={data.id}>
              <li>{data.id}</li>
              <li>{data.body}</li>
              <li>{data.title}</li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetMethod;
