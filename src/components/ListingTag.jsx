import React from "react";

function ListingTag(props){
    function handleClick(){
        props.addFilter(props.tag);
    }
    return(
        <button className="listing--tag" onClick={handleClick}>
              {props.tag}
            </button>
    );
}

export default ListingTag;