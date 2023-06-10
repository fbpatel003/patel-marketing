import React from "react";
import PatelLogo from "../Images/PatelLogo.png";
import recycle from "../Images/recycle.svg";

function Md992Comp() {
  return (
    <>
      <div className="NavDiv" style={{ height: "110px" }}>
        <img
          src={PatelLogo}
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
        className="infoDiv"
        style={{
          display: "flex",
          flexDirection: "row",
          width:'auto',
          maxWidth: "800px",
          margin: "auto",
          justifyContent: "space-around",
        }}
      >
        <p
          style={{
            margin: "auto",
            textAlign: "justify",
            fontSize: "15px",
            height: "100%",
            width:'auto',
            maxWidth: "380px",
            padding: "20px",
          }}
        >
          At Patel Marketing, we are committed to making a positive impact on
          our planet by promoting energy-saving solutions and environmental
          sustainability. As a trusted trading company specializing in electric
          energy-saving products, we provide a comprehensive range of innovative
          and eco-friendly solutions to help individuals, businesses, and
          communities reduce their carbon footprint and lower energy
          consumption.
        </p>
        <img src={recycle} alt="" style={{ width: "380px" }} />
        </div>
    </>
  );
}

export default Md992Comp;
