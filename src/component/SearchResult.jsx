import { useEffect, useState } from "react";
import SearchCard from "./SearchCard";

const SearchResult = ({ results }) => {
 

  

  if (!results.length) return <p>No results found</p>;

   return (
    <div >
      {results.map((item) => (
        <SearchCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default SearchResult;
