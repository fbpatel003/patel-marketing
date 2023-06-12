import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function ContactUs(props) {
  const settings = props.settings;
  return (
    <>
      <div
        className="ContactMainDiv"
        style={{ margin: settings.mainDivMargin , flexDirection: settings.flexDirection }}
      >
        <div className="Contact">
          <h1>Contact Us On</h1>
          <div className="singleContact">
            <CallOutlinedIcon />
            &nbsp; &nbsp;
            <a href="tel:+917096275962">
              <h3>+91 70962 75962</h3>
            </a>
          </div>

          <div className="singleContact">
            <AlternateEmailOutlinedIcon />
            &nbsp; &nbsp;
            <a href="mailto:jamozone55@gmail.com">
              <h3>Jamozone55@gmail.com</h3>
            </a>
          </div>

          <div className="singleContact">
            <AccessTimeOutlinedIcon />
            &nbsp; &nbsp;
            <h3>
              Open : 9AM - 7PM <br /> Monday - Saturday
            </h3>
          </div>

          <div className="singleContact">
            <LocationOnOutlinedIcon />
            &nbsp; &nbsp;
            <a
              href="https://www.google.com/maps/place/22%C2%B027'51.7%22N+70%C2%B003'42.7%22E/@22.4643472,70.0612233,19z/data=!3m1!4b1!4m4!3m3!8m2!3d22.464346!4d70.061867?entry=ttu"
              target="_blank"
            >
              <h3>
                12 - Vardhman Market, Summair Club Road, <br /> Oppo Dr. Dangar
                Hospital, <br /> Jamnagar - 361001.
              </h3>
            </a>
          </div>
        </div>

        <div className="followUs">
          <h1>Follow Us</h1>

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100093681932602&tabs&width=500&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width={450}
            height={150}
            style={{ border: "none", overflow: "hidden", borderRadius: "20px" }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
