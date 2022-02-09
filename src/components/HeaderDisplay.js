import React from "react";

export const HeaderDisplay = () => {
  return (
    <div
      className="headerDisplayImage"
      style={{
        marginTop: "120px",
      }}
    >
      <div>
        <div
        className="watchDesc"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            paddingLeft: "60px",
            paddingRight: "60px",
          }}
        >
          <h4
            style={{ color: "white", marginBottom: "0px", marginTop: "0px" }}
            className="displayContent"
          >
            Nice Watch
          </h4>

          <p
            style={{ color: "white", marginTop: "0px", marginBottom: "5px" }}
            className="displayContent"
          >
            cheaper price
          </p>
        </div>
        <div className="headerDisplayImage headerImg" style={{
        
      }} >

        <button
          className="seeMoreButton"
        >
          See More
        </button>
      </div>
      </div>
    </div>
  );
};
