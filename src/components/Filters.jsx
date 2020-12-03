import React from "react";
import FilterTag from "./FilterTag";

function Filters(props){
    function handleClick(){
      props.clearFilters();
    }

    return(
        <div className="filters-section">
        <div className="filters-container">
        {props.filters.map((filter, index) => {
          return (
            <FilterTag key={index} filterName={filter} removeFilter={props.removeFilter}/>
          );
        })}
        </div>
        <p className="filters-clear" onClick={handleClick}>Clear</p>
      </div>
    );
}

export default Filters;