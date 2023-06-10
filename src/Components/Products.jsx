import React from "react";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import p1 from '../Images/p1.jpg';
import p2 from '../Images/p2.jpg';

function Products(props) {
  const settings = props.settings;
  const productDetails = [
    {
      name: "Vidhyut Mitra Card",
      description: "",
      image: p1,
      points: ["a", "b"],
    },
    {
      name: "Ozone Mitra Bike",
      description: "",
      image: p2,
      points: ["c", "d"],
    },
  ];
  return (
    <>
      <div className="productHead">
        <EnergySavingsLeafIcon sx={{ fontSize: 70, margin: "0" }} />
        <h1 style={{ margin: "0" }}>OUR ENERGY SAVING PRODUCTS</h1>
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
            <>
              <div
                className="productCardDiv"
                style={{
                  height: settings.productHeight,
                  minWidth: settings.productMinWidth,
                  maxWidth: settings.productMaxWidth,
                  border: "2px solid red",
                }}
              >
                <h3 className="productName">{element.name}</h3>
                <img src={element.image} alt={"Product Image :"+element.name} style={{width:'100%', maxWidth:'300px'}} />
                
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Products;
