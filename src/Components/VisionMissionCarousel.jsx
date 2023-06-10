import React from "react";
import Carousel from "react-material-ui-carousel";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FlagIcon from "@mui/icons-material/Flag";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import re1 from "../Images/re1.jpg";
import re2 from "../Images/re2.jpg";
import vm1 from "../Images/vm1.jpg";
import oz2 from "../Images/oz2.jpg";
import en1 from "../Images/en1.jpg";
import en2 from "../Images/en2.jpg";

function VisionMissionCarousel(props) {
  const settings = props.settings;

  return (
    <div
      className="CarouselMain"
      style={{ maxWidth: settings.carouselDivMaxWidth }}
    >
      <Carousel data-interval="2500">
        <div
          className="CarouselDiv"
          style={{
            maxWidth: settings.carouselDivMaxWidth,
            flexDirection: settings.flexDirection,
          }}
        >
          <div
            className="CarouselPartsDiv"
            style={{
              width: settings.partsLength,
              height: settings.partsHeight,
              background: "#a32222",
              textAlign: "justify",
              color: "#f5f5f7",
              margin:settings.carouselDivMargin,
            }}
          >
            <settings.headTag style={{ textAlign: "center" }}>
              OUR <RemoveRedEyeIcon /> VISION
            </settings.headTag>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Century Gothic",
                padding: "15px",
                lineHeight: "20px",
                marginTop:'-20px'
              }}
            >
              To lead the transition towards a sustainable future by offering
              cutting-edge energy-saving products, empowering individuals and
              businesses to reduce their carbon footprint, conserve resources,
              and create a greener world for generations to come.
            </p>
          </div>

          <div
            className="CarouselPartsDiv"
            style={{
              width: settings.partsLength,
              height: settings.partsHeight,
              margin:settings.carouselDivMargin,
            }}
          >
            <div className="CarouselImgDiv">
              <img
                src={re1}
                alt="Renewable Energy"
                className="CarosuelImg"
                style={{ border: "3px solid #a32222" }}
              />
            </div>
          </div>

          <div
            className="CarouselPartsDiv"
            style={{
              width: settings.partsLength,
              height: settings.partsHeight,
              margin:settings.carouselDivMargin,
            }}
          >
            <div className="CarouselImgDiv">
              <img
                src={re2}
                alt="Renewable Energy"
                className="CarosuelImg"
                style={{ border: "3px solid #a32222" }}
              />
            </div>
          </div>
        </div>

        <div
          className="CarouselDiv"
          style={{
            maxWidth: settings.carouselDivMaxWidth,
            flexDirection: settings.flexDirection,
            margin : settings.carouselDivMargin
          }}
        >
          <div
            className="CarouselPartsDiv"
            style={{
              width: settings.partsLength,
              height: settings.partsHeight,
              margin:settings.carouselDivMargin,
            }}
          >
            <div className="CarouselImgDiv">
              <img
                src={vm1}
                alt="Renewable Energy"
                className="CarosuelImg"
                style={{ border: "3px solid #040469" }}
              />
            </div>
          </div>

          <div
            className="CarouselPartsDiv"
            style={{
              width: settings.partsLength,
              height: settings.partsHeight,
              background: "#040469",
              textAlign: "justify",
              color: "#f5f5f7",
              margin:settings.carouselDivMargin,
            }}
          >
            <settings.headTag style={{ textAlign: "center" }}>
              OUR <FlagIcon /> MISSION
            </settings.headTag>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Century Gothic",
                padding: "15px",
                lineHeight: "20px",
                marginTop:'-20px'
              }}
            >
              To provide innovative electric energy-saving solutions and
              exceptional service, helping individuals and businesses embrace
              energy efficiency, reduce environmental impact, and contribute
              towards a sustainable and healthier planet.
            </p>
          </div>

          <div
            className="CarouselPartsDiv"
            style={{
              width: settings.partsLength,
              height: settings.partsHeight,
              margin:settings.carouselDivMargin,
            }}
          >
            <div className="CarouselImgDiv">
              <img
                src={oz2}
                alt="Renewable Energy"
                className="CarosuelImg"
                style={{ border: "3px solid #040469" }}
              />
            </div>
          </div>
        </div>

        <div
          className="CarouselDiv"
          style={{
            maxWidth: settings.carouselDivMaxWidth,
            flexDirection: settings.flexDirection,
            margin: settings.carouselDivMargin
          }}
        >
          <div
            className="CarouselPartsDiv"
            style={{
              width: settings.partsLength,
              height: settings.partsHeight,
              margin:settings.carouselDivMargin,
            }}
          >
            <div className="CarouselImgDiv">
              <img
                src={en1}
                alt="Renewable Energy"
                className="CarosuelImg"
                style={{ border: "3px solid #079100" }}
              />
            </div>
          </div>

          <div
            className="CarouselPartsDiv"
            style={{
              width: settings.partsLength,
              height: settings.partsHeight,
              margin:settings.carouselDivMargin,
            }}
          >
            <div className="CarouselImgDiv">
              <img
                src={en2}
                alt="Renewable Energy"
                className="CarosuelImg"
                style={{ border: "3px solid #079100" }}
              />
            </div>
          </div>

          <div
            className="CarouselPartsDiv"
            style={{
              width: settings.partsLength,
              height: settings.partsHeight,
              background: "#079100",
              textAlign: "justify",
              color: "#f5f5f7",
              margin:settings.carouselDivMargin,
            }}
          >
            <settings.headTag style={{ textAlign: "center" }}>
              OUR <ElectricBoltIcon /> VALUES
            </settings.headTag>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Century Gothic",
                padding: "15px",
                lineHeight: "20px",
                marginTop:'-20px'
              }}
            >
              Integrity, Innovation, and Environmental Stewardship. We
              prioritize ethical business practices, foster continuous
              innovation in energy-saving technologies, and are dedicated to
              preserving and protecting our planet for future generations.{" "}
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default VisionMissionCarousel;
