import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import ALink from "./ALink";
import { RiVisaLine } from "react-icons/ri";
import { FaStripe, FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import withApollo from "../../server/apollo";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

const GET_ALL_CATEGORY = gql`
  query GetAllChildCategories($input: GetAllChildLevelCategoriesInput!) {
    getAllChildCategories(input: $input) {
      records {
        categoryName
        _id
        isBlocked
        fullCategoryName
        isLeaf
        description
      }
    } 
  }
`;


const GET_ALL_BRANDS = gql`query GetAllTopBrandRecords($input: BrandRecordsFilter) {
  getAllTopBrandRecords(input: $input) {
    maxRecords
    message
    records {
      brandName
      _id
    }
  }
}`;
function Footer() {
  const token = localStorage.getItem("arabtoken");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const { data: categoryData } = useQuery(GET_ALL_CATEGORY, {
    variables: {
      input: {
        parent: null
      }
    }
  });

  const { data: brndData } = useQuery(GET_ALL_BRANDS);

  // const router = useRouter();
  // const handleLog = () => {
  //   console.log("click");
  //   if (localStorage.getItem("arabtoken")) {
  //     console.log("ccc");
  //     router.push("/pages/account");
  //   }
  //   else {
  //     router.push("/pages/login");
  //   }
  // };


  useEffect(() => {
    if (categoryData && categoryData.getAllChildCategories && categoryData.getAllChildCategories.records) {
      // remove default category 
      const filteredCategories = categoryData.getAllChildCategories.records.filter((category) => category.categoryName?.toLowerCase() !== "default");
      setCategories(filteredCategories.slice(0, 6));
    }
    if (brndData && brndData.getAllTopBrandRecords && brndData.getAllTopBrandRecords.records) {
      setBrands(brndData.getAllTopBrandRecords.records);
    }
  }, [categoryData, brndData]);

  return (
    <>
      <footer className="footer font2">
        <div className="container">
          {/* <div className="widget-newsletter d-flex align-items-center align-items-sm-start flex-column flex-lg-row  justify-content-lg-between">
                    <div className="widget-newsletter-info text-center text-sm-left d-flex flex-column flex-sm-row align-items-center mb-1 mb-xl-0">
                        <i className="icon-envolope"></i>
                        <div className="widget-info-content">
                            <h5 className="widget-newsletter-title mb-0">
                                Subscribe To Our Newsletter</h5>
                            <p className="widget-newsletter-content mb-0">Get all the latest information
                            on Events, Sales and Offers.
                            </p>
                        </div>
                    </div>

                    <form action="#" className="mb-0 w-lg-max mt-2 mt-md-0">
                        <div className="footer-submit-wrapper d-flex align-items-center">
                            <input type="email" className="form-control mb-0" placeholder="Your E-mail Address" size="40"
                                required />
                            <button type="submit" className="btn btn-primary btn-sm">Subscribe
                                Now!</button>
                        </div>
                    </form>
                </div> */}

          <div className="footer-top" style={{
            padding: "60px 0 0 0",
          }}>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <h3 className="widget-title">IMPORTANT LINKS</h3>
                  <div className="widget-content">
                    <ul>
                      <li>
                        <ALink href="#">Privacy& Policy</ALink>
                      </li>
                      <li>
                        <ALink href={token ? "/pages/orders" : "#"}>Orders</ALink>
                      </li>
                      <li>
                        <ALink href="#">Become a seller</ALink>
                      </li>
                      {/* <li>
                      <ALink href="#">Orders History</ALink>
                    </li>
                    <li>
                      <ALink href="#">Advanced Search</ALink>
                    </li> */}
                      <li>
                        <ALink href="/pages/login">Login</ALink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
              <h3 className="widget-title">More Information</h3>
                  <div className="widget-content">
                    <ul>
                <li>
                        <ALink href={token ? "/pages/account" : "/pages/login"}>My Profile</ALink>
                      </li>
                      <li>
                        <ALink href={token ? "/pages/wishlist" : "/pages/login"}>whislist</ALink>
                      </li>
                      <li>
                        <ALink href="/pages/cart">Cart</ALink>
                      </li>
                      <li>
                        <ALink href="/pages/offers">OfferZone</ALink>
                      </li>
                    </ul>
                  </div>
            </div> 
            <div className="col-md-6 col-lg-3">
                <div className="widget">
                  <h3 className="widget-title">Social Media</h3>
                  <div className="widget-content">
                    <div className="social-icons" style={{ display: "flex", gap: "20px" }}>
                      <ALink
                        href="#"
                        className="social-icon social-facebook icon-facebook"
                        title="Facebook"
                      ></ALink>
                      <div className="twitter-cus-icon" style={{ width: "40px", height: "40px" }}> <FaXTwitter className="twitter-color" /></div>
                      <div className="twitter-cus-icon" style={{ width: "40px", height: "40px" }}> <FaLinkedinIn className="twitter-color" /></div>
                      <div className="twitter-cus-icon" style={{ width: "40px", height: "40px" }}> <AiFillYoutube className="twitter-color" /></div>

                      {/* <ALink
                      href="#"
                      className="social-icon social-instagram icon-instagram"
                      title="Instagram"
                    ></ALink> */}
                    </div>
                  </div>
                </div>
               
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="widget">
                <h3 className="widget-title">PAYMENT METHODS</h3>
                <div >

                  <div className="custom-pay" style={{ display: "flex", gap: "10px" }}>

                    <ALink href="#"><img src="/images/visa.svg" /></ALink>
                    <ALink href="#"><img src="/images/paypal.svg" /></ALink>
                    <ALink href="#"><img src="/images/stripe.svg" /></ALink>
                    <ALink href="#"><img src="/images/verisign.svg" /></ALink>
                  </div>

                </div>  
                </div>
              </div>

              
            </div>
          </div>

          {/* mobile footer */}
          <div className="responsive-footer" style={{ marginTop: "56px" }}>
            <div className="col-md-12 offset-lg-1 col-lg-3 custom-helpline">

              <img src="images/helpline.svg" style={{ width: "30px" }} />
              <p style={{ color: "rgba(27, 27, 27, 1)" }}>Helpline</p>
              <h4>1800 456 84788</h4>
            </div>
            <div className="footer-flexcolumns">
              <div className="footer-sub">
                <h6 style={{ letterSpacing: "0.75px" }}>IMPORTANT LINKS</h6>
                <span>Privacy & Policy</span>
                <span>Become a Seller</span>
                <span>Orders</span>
                {/* <span>Orders History</span>
  <span>Rhoncus</span> */}

              </div>
              <div className="footer-sub">
                <h6 style={{ letterSpacing: "0.75px" }}>More Information</h6>
                <ALink href={token ? "/pages/account" : "/pages/login"}><span>My Profile</span></ALink>
                <ALink href={token ? "/pages/whislist" : "/pages/login"}><span>whislist</span></ALink>
                <ALink href= "/pages/cart"><span>Cart</span></ALink>
                <ALink href="/pages/offers"><span>OfferZone</span></ALink>
              

              </div>

            </div>
            <div className="footer-socialdiv">
              <h6>SOCIAL MEDIA</h6>
              <div className="footer-socialmedia">
                <div className="social-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path d="M11.7577 4.67167H13.1165V2.3733C12.4586 2.30489 11.7976 2.27112 11.1361 2.27212C9.17024 2.27212 7.82592 3.47189 7.82592 5.66907V7.56269H5.60706V10.1357H7.82592V16.7272H10.4857V10.1357H12.6973L13.0298 7.56269H10.4857V5.92204C10.4857 5.16314 10.688 4.67167 11.7577 4.67167Z" fill="#121212" />
                  </svg>
                </div>
                <div className="social-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <rect x="0.598267" y="0.82666" width="17.3462" height="17.3462" rx="8.67308" fill="#E9E9E9" />
                    <path d="M16.499 5.0187C15.9557 5.25438 15.3812 5.41019 14.7932 5.48126C15.4135 5.11072 15.8783 4.52779 16.1014 3.8406C15.5186 4.18757 14.8805 4.43203 14.215 4.56336C13.7702 4.08097 13.1779 3.75987 12.5309 3.65041C11.8839 3.54095 11.2189 3.64933 10.6401 3.95855C10.0614 4.26777 9.60164 4.76033 9.33299 5.359C9.06435 5.95766 9.00201 6.62856 9.15575 7.26647C7.97724 7.20686 6.82445 6.9 5.77227 6.36581C4.72009 5.83163 3.79206 5.08208 3.04845 4.16584C2.78764 4.6213 2.65059 5.1371 2.65094 5.66195C2.65001 6.14936 2.76963 6.62944 2.99913 7.05944C3.22863 7.48945 3.5609 7.85603 3.96635 8.12655C3.4951 8.11373 3.03392 7.98727 2.62203 7.75794V7.79408C2.62556 8.47701 2.86487 9.13775 3.29948 9.66455C3.73409 10.1913 4.33731 10.5519 5.00712 10.6851C4.74928 10.7636 4.48159 10.8049 4.21209 10.808C4.02554 10.8058 3.83946 10.7889 3.65557 10.7574C3.84631 11.3448 4.21543 11.8582 4.71157 12.2261C5.20771 12.594 5.80619 12.7981 6.42373 12.81C5.38094 13.6305 4.09348 14.0783 2.76658 14.0821C2.52499 14.0829 2.28359 14.0684 2.04382 14.0387C3.39858 14.9134 4.97736 15.3778 6.58996 15.3758C7.70278 15.3873 8.80675 15.177 9.83739 14.7572C10.868 14.3373 11.8047 13.7163 12.5926 12.9303C13.3805 12.1444 14.004 11.2094 14.4265 10.1798C14.849 9.15027 15.0621 8.04685 15.0534 6.934C15.0534 6.81113 15.0534 6.68103 15.0534 6.55094C15.6206 6.12799 16.1097 5.60949 16.499 5.0187Z" fill="#121212" />
                  </svg>
                </div>
                <div className="social-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <g clipPath="url(#clip0_198_9113)">
                      <rect width="14.8094" height="14.1923" transform="translate(0.946411 0.403931)" fill="#E9E9E9" />
                      <path d="M0.946411 2.05265C0.946411 1.57479 1.11319 1.18056 1.44673 0.869961C1.78027 0.559351 2.21388 0.404053 2.74755 0.404053C3.2717 0.404053 3.69576 0.556957 4.01978 0.862793C4.35332 1.17818 4.5201 1.58912 4.5201 2.09566C4.5201 2.5544 4.3581 2.93667 4.03408 3.24251C3.70054 3.55789 3.26216 3.71559 2.71896 3.71559H2.70467C2.18052 3.71559 1.75645 3.55789 1.43243 3.24251C1.10841 2.92713 0.946411 2.5305 0.946411 2.05265ZM1.13224 14.5963V5.02013H4.30568V14.5963H1.13224ZM6.06393 14.5963H9.23737V9.24914C9.23737 8.91463 9.27549 8.65659 9.35173 8.47502C9.48514 8.15007 9.68765 7.8753 9.95925 7.65072C10.2309 7.42612 10.5715 7.31383 10.9813 7.31383C12.0487 7.31383 12.5823 8.03539 12.5823 9.47851V14.5963H15.7558V9.10579C15.7558 7.69133 15.4222 6.61855 14.7551 5.88743C14.088 5.15632 13.2065 4.79076 12.1106 4.79076C10.8813 4.79076 9.92352 5.32118 9.23737 6.38201V6.41069H9.22307L9.23737 6.38201V5.02013H6.06393C6.08299 5.32595 6.09252 6.27688 6.09252 7.87292C6.09252 9.46895 6.08299 11.7101 6.06393 14.5963Z" fill="#121212" />
                    </g>
                    <defs>
                      <clipPath id="clip0_198_9113">
                        <rect width="14.8094" height="14.1923" fill="white" transform="translate(0.946411 0.403931)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="social-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <g clipPath="url(#clip0_198_9118)">
                      <rect x="0.139404" y="0.82666" width="17.3462" height="17.3462" rx="8.67308" fill="#E9E9E9" />
                      <path d="M16.7628 7.84466C16.7986 6.81014 16.5723 5.78337 16.1051 4.85967C15.7881 4.48066 15.3482 4.22488 14.862 4.13692C12.8509 3.95444 10.8316 3.87965 8.81253 3.91286C6.80084 3.87814 4.78873 3.95052 2.78474 4.12969C2.38854 4.20176 2.02188 4.3876 1.72951 4.66453C1.07903 5.26442 1.00676 6.29073 0.934482 7.15804C0.829619 8.71743 0.829619 10.2821 0.934482 11.8415C0.955392 12.3297 1.02807 12.8142 1.15131 13.287C1.23846 13.6521 1.41477 13.9898 1.66447 14.27C1.95882 14.5616 2.33402 14.758 2.74137 14.8337C4.29958 15.0261 5.86962 15.1058 7.43929 15.0722C9.96894 15.1084 12.1878 15.0722 14.8114 14.8699C15.2288 14.7988 15.6145 14.6021 15.9172 14.3061C16.1196 14.1037 16.2707 13.8559 16.3581 13.5833C16.6166 12.7902 16.7435 11.9601 16.7339 11.126C16.7628 10.7212 16.7628 8.27831 16.7628 7.84466ZM7.1791 11.5596V7.08576L11.4578 9.33354C10.258 9.99847 8.6752 10.7501 7.1791 11.5596Z" fill="#121212" />
                    </g>
                    <defs>
                      <clipPath id="clip0_198_9118">
                        <rect x="0.139404" y="0.82666" width="17.3462" height="17.3462" rx="8.67308" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="custom-paymentdiv">
                <h6>Payment Methods</h6>
                <div style={{ display: "flex", gap: "10px" }}>

                  <div className="custom-pay">
                    <RiVisaLine style={{ fontSize: "40px", fontWeight: "600" , fill:"black" }} /></div>
                  <div className="custom-pay"><FaStripe style={{ fontSize: "40px", fontWeight: "600" , fill:"black" }} /></div>
                </div>
              </div>
            </div>

          </div>
          {/* ,,,,,,,,,, */}
        </div>
      </footer>
      <footer className="footer font2" style={{ background: "#F4F4F4", marginTop: "5.5rem" }}>
        <div className="">
          <div className="footer-middle container">
            <div className="row">
              <div className="col-md-12 col-lg-8 mb-3 mb-lg-0">
                <ul className="footer-category-list mb-0">
                  <li>
                    <h4 className="d-inline-block">Categories:</h4>{" "}
                    {categories.map((value, index) => (
                      <React.Fragment key={index}>
                        <ALink
                          href={{
                            pathname: "/shop",
                            query: { category: value._id },
                          }}
                        >
                          {value.categoryName}
                        </ALink>{" "}
                        {index !== categoryData.getAllChildCategories.records.length - 1 && "| "}
                      </React.Fragment>
                    ))}


                    {/* <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "accessories" },
                    }}
                  >
                    Accessories{" "}
                  </ALink>
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "dresses-and-skirts" },
                    }}
                  >
                    Dresses &amp; Skirts
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "shoes-and-boots" },
                    }}
                  >
                    Shoes &amp; Boots
                  </ALink>{" "}
                  |{" "} */}
                    <ALink className="view-all" href={{ pathname: "/shop" }}>
                      View All
                    </ALink>
                  </li>
                  <li>
                    <h4 className="d-inline-block">Brands:</h4>{" "}
                    {brands?.map((value, index) => (
                      <React.Fragment key={index}>
                        <ALink
                          href={{
                            pathname: "/shop",
                            query: { category: value._id },
                          }}
                        >
                          {value.brandName}
                        </ALink>{" "}
                        {index !== brndData.getAllTopBrandRecords?.records.length - 1 && "| "}
                      </React.Fragment>
                    ))}
                    {/* <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "electronic-and-cigarettes" },
                    }}
                  >
                    Electronic Cigarettes
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "batteries" },
                    }}
                  >
                    Batteries{" "}
                  </ALink>
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "chargers" },
                    }}
                  >
                    Chargers{" "}
                  </ALink>
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "home-and-electronic" },
                    }}
                  >
                    Home Electronic
                  </ALink>{" "}
                  |{" "} */}

                    <ALink className="view-all" href={{ pathname: "/shop" }}>
                      View All
                    </ALink>
                  </li>
                  {/* <li>
                  <h4 className="d-inline-block">Gifts:</h4>{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "gifts-for-boyfriend" },
                    }}
                  >
                    Gifts for Boyfriend
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "gifts-for-husband" },
                    }}
                  >
                    Gifts for Husband
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "gifts-for-dad" },
                    }}
                  >
                    Gifts for Dad
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "gifts-for-grandpa" },
                    }}
                  >
                    Gifts for Grandpa
                  </ALink>{" "}
                  |{" "}
                  <ALink className="view-all" href={{ pathname: "/shop" }}>
                    View All
                  </ALink>
                </li>
                <li>
                  <h4 className="d-inline-block">Home &amp; Garden:</h4>{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "sofas-and-couches" },
                    }}
                  >
                    Sofas &amp; Couches
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "armchairs" },
                    }}
                  >
                    Armchairs
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "bed-frames" },
                    }}
                  >
                    Bed Frames
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "bedside-tables" },
                    }}
                  >
                    Bedside Tables
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "dressing-tables" },
                    }}
                  >
                    Dressing Tables
                  </ALink>{" "}
                  |{" "}
                  
                  
                  <ALink className="view-all" href={{ pathname: "/shop" }}>
                    View All
                  </ALink>
                </li>
                <li>
                  <h4 className="d-inline-block">Music:</h4>{" "}
                  <ALink
                    href={{ pathname: "/shop", query: { category: "guitar" } }}
                  >
                    Guitar
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "drums-sets" },
                    }}
                  >
                    Drums Sets
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "percussions" },
                    }}
                  >
                    Percussions
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "pedals-and-effects" },
                    }}
                  >
                    Pedals &amp; Effects{" "}
                  </ALink>
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "sound-cards" },
                    }}
                  >
                    Sound Cards
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "studio-equipments" },
                    }}
                  >
                    Studio Equipments
                  </ALink>{" "}
                  |{" "}
                  
                  <ALink href="/shop" className="view-all">
                    View All
                  </ALink>
                </li>
                <li>
                  <h4 className="d-inline-block">Sports:</h4>{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "sports-and-fitness" },
                    }}
                  >
                    Sports &amp; Fitness
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "boating-and-Sailing" },
                    }}
                  >
                    Boating &amp; Sailing
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "clothing" },
                    }}
                  >
                    Clothing
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "exercise-and-fitness" },
                    }}
                  >
                    Exercise &amp; Fitness
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{ pathname: "/shop", query: { category: "golf" } }}
                  >
                    Golf
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "hunting-and-fishing" },
                    }}
                  >
                    Hunting &amp; Fishing
                  </ALink>{" "}
                 
                 
                 
                 
                  |&nbsp;
                  <ALink className="view-all" href={{ pathname: "/shop" }}>
                    View All
                  </ALink>
                </li> */}
                </ul>
              </div>

              <div className="col-md-12 offset-lg-1 col-lg-3 custom_userborder-dev  custom-helplineweb" >
                <div>

                <img src="images/helpline.svg" style={{ width: "30px" }} />
                <p className="dev-helpline-p"style={{ color: "rgba(27, 27, 27, 1)" }}>Helpline</p>
                <h4 className="dev-helpline-h4">1800 456 84788</h4></div>
              </div>

            </div>
          </div>

          <div className="footer-bottom  d-flex align-items-center justify-content-center" style={{ background: "#F4F4F4" }}>
            <span className="footer-copyright pb-4">
              Arab Deals © 2024. All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(Footer);
