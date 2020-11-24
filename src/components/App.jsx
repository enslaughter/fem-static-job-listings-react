import React from "react";
import Listing from "./Listing.jsx";
import Filters from "./Filters.jsx";
import data from "../data/data.json";

function App() {
  
  console.log(data[0].company);

  return (
    <div className="App">
      <div className="page-heading"></div>
        <Filters />
      <div className="listings">
        <Listing 
          listingData = {data[0]}
        />
      </div>
    </div>
  );
}

export default App;
