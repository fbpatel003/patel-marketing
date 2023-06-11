import React from "react";
import PatelLogo from "../Images/PatelLogo.png";
import recycle from "../Images/recycle.svg";
import VisionMissionCarousel from "./VisionMissionCarousel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Products from "./Products";
import ContactUs from "./ContactUs";
import lastImg from "../Images/lastImg.png";

function Md992Comp() {
  const mdSettingsVisionMissionCarousel = {
    carouselDivMaxWidth: "700px",
    flexDirection: "row",
    partsLength: "32%",
    partsHeight: "330px",
    headTag: "h3",
    carouselDivMargin: "0 0 0 0",
  };

  const mdSettingsProducts = {
    flexDirection:"row",
    energyHeadTag:'h1',
    energyHeadLogoSize:70,
    productDivMaxWidth: '1100px',
    productMaxWidth: '520px',
    productHeight: 'auto',
    productMinWidth: '350px',
    productMargin: '0 15px 0 15px',
    textFontFamily:'OutFit',
    textPadding:'0 30px 0 30px',
    textFontSize: '15px',
    ImgMaxWidth: "350px",
    ImgMarginTop: "-40px",
    ImgBorderRadius: "0 0 20px 20px",
  }

  const mdSettingsContacts={
    flexDirection:'row',
    mainDivMargin: '80px 20px 0 20px'
  }

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
          width: "auto",
          maxWidth: "800px",
          margin: "auto",
          justifyContent: "space-around",
          fontFamily:'OutFit',
        }}
      >
        <p
          style={{
            margin: "auto",
            textAlign: "justify",
            fontSize: "15px",
            height: "100%",
            width: "auto",
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
      <hr />

      <VisionMissionCarousel settings={mdSettingsVisionMissionCarousel} />

      <a
        href="https://wa.me/7096275962?text=Hello%20there%2C%0AI%20want%20to%20know%20more%20about%20this%20product%20VidhyutCard%20and%20OzoneMitra%20Electric%20Bike.."
        target="_blank"
      >
      <div className="whatsappButton" style={{ height: "60px", width: "60px" }}>
        <WhatsAppIcon sx={{ fontSize: 60, color: "#25D366", margin: "auto" }} />
      </div>
      </a>

      <Products settings={mdSettingsProducts}/>
      <ContactUs settings ={mdSettingsContacts}/>
      <div className="lastImage" style={{textAlign:'center', alignItems:'center'}}>
        <img src={lastImg} alt="Save Environment"  style={{width:'90%'}}/>
      </div>
    </>
  );
}

export default Md992Comp;
