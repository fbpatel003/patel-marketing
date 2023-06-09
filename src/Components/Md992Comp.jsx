import React from "react";
import PMlogo from "./Images/PMlogo.png";

function Md992Comp() {
  return (
    <>
      <div className="NavDiv" style={{ height: "110px" }}>
        <img
          src={PMlogo}
          alt="Patel Marketing Logo"
          style={{
            width: "100px",
            height: "100px",
            paddingLeft: "20px",
            paddingTop: "5px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            className="NaxHeadText"
            style={{ paddingLeft: "18px", fontSize: "40px", marginTop: "10px" }}
          >
            Patel{" "}
            <span style={{ color: "#8bc34a", textDecoration: "underline" }}>
              Marketing
            </span>
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "17px",
              paddingLeft: "20px",
              color: "#8bc34a",
            }}
          >
            Empowring Greener Enery Choices
          </p>
        </div>
      </div>

      <div
        className="ShortInfo"
        style={{ maxWidth: "450px", marginTop: "15px" }}
      >
        <p style={{ margin: "0", fontSize: "13px" }}>_____________________</p>
        <p style={{ margin: "0", textAlign: "justify", fontSize: "14.5px" }}>
          At Patel Marketing, we are committed to making a positive impact on
          our planet by promoting energy-saving solutions and environmental
          sustainability. As a trusted trading company specializing in electric
          energy-saving products, we provide a comprehensive range of innovative
          and eco-friendly solutions to help individuals, businesses, and
          communities reduce their carbon footprint and lower energy
          consumption.
        </p>
        <p style={{ margin: "0", fontSize: "13px" }}>--------------------</p>
      </div>
    </>
  );
}

export default Md992Comp;
