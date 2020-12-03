import React from "react";

function FilterTag(props){
    function handleClick(){
        props.removeFilter(props.filterName);
    }

    return(
        <div className="filter">
            <p className="filter-name">
              {props.filterName}
            </p>
            <button onClick={handleClick} className="filter-removal"><img src={process.env.PUBLIC_URL + "/images/icon-remove.svg"} alt=""></img></button>
          </div>
    );
}

export default FilterTag;