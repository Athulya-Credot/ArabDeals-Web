import Reveal from "react-awesome-reveal";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useLazyQuery } from "@apollo/react-hooks";

// Import Apollo and Query
import { GET_PRODUCTS } from "../../../server/queries";
import withApollo from "../../../server/apollo";

// Import Custom Component
import ALink from "../../common/ALink";
import ProductOne from "../../features/products/product-one";
import { gql, useQuery } from "@apollo/client";
// Import Settings
import { fadeInUpShorter } from "../../../utils/data/keyframes";

function CategoryFilterSection() {
  const [category, setCategory] = useState("");
  const {data,loading,error}=useQuery(GET_PRODUCTS, {variables:{input:{size:10,page:0}}})
  // const [getProducts, { data, loading, error }] = useLazyQuery(GET_PRODUCTS);
  const products = data && data?.getProducts?.records;
  // useEffect(() => {
    
    // getProducts({
    //   variables: {
    //     category: category,
    //     from: 0,
    //     to: 6,
    //   },
    // });
  // }, [category]);

  function getProduct(e, item) {
    e.preventDefault();
    setCategory(item);
  }

  // if (error) {
  //   return useRouter().push("/pages/404");
  // }

  return (
    <section
      className={`category-filter-section skeleton-body skel-shop-products ${
        loading ? "" : "loaded"
      }`}
    >
      <Reveal
        keyframes={fadeInUpShorter}
        delay={200}
        duration={1000}
        triggerOnce
      >
        <div className="container">
          <Tabs
            selectedTabClassName="active"
            selectedTabPanelClassName="active show"
          >
            <div className="row">
              <div className="col-lg-3 pr-lg-3 pr-sm-0 col-sm-6 order-1 order-sm-0">
                <div className="shop-list h-100">
                  <h4
                    style={{
                      color: "rgba(179, 179, 179, 1)",
                      fontWeight: "500",
                      fontSize: "23px",
                      padding: "20px 3.2rem",display:"flex",alignItems:"center",borderBottom:" 1px solid #323232"
                    }}
                  >
                    Sort
                  </h4>

                  <TabList className="nav nav-tabs flex-sm-column border-0">
                    <Tab className="nav-item m-0">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "kids-fashion");
                        }}
                        className="nav-link m-0 p-0"
                      ></a>
                    </Tab>
                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "kids-fashion");
                        }}
                        className="nav-link"
                      >
                        Kids Fashion
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "casual-shoes");
                        }}
                        className="nav-link"
                      >
                        Casual Shoes
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "spring-and-autumn");
                        }}
                        className="nav-link"
                      >
                        Spring & Autumn
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "man");
                        }}
                        className="nav-link"
                      >
                        Man
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "accessories-4");
                        }}
                        className="nav-link"
                      >
                        Accessories
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "pants-and-polos");
                        }}
                        className="nav-link"
                      >
                        Pants & Denim
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "tees-knits-and-polos");
                        }}
                        className="nav-link"
                      >
                        Tees, Knits & Polos
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "watch-fashion");
                        }}
                        className="nav-link"
                      >
                        Watch Fashion
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "woman");
                        }}
                        className="nav-link"
                      >
                        Woman
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "accessories-4");
                        }}
                        className="nav-link"
                      >
                        Accessories
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "dresses-and-skirts");
                        }}
                        className="nav-link"
                      >
                        Dresses & Skirts
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "shoes-and-boots");
                        }}
                        className="nav-link"
                      >
                        Shoes & Boots
                      </a>
                    </Tab>

                    <Tab className="nav-item">
                      <a
                        href="#"
                        onClick={(e) => {
                          getProduct(e, "top-and-blouses");
                        }}
                        className="nav-link"
                      >
                        Top & Blouses
                      </a>
                    </Tab>
                  </TabList>
                  <div
                    style={{
                      background: "rgba(34, 34, 34, 1)",
                      height: "64px",
                      paddingLeft: "28px",
                      paddingTop: "20px",
                    }}
                  >
                    {" "}
                    <ALink
                      className="view-all"
                      href="/shop"
                      style={{ color: "rgba(255, 255, 255, 1)" }}
                    >
                      View All
                    </ALink>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 pl-lg-3 pl-sm-0 order-0">
                <div
                  className="banner banner3"
                  style={{
                    backgroundImage: "url(images/home/banners/sort.svg)",
                  }}
                >
                  <div className="container d-flex justify-content-center">
                    {/* <div className="banner-layer text-center">
                      <h4 className="font1">
                        <i className="font2">
                          Find the Boundaries. Push Through!
                        </i>
                      </h4>

                      <h3 className="text-dark mb-0">MEGA SALE</h3>
                      <h2 className="text-dark">70% OFF</h2>
                      <h5 className="coupon-sale-text justify-content-end">
                        <span className="text-dark">STARTING AT</span>
                        <b className="text-white align-middle">
                          <sup>$</sup>
                          <em className="align-text-top">199</em>
                          <sup>99</sup>
                        </b>
                      </h5>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 tab-content mt-2 mt-lg-0 order-2 order-sm-0">
                {new Array(14).fill(1).map((item, index) => (
                  <TabPanel
                    className={`tab-pane fade ${
                      products && products?.length > 3 ? "" : "h-half"
                    }`}
                    key={"TabPanel: " + index}
                  >
                    <div className="product-content products-with-divide">
                      <div className="row row-joined h-100">
                        {products
                          ? products.slice(0, 6).map((item, index) => (
                              <div
                                className="col-sm-4 col-6"
                                key={"Kitchen:" + index}
                                style={{
                                  border: "1px solid rgba(185, 185, 185, 1)",
                                }}
                              >
                                <ProductOne
                                  adClass="inner-quickview inner-icon"
                                  product={item}
                                />
                              </div>
                            ))
                          : new Array(6).fill(1).map((item, index) => (
                              <div
                                className="col-sm-4 col-6"
                                key={"Skeleton:" + index}
                              >
                                <div className="skel-pro skel-pro-grid"></div>
                              </div>
                            ))}
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </Reveal>
    </section>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(
  CategoryFilterSection
);
