import React, { useState, useEffect } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [results, setResults] = useState([]);
    // console.log(results)

  // Debounce the search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms debounce delay

    // Cleanup the timeout if query changes before the delay
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Fetch search results whenever debouncedQuery changes
  useEffect(() => {
    if (debouncedQuery) {
      fetchResults(debouncedQuery);
    }
  }, [debouncedQuery]);

  const fetchResults = async (searchQuery) => {
    // Replace this with your actual API call
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${searchQuery}`
    );
      const data = await response.json();
      console.log(data)
    setResults(data);
  };

  return (
    <div>
      <h1>debouncing Example</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {results?.map((result, index) => (
              <ul key={index}>
                  <li>{result?.id}</li>
                  <li>{result?.name}</li>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
