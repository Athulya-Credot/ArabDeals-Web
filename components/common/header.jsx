import { connect } from "react-redux";
import React, { useState } from "react";
// Import Actions
import { actions as WishlistAction } from "../../store/wishlist";

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
import { BiSolidUser } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import styles from "./header.module.css";
import { useRouter } from "next/router";
// import offer from "../../public/images/ticket-discount.svg";
import withApollo from "../../server/apollo.js";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

const GET_WISH_LIST = gql`query Products {
  getWishListProducts {
    products {
      image
      productId
      productName
      sellingPrice
      shortDescription
    }
  }
}`;


const LOG_OUT_USER = gql`mutation LogoutUser {
  logoutUser {
    _id
  }
}
`;

function Header({ adClass = "", wishlist }) {
  // get current path
  const { pathname } = useRouter();
  function openMobileMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("mmenu-active");
    e.currentTarget.classList.toggle("active");
  }

  const [logout, { loading, error }] = useMutation(LOG_OUT_USER);



  const router = useRouter();
  const handleLog = () => {
    // console.log("click");
    if (localStorage.getItem("arabtoken")) {
      // console.log("ccc");
      router.push("/pages/account");
    }
    else {
      router.push("/pages/login");
    }
  };



  const token = localStorage.getItem("arabtoken");

  const {
    data: wishListData,
    loading: wishListLoading,
    error: wishListError,
    refetch: wishListRefetch,
  } = useQuery(GET_WISH_LIST, {
    skip: !token,
  });
  const [showDropdown, setShowDropdown] = useState(null);

  const handleToggleDropdown = () => {
    setShowDropdown(prevState => !prevState);
  };


  // <div className="header-top">
  //   {/* <div className="container">
  //     <div className="header-left d-none d-sm-block">
  //       <div className="info-box info-box-icon-left text-primary justify-content-start p-0">
  //         <i className="icon-shipping"></i>

  //         <div className="info-box-content">
  //           <h4 className="text-transform-none">
  //             FREE Express Shipping On Orders $99+
  //           </h4>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
  //       <div className="header-dropdown">
  //         <ALink href="#">USD</ALink>
  //         <div className="header-menu">
  //           <ul>
  //             <li>
  //               <ALink href="#">EUR</ALink>
  //             </li>
  //             <li>
  //               <ALink href="#">USD</ALink>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>

  //       <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
  //         <ALink href="#">
  //           <i className="flag-us flag"></i>ENG
  //         </ALink>
  //         <div className="header-menu">
  //           <ul>
  //             <li>
  //               <ALink href="#">
  //                 <i className="flag-us flag mr-2"></i>ENG
  //               </ALink>
  //             </li>
  //             <li>
  //               <ALink href="#">
  //                 <i className="flag-fr flag mr-2"></i>FRA
  //               </ALink>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>

  //       <div className="header-dropdown dropdown-expanded d-none d-lg-block">
  //         <ALink href="#">Links</ALink>
  //         <div className="header-menu">
  //           <ul>
  //             <li>
  //               <ALink href="/pages/account">My account</ALink>
  //             </li>
  //             <li>
  //               <ALink href="/pages/cart">Cart</ALink>
  //             </li>
  //             <li>
  //               <ALink href="/pages/login" className="login-link">
  //                 Log In
  //               </ALink>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>

  //       <div className="social-icons">
  //         <ALink
  //           href="#"
  //           className="social-icon social-facebook icon-facebook"
  //         ></ALink>
  //         <ALink
  //           href="#"
  //           className="social-icon social-twitter icon-twitter"
  //         ></ALink>
  //         <ALink
  //           href="#"
  //           className="social-icon social-instagram icon-instagram"
  //         ></ALink>
  //       </div>
  //     </div>
  //   </div> */}
  // </div>

  const handleLogout = async () => {
    try {
      localStorage.clear();
      await logout(); 
      router.push('/pages/login');
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <>
      <header
        className={`header ${adClass} sticky-header mobile-sticky desktop-sticky`}
      >
        <div className="header-middle" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
          <div className="container innercontainer">
            {/* <div className={styles.innercontainer}> */}
            <div className="header-left col-lg-2 w-auto pl-0">
              {/* {pathname !== "/pages/login" &&
                <button
                  className="mobile-menu-toggler mr-2"
                  type="button"
                  onClick={openMobileMenu}
                >
                  <i className="fa fa-bars"></i>
                </button>} */}

              <ALink href="/" className="logo">
                <img
                  src="images/ArabDeal.png"
                  className="w-100"
                  width="111"
                  height="44"
                  alt="Porto Logo"
                />
              </ALink>
            </div>
            {/* </div> */}
            <div className="header-right w-lg-max">
              <SearchForm />
              <div
                className={`d-flex justify-content-center align-items-center ${styles.offerdiv}`}
              >
                <ALink href="/pages/offers" className="logo">
                  <img
                    src="images/ticket-discount.svg"
                    alt="Offer"
                    width="30"
                    height="30"
                    style={{ marginRight: "8px" }}
                  />

                </ALink> 

                <ALink href="/pages/offers"><span>OFFERZONE</span></ALink>
              </div>
              {/* <div1 className="header-dropdown-hide">
                <div
                  className="header-dropdown mr-auto mr-sm-3 mr-md-2 d-sm-none d-md-flex"
                  style={{ background: "rgba(249, 249, 249, 1)" }}
                >
                  <ALink href="#">
                    <img src="/images/uae.svg"></img>UAE
                    <img src="/images/omn.svg" className={styles.flagimg} ></img>OMN
                  </ALink>
                  <div className="header-menu">
                  <ul>
                    <li>
                      <ALink href="#">
                      <img src="/images/uae.svg"></img>UAE
                      </ALink>
                    </li>
                    <li>
                      <ALink href="#">
                      <img src="/images/ind.svg" className={styles.flagimg}></img>IND
                      </ALink>
                    </li>
                    <li>
                      <ALink href="#">
                      <img src="/images/omn.png"className={styles.flagimg} ></img>OMN
                      </ALink>
                    </li>
                    <li>
                      <ALink href="#">
                      <img src="/images/sar.png"className={styles.flagimg} ></img>SAR
                      </ALink>
                    </li>
                  </ul>
                </div>
                </div>
              </div1> */}

              {/* <div1 className="header-dropdown-hide">
                <div
                  className="header-dropdown mr-auto mr-sm-3 mr-md-0 d-sm-none d-md-flex"
                  style={{ background: "rgba(249, 249, 249, 1)", padding: "11px 0px" }}
                >
                  <ALink href="#">
                    <img src="/images/icon/language.svg" style={{ width: "15px", height: "15px" }}></img>
                    <span style={{
                      padding: "0px 5px",
                      borderLeft: "1px solid #EBEBEB",
                    }}> English</span>

                  </ALink>
                  <div className="header-menu">
                  <ul>
                    <li>
                      <ALink href="#" >
                      <img src="/images/british.svg"style={{width:"25px",height:"25px"}}></img>English
                      </ALink>
                    </li>
                    <li>
                      <ALink href="#">
                       
                      <img src="/images/uae.svg" className={styles.flagimg}></img>
                      
                      Arabic
                     
                      </ALink>
                    </li>
                   
                    
                  </ul>
                </div>
                </div>
              </div1> */}



              {/* <ALink href="/pages/account" className="d-lg-block d-none"style={{borderLeft:"1px solid #EBEBEB",marginLeft: "20px"}}> */}
              {!token ?
                <div className="header-user custom_userborder header-icon">
                  <div className={styles.circle} onClick={handleLog} >
                    <BiSolidUser style={{ fontSize: "20px" }} />
                  </div>

                  {/* <div className="header-userinfo">
                  <span>Welcome</span>
                  <h4 className="mb-0">My Account</h4>
                </div> */}
                </div> :
                <div
                  className="header-dropdown  custom_userborder header-icon"
                // style={{ marginLeft:"20px"}}
                >
                  {/* <ALink href="#">
                  <img src="/images/british.svg"style={{width:"25px",height:"25px"}}></img>English
                </ALink> */}
                  <div className={styles.circle} >
                    <BiSolidUser style={{ fontSize: "20px" }} />
                  </div>
                  <div className="header-menu">
                    <ul>
                      <li>
                        <ALink href="/pages/account">
                          <img src="images/icon/vuesax/bold/frame.svg" style={{ width: "25px", height: "25px" }}></img>My Account
                        </ALink>
                      </li>
                      <li onClick={handleLogout}>
                        <ALink href="#" >
                          {/* <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                        <div style={{width:"35px",height:"35px",borderRadius:"50%",overflow:"hidden"}}> */}

                          <img src="images/icon/vuesax/bold/key.svg" className={styles.flagimg}></img>
                          {/* </div> */}
                          Log Out
                          {/* </div> */}
                        </ALink>
                      </li>


                    </ul>
                  </div>
                </div>}
              {/* </ALink> */}

              {/* <div className="header-user header-dropdown">
                <div className={styles.circle} onClick={handleToggleDropdown}>
                  <BiSolidUser style={{ fontSize: "20px" }} />
                </div>
                {showDropdown && (
                    <div className="header-menu "  >
                      <ul style={{width:"120px"}} >
                        <li >Profile</li>
                        <li >Logout</li>
                      </ul>
                    </div>
                )}
              </div> */}


              {token &&
                <ALink
                  href="/pages/wishlist"
                  className="header-icon position-relative"
                  title="wishlist"
                >
                  <div className={styles.circle}>
                    <AiFillHeart style={{ fontSize: "20px" }} />
                  </div>
                  {/* <i className="icon-wishlist-2"></i> */}
                  <span className="wishlist-count badge-circle">
                    {wishListData?.getWishListProducts.products.length}
                  </span>
                </ALink>
              }
              <CartMenu />
            </div>
          </div>
        </div>


      </header>
      {/* <div className="header-bottom d-flex">
          <div className="container">
            <MainMenu />
          </div>
        </div> */}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default withApollo({ ssr: typeof window === "undefined" })(connect(mapStateToProps, WishlistAction)(Header));
