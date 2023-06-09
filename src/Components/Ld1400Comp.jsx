import * as React from "react";
import PatelLogo from "../Images/PatelLogo.png";
import Carousel from "react-material-ui-carousel";
import Carousell from "./Carousell";

function Ld1400Comp() {
  return (
    <>
      <div className="NavDiv" style={{ height: "130px" }}>
        <img
          src={PatelLogo}
          alt="Patel Marketing Logo"
          style={{
            width: "120px",
            height: "120px",
            paddingLeft: "25px",
            paddingTop: "5px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            className="NaxHeadText"
            style={{ paddingLeft: "25px", fontSize: "50px", marginTop: "10px" }}
          >
            Patel{" "}
            <span style={{ color: "#8bc34a", textDecoration: "underline" }}>
              Marketing
            </span>
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "20px",
              paddingLeft: "25px",
              color: "#8bc34a",
            }}
          >
            Empowring Greener Enery Choices
          </p>
        </div>
      </div>

      <div
        className="ShortInfo"
        style={{ maxWidth: "500px", marginTop: "15px" }}
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

      <Carousell/>
    </>
  );
}

export default Ld1400Comp;
