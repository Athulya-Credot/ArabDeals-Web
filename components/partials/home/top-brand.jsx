import React, { useState, useEffect } from "react";
import Reveal from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Import Custom Component
import ALink from "../../common/ALink";
import ProductOne from "../../features/products/product-one";
import OwlCarousel from "react-owl-carousel2";

// Import Settigns
import { fadeIn } from "../../../utils/data/keyframes";
import { productSlider } from "../../../utils/data/slider";
import { useQuery } from "@apollo/react-hooks";
import { gql, useMutation, useLazyQuery } from "@apollo/client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


export const TOP_BRANDS = gql`query GetAllTopBrandRecords($input: BrandRecordsFilter) {
  getAllTopBrandRecords(input: $input) {
    maxRecords
    message
    records {
      _id
      brandName
      logo {
        fileType
        originalName
        fileURL
      }
    }
  }
}`;

function TopBrand({ sectionFourData }) {
  const { data, loading, error } = useQuery(TOP_BRANDS);
  const options = {
    items: 7, // Number of items to show
    // Space between items
    loop: true, // Enable loop
    // autoplay: true, // Autoplay the slider
    autoplayTimeout: 3000,
    // Autoplay interval (3 seconds in this example)
    dots: false,
    responsive: {
      0: {
        items: 4,
        loop: true,
        autoplay: true// Number of items to show on small screens
      },
      768: {
        items: 5, // Number of items to show on medium screens
      },
      992: {
        items: 7, // Number of items to show on large screens
      },
    },
    nav: false,
  };



  const [startIndex, setStartIndex] = useState(0);
  const [brandsPerPage, setBrandsPerPage] = useState(window.innerWidth < 700 ? 4 : 7);
  // const brandsPerPage = 7;
  const totalBrands = data?.getAllTopBrandRecords?.records.length || 0;
  const handleNext = () => {
    if (startIndex + brandsPerPage >= totalBrands) {
      setStartIndex(0); // If reaching the end, loop back to the beginning
    } else {
      setStartIndex(startIndex + 1);
    }

  };

  const handlePrev = () => {
    if (window.innerWidth > 700) {
      if (totalBrands > 7) {

        if (startIndex === 0) {
          setStartIndex(totalBrands - brandsPerPage); // If at the beginning, loop to the end
        } else {
          setStartIndex(startIndex - 1);
        }
      }
    }
    else {
      if (startIndex === 0) {
        setStartIndex(totalBrands - brandsPerPage); // If at the beginning, loop to the end
      } else {
        setStartIndex(startIndex - 1);
      }
    }

  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setBrandsPerPage(4); // If screen width is less than 700, set to 4
      } else {
        setBrandsPerPage(7); // Otherwise, set to default 7
      }
    };

    window.addEventListener('resize', handleResize);
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);



  return (
    <>
      <div className="container custom-brand-title" >
        <div>
          <h4 className="mb-4 mt-4" style={{ borderBottom: "1px solid #EEE", paddingBottom: "20px" }}>Top Brands</h4>
        </div>
      </div>
      <div className="mb-5 mt-5 custom-brandouter-container"
      // style={{display:"flex",alignItems:"center",padding:"0 60px"}}
      >
        <div className="custom-top-prevbutton" onClick={handlePrev}><MdKeyboardArrowLeft style={{ color: "black", fontSize: "20px" }} /></div>
        <div className="custom-topbrandcontainer container">
          {/* <OwlCarousel options={options} autoplay> 
           {data && data?.getAllTopBrandRecords?.records.map((brand, index) => (
              <div key={index} className=" item mb-4 custom-brand" >
                {brand.logo && (<img
                  src={brand.logo.fileURL}
                  alt={`Brand ${index + 1}`}
                  style={{ width: "128px", height: "128px"}}
                />)}
              </div>
            ))} 
           </OwlCarousel> */}
          {data && data?.getAllTopBrandRecords?.records
            .slice(startIndex, startIndex + brandsPerPage)
            .map((brand, index) => (
              <div key={index} className="item  custom-brand">
                {brand.logo && (
                  <img
                    src={brand.logo.fileURL}
                    alt={`Brand ${startIndex + index + 1}`}
                  // style={{ width: "128px", height: "128px" }}
                  />
                )}
              </div>
            ))}
          {/* {data && data?.getAllTopBrandRecords?.records.map((brand, index) => (
              <div key={index} className=" item mb-4 custom-brand" >
                {brand.logo && (<img
                  src={brand.logo.fileURL}
                  alt={`Brand ${index + 1}`}
                  style={{ width: "128px", height: "128px"}}
                />)}
              </div>
            ))} */}
        </div>

        {/* </div> */}
        <div className="custom-top-prevbutton" onClick={handleNext}><MdKeyboardArrowRight style={{ color: "black", fontSize: "20px" }} /></div>
      </div>
      <div className="custom-topbrand-img mt-9">
        <img src={sectionFourData?.images[0]?.fileURL} />
      </div>
    </>
  );
}

export default React.memo(TopBrand);
