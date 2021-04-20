import React, {useState} from "react";
import Listing from "./Listing.jsx";
import Filters from "./Filters.jsx";
import data from "../data/data.json";

function App() {
  const [currentFilters, setCurrentFilters] = useState([]);

  function FilterData(filters){
    if (filters.length === 0){
      return data;
    } else {
      return data.filter(listing => {
        let filterTags = PopulateTags(listing);
        return filters.every(e => filterTags.includes(e));
      })
    }
  }

  function PopulateTags(listing){
    let tagsArray = [];
    tagsArray.push(listing.role);
    tagsArray.push(listing.level);
    tagsArray.push(...listing.languages);
    if(listing.tools.length > 0){
      tagsArray.push(listing.tools);
    }

    return tagsArray;
  }

  function AddFilter(filter){
    if(!currentFilters.includes(filter)){
      setCurrentFilters(prevFilters => {
        return [...prevFilters, filter];
      });
  
      filteredData = FilterData(currentFilters);
    }
  }

  function RemoveFilter(filter){
    if(currentFilters.includes(filter)){
      setCurrentFilters(prevFilters => {
        return prevFilters.filter((filterName) => {
          return filterName !== filter;
        });
      });
      filteredData = FilterData(currentFilters);
    }
  }

  function ClearFilters(){
    setCurrentFilters([]);
    filteredData = FilterData(currentFilters);
  }

  let filteredData = FilterData(currentFilters);

  return (
    <div className="App">
      <div className="page-heading"></div>
        { currentFilters.length > 0 && <Filters removeFilter={RemoveFilter} clearFilters={ClearFilters} filters={currentFilters}/> }
      <div className="listings" style={currentFilters.length === 0 ? {marginTop: "72px"} : {}}>
        {filteredData.map((listingData, index) => {
          return(
            <Listing key={index} listingData={listingData} filterTags={PopulateTags(listingData)} addFilter={AddFilter} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
