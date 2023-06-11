import React from "react";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
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
      points: [
        "Ride Ozone Mitra bike daily and get ₹10,0000 every month for next 5 Years.",
        "No need of license to ride Ozone Mitra.",
        "Range upto 95Km.",
        "Full Battery charge in 5-6 hours.",
        "Motor warranty : 24 months or 35000Km whichever is earlier.",
        "Li-on Battery warranty : 36 months or 35000Km whichever is earlier.",
        "100% Eco Friendly and pollution free.",
      ],
    },
  ];
  return (
    <>
      <div className="productHead">
        <EnergySavingsLeafIcon sx={{ fontSize: settings.energyHeadLogoSize, margin: "0" }} />
        <settings.energyHeadTag style={{ margin: "0" }}>OUR ENERGY SAVING PRODUCTS</settings.energyHeadTag>
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
                width:'100%',
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
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
