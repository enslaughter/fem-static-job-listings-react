import React from "react";

function Listing(props){

    console.log(props.listingData);
    console.log(props.listingData.contract);
    
    return(
        <div className="listing-container is-featured">

          <div className="listing-info">
            <img className="listing--logo" src={process.env.PUBLIC_URL + "/images/photosnap.svg"} alt=""></img>
            <div className="listing-info-text">
              <div className="listing--company--container">
                <h1 className="listing--company">Photosnap</h1>
                <p className="listing--new">NEW!</p>
                <p className="listing--featured">FEATURED</p>
              </div>
              <p className="listing--position">Senior Frontend Developer</p>

              <div className="listing--tap">
                <span className="listing--postedat">1d ago</span>
                <span className="divider">•</span>
                <span className="listing--contract">Full Time</span>
                <span className="divider">•</span>
                <span className="listing--location">USA Only</span>
              </div>
            </div>
          </div>

          <div className="listing-tags">
            <button className="listing--tag">
              Frontend
            </button>
            <button className="listing--tag">
              Senior
            </button>
            <button className="listing--tag">
              HTML
            </button>
            <button className="listing--tag">
              CSS
            </button>
            <button className="listing--tag">
              JavaScript
            </button>
          </div>

        </div>
    );
}

export default Listing;