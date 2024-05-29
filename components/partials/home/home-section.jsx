import React from "react";

// Import Custom Component
import OwlCarousel from "../../features/owl-carousel";
import { useRouter } from "next/router";

// Import Settings 
// Import Keyframes

function HomeSection({ offer, data }) {
  const router = useRouter();
  const options = {
    items: 1, // Number of items to show
    // margin: 50, // Space between items
    loop: true, // Enable loop
    autoplay: false, // Autoplay the slider
    // autoplayTimeout: 3000,
    // Autoplay interval (3 seconds in this example)
    // dots: true,
    nav: true
  };
  return (
    <div className="skeleton-body skel-shop-products">
      {/* <MainMenu/> */}
      {!offer ? <OwlCarousel adClass="home-slider nav-circle mb-2 " options={options}>
        {
          data?.images?.map((item, imgIndex) => {
            return (
              <div key={imgIndex} style={{ cursor: "pointer" }} onClick={() => {
                if (data?.buttons && data?.buttons.length > 0 && data?.buttons[0]?.redirectionURL) {
                  router.push(data?.buttons[0]?.redirectionURL);
                }
              }}>
                <img src={item.fileURL} alt="Image" style={{ height: "100%", height: "auto", objectFit: "fill" }} />
              </div>
            );
          })
        }

      </OwlCarousel> :
        <OwlCarousel adClass="home-slider nav-circle mb-2 " options={options}>
          <div>
            <img src={offer?.fileURL} alt="Image" style={{ height: "350px" }} />
          </div>
        </OwlCarousel>
      }
    </div>
  );
}

export default React.memo(HomeSection);
