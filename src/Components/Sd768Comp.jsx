import React from "react";
import PatelLogo from "../Images/PatelLogo.png";
import recycle from "../Images/recycle.svg";
import VisionMissionCarousel from "./VisionMissionCarousel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Products from "./Products";

function Sd792Comp() {
  const sdSettingsVisionMissionCarousel = {
    carouselDivMaxWidth: "400px",
    flexDirection: "column",
    partsLength: "100%",
    partsHeight: "250px",
    headTag:'h3',
    carouselDivMargin : '7px 0 7px 0'
  };

  const sdSettingsProducts = {
    flexDirection:"column",
    energyHeadTag:'h2',
    energyHeadLogoSize:50,
    productDivMaxWidth: '700px',
    productMaxWidth: '400px',
    productHeight: 'auto',
    productMinWidth: '300px',
    productMargin: '10px 15px 10px 15px',
    textFontFamily:'OutFit',
    textPadding:'0 30px 0 30px',
    textFontSize: '15px',
    ImgMaxWidth: "350px",
    ImgMarginTop: "-40px",
    ImgBorderRadius: "0 0 20px 20px",
  }
  return (
    <>
      <div className="NavDiv" style={{ height: "110px" }}>
        <img
          src={PatelLogo}
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
        className="infoDiv"
        style={{
          display: "flex",
          flexDirection: "column",
          width:'auto',
          maxWidth: "700px",
          margin: "auto",
          justifyContent: "space-around",
          fontFamily:'OutFit',
        }}
      >
                <img src={recycle} alt="" style={{ width: "400px", margin:'auto' }} />
        <p
          style={{
            margin: "auto",
            textAlign: "justify",
            fontSize: "15px",
            height: "100%",
            width:'auto',
            maxWidth: "500px",
            padding: "40px",
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
        </div>

      <hr />
      <VisionMissionCarousel settings={sdSettingsVisionMissionCarousel} />

      <a
        href="https://wa.me/7096275962?text=Hello%20there%2C%0AI%20want%20to%20know%20more%20about%20this%20product%20VidhyutCard%20and%20OzoneMitra%20Electric%20Bike.."
        target="_blank"
      >
      <div className="whatsappButton" style={{ height: "60px", width: "60px" }}>
        <WhatsAppIcon sx={{ fontSize: 60, color: "#25D366", margin: "auto" }} />
      </div>
      </a>

      <Products settings={sdSettingsProducts} />
    </>
  );
}

export default Sd792Comp;
