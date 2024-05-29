import React from "react";
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Component
import ALink from "../../common/ALink";
import OwlCarousel from "../../features/owl-carousel";

// Import Settings
import { HomeSlider } from "../../../utils/data/slider";

// Import Keyframes
import { fadeInUpShorter } from "../../../utils/data/keyframes";

function FooterBannerSection({ data }) {

  const options = {
    items: 1, // Number of items to show
    // margin: 50, // Space between items
    loop: true, // Enable loop
    autoplay: false, // Autoplay the slider
    autoplayTimeout: 3000,
    // Autoplay interval (3 seconds in this example)
    dots: false,
    nav:true
  };
  return (
    <div className="mt-4">
      <OwlCarousel adClass="home-slider nav-circle mb-2" options={options}>
        {data?.images?.map((item, imgIndex) => {
          return (
            <div key={imgIndex} style={{ maxHeight: "550px" }} className="bannerheight" style={{ cursor: "pointer" }} onClick={() => {
              if (data?.buttons && data?.buttons.length > 0 && data?.buttons[0]?.redirectionURL) {
                router.push(data?.buttons[0]?.redirectionURL);
              }
            }}
            >
              <img src={item.fileURL} alt="Image" style={{ height: "100%", maxHeight: "550px", objectFit: "cover" }} />
            </div>
          );
        }
        )}
        {/* <div className="home-slide home-slide1 banner">
          <figure className="mb-0">
            <LazyLoadImage
              alt="Home Slide"
              src="images/home/slider/footer1.svg"
              threshold={500}
              effect="black and white"
              width="100%"
              height={350}
            />
           
          </figure>
          <figure className="mb-0">
            <LazyLoadImage
              alt="Home Slide"
              src="images/home/slider/footer1.svg"
              threshold={500}
              effect="black and white"
              width="100%"
              height={350}
            />
           
          </figure>

          <div className="container d-flex align-items-sm-center justify-content-sm-between justify-content-center flex-column flex-sm-row">
            <div className="banner-content content-left text-sm-right mb-sm-0 mb-2"></div>

            <div className="banner-content content-right"></div>
          </div>
        </div>

        <div className="home-slide home-slide2 banner banner-md-vw">
          <figure className="mb-0">
            <LazyLoadImage
              alt="Home Slide"
              src="images/home/slider/home1.svg"
              threshold={500}
              effect="black and white"
              width="100%"
              height={350}
            />
          </figure>

          <div className="container d-flex align-items-sm-center justify-content-center justify-content-sm-between flex-column-reverse flex-sm-row">
            <div className="banner-content content-left mt-2 mt-sm-0"></div>

            <div className="banner-content content-right text-sm-right"></div>
          </div>
        </div> */}
      </OwlCarousel >
    </div >
  );
}

export default React.memo(FooterBannerSection);
