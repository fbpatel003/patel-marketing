import React from "react";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { Button } from "@mui/material";
import OzoneMitraBike_PatelMarketing from "../Documents/OzoneMitraBike_PatelMarketing.pdf";
import VidhyutMitraCard_PatelMarketing from "../Documents/VidhyutMitraCard_PatelMarketing.pdf";
import p1 from "../Images/p1.jpg";
import p2 from "../Images/p2.jpg";

function Products(props) {
  const settings = props.settings;
  const productDetails = [
    {
      name: "Vidhyut Mitra Card",
      description:
        "The Vidhyut Mitra Card is a groundbreaking device designed to revolutionize the way we conserve electricity in our homes and businesses. This innovative technology harnesses the power of automation to effortlessly reduce energy consumption, contributing to a greener and more sustainable future.",
      image: p1,
      pdf: VidhyutMitraCard_PatelMarketing,
      pdfName: "VidhyutMitraCard_PatelMarketing.pdf",
      points: [
        "Save upto 15-30% Electricity every month.",
        "Get ₹500 Every month.",
        "Made of 21st Century's Us-German Nano Technology.",
        "Life Cycle upto 10 Years!",
        "3 Year Replacement Warranty.",
        "No Maintanance Cost!",
        "Can be used in Residentital, Commercial and Industrial Divisiion.",
        "100% Eco Friendly and pollution free.",
      ],
    },
    {
      name: "Ozone Mitra Bike",
      description:
        "The Ozone Mitra Bike is a game-changing transportation solution that combines cutting-edge technology with an eco-conscious design. This innovative electric bike is designed to revolutionize your daily commute, offering a sustainable and efficient mode of transportation that enhances your mobility while minimizing environmental impact.",
      image: p2,
      pdf: OzoneMitraBike_PatelMarketing,
      pdfName: "OzoneMitraBike_PatelMarketing.pdf",
      points: [
        "Ride Ozone Mitra bike daily and get ₹10,000 every month for next 5 Years.",
        "No need of license to ride Ozone Mitra.",
        "Range upto 95Km.",
        "Full Battery charge in 5-6 hours.",
        "Motor warranty : 24 months or 35000Km whichever is earlier.",
        "Li-on Battery warranty : 36 months or 35000Km whichever is earlier.",
        "100% Eco Friendly and pollution free.",
      ],
    },
  ];
  const DownloadClicked = (link) => {
    fetch("Fenil's Resume 121.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Fenil's Resume 121.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div className="productHead">
        <EnergySavingsLeafIcon
          sx={{ fontSize: settings.energyHeadLogoSize, margin: "0" }}
        />
        <settings.energyHeadTag style={{ margin: "0" }}>
          OUR ENERGY SAVING PRODUCTS
        </settings.energyHeadTag>
      </div>
      <div
        className="productsDiv"
        style={{
          flexDirection: settings.flexDirection,
          maxWidth: settings.productDivMaxWidth,
        }}
      >
        {productDetails.map((element) => {
          return (
            <div
              className="productCardDiv"
              key={element.name}
              style={{
                height: settings.productHeight,
                width: "100%",
                minWidth: settings.productMinWidth,
                maxWidth: settings.productMaxWidth,
                margin: settings.productMargin,
              }}
            >
              <h3 className="productName">{element.name}</h3>
              <img
                src={element.image}
                alt={"Product Image :" + element.name}
                style={{
                  width: "100%",
                  maxWidth: settings.ImgMaxWidth,
                  marginTop: settings.ImgMarginTop,
                  borderRadius: settings.ImgBorderRadius,
                }}
              />
              <p
                style={{
                  fontFamily: settings.textFontFamily,
                  fontSize: settings.textFontSize,
                  padding: settings.textPadding,
                  textAlign: "justify",
                }}
              >
                {element.description}
              </p>
              <hr />
              <ul
                style={{
                  textAlign: "left",
                  fontFamily: settings.textFontFamily,
                  padding: settings.textPadding,
                  fontSize: settings.textFontSize,
                }}
              >
                {element.points.map((e) => {
                  return <li key={e}>{e}</li>;
                })}
              </ul>
              <a
                href={element.pdf}
                download={element.pdfName}
                target="_blank"
                rel="noreferrer"
              >
              <Button
                variant="outlined"
                color="error"
                startIcon={<DownloadForOfflineIcon />}
                style={{ margin: "10px 0 20px 0" }}
              >
                Download Brochure
              </Button>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
