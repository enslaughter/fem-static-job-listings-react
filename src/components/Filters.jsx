import React from "react";

function Filters(){
    return(
        <div className="filters-section">
        <div className="filters-container">
          <div className="filter">
            <p className="filter-name">
              Frontend
            </p>
            <button className="filter-removal"><img src={process.env.PUBLIC_URL + "/images/icon-remove.svg"} alt=""></img></button>
          </div>

          <div className="filter">
            <p className="filter-name">
              CSS
            </p>
            <button className="filter-removal"><img src={process.env.PUBLIC_URL + "/images/icon-remove.svg"} alt=""></img></button>
          </div>

          <div className="filter">
            <p className="filter-name">
              JavaScript
            </p>
            <button className="filter-removal"><img src={process.env.PUBLIC_URL + "/images/icon-remove.svg"} alt=""></img></button>
          </div>
        </div>
        <p className="filters-clear">Clear</p>
      </div>
    );
}

export default Filters;