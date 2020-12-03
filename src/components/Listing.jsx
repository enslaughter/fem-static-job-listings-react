import React from "react";
import ListingTag from "./ListingTag";

function Listing(props){

    return(
        <div className={"listing-container" + (props.listingData.featured ? " is-featured" : "")}>

          <div className="listing-info">
            <img className="listing--logo" src={process.env.PUBLIC_URL + `${props.listingData.logo}`} alt=""></img>
            <div className="listing-info-text">
              <div className="listing--company--container">
                <h1 className="listing--company">{props.listingData.company}</h1>
                {props.listingData.new &&
                <p className="listing--new">NEW!</p>
                }
                {props.listingData.featured &&
                <p className="listing--featured">FEATURED</p>
                }
              </div>
              <p className="listing--position">{props.listingData.position}</p>

              <div className="listing--tap">
                <span className="listing--postedat">{props.listingData.postedAt}</span>
                <span className="divider">•</span>
                <span className="listing--contract">{props.listingData.contract}</span>
                <span className="divider">•</span>
                <span className="listing--location">{props.listingData.location}</span>
              </div>
            </div>
          </div>

          <div className="listing-tags">
            {props.filterTags.map((tag, index) => {
              return (
                <ListingTag key={index} tag={tag} addFilter={props.addFilter} />
              );
            })}
          </div>

        </div>
    );
}

export default Listing;