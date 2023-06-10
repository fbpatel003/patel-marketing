import * as React from "react";
import PatelLogo from "../Images/PatelLogo.png";
import VisionMissionCarousel from "./VisionMissionCarousel";
import recycle from "../Images/recycle.svg";

function Ld1400Comp() {
  const ldSettingsVisionMissionCarousel = {
    carouselDivMaxWidth: "800px",
    flexDirection: "row",
    partsLength: "32%",
    partsHeight: "300px",
  };

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
        className="infoDiv"
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "1100px",
          margin: "auto",
          justifyContent: "space-around",
        }}
      >
        <p
          style={{
            margin: "auto",
            textAlign: "justify",
            fontSize: "17px",
            height: "100%",
            maxWidth: "500px",
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
        <img src={recycle} alt="" style={{ width: "500px" }} />
      </div>

      <VisionMissionCarousel settings={ldSettingsVisionMissionCarousel} />
    </>
  );
}

export default Ld1400Comp;
