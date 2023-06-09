import React from "react";
import PMlogo from "./Images/PMlogo.png";

function Sd792Comp() {
  return (
    <>
      <div className="NavDiv" style={{ height: "110px" }}>
        <img
          src={PMlogo}
          alt="Patel Marketing Logo"
          style={{
            width: "90px",
            height: "90px",
            paddingLeft: "10px",
            paddingTop: "5px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            className="NaxHeadText"
            style={{ paddingLeft: "10px", fontSize: "27px", marginTop: "20px" }}
          >
            Patel{" "}
            <span style={{ color: "#8bc34a", textDecoration: "underline" }}>
              Marketing
            </span>
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              paddingLeft: "10px",
              color: "#8bc34a",
            }}
          >
            Empowring Greener Enery Choices
          </p>
        </div>
      </div>

      <div
        className="ShortInfo"
        style={{ maxWidth: "300px", marginTop: "15px" }}
      >
        <p style={{ margin: "0", fontSize: "13px" }}>_____________________</p>
        <p style={{ margin: "0", textAlign: "justify", fontSize: "13.5px" }}>
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

export default Sd792Comp;
