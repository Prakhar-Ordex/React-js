import React, { useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom'

function Github() {
  // const data = useLoaderData()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/PrakharATripathi")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        {loading ? (
          <h1>Loading......</h1>
        ) : (
          <>
            <p> Github followers: {data?.followers}</p>
            <img src={data.avatar_url} alt="Git picture" width={300} />
          </>
        )}
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
