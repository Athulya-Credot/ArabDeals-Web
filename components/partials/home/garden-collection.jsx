import React from "react";
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Import Custom Component
import ALink from "../../common/ALink";
import ProductCountdown from "../../features/product-countdown";
import ProductOne from "../../features/products/product-one";
import ProductThree from "../../features/products/product-three";
import OwlCarousel from "../../features/owl-carousel";

// Import Settigns
import { fadeIn } from "../../../utils/data/keyframes";
import { productSlider } from "../../../utils/data/slider";

function GardenCollection(props) {
  const { latest, bestSelling, topRated, products } = props;
  const slideOption = {
    ...productSlider,
    nav: false,
    responsive: { ...productSlider.responsive, 1200: { items: 4 } },
  };

  return (
    <Reveal keyframes={fadeIn} delay={100} duration={1000} triggerOnce>
      <section className="garden-collection">
        <div className="bg-white">
          <div className="row">
            <div className="col-xl-12 col-xl-12cols pr-xl-0">
              <div className="product-slider-tab appear-animate bg-white carousel-with-bg">
                <Tabs
                  selectedTabClassName="active"
                  selectedTabPanelClassName="active show"
                >
                  <div className="heading shop-list d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
                    <TabList className="nav ml-0 justify-content-center mb-0">
                      <Tab className="nav-item">
                        <ALink href="#" className="nav-link">
                          Iphone
                        </ALink>
                      </Tab>

                      <Tab className="nav-item">
                        <ALink href="#" className="nav-link">
                          Ipad
                        </ALink>
                      </Tab>

                      <Tab className="nav-item">
                        <ALink href="#" className="nav-link">
                          Macbook
                        </ALink>
                      </Tab>
                      <Tab className="nav-item">
                        <ALink href="#" className="nav-link">
                          Watch
                        </ALink>
                      </Tab>
                      <Tab className="nav-item">
                        <ALink href="#" className="nav-link">
                          Airpods
                        </ALink>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="tab-content">
                    <TabPanel className="tab-pane fade">
                      <OwlCarousel
                        adClass="products-slider nav-circle nav-image-center pb-0 border-bottom-1 border-left-1 border-right-1 border-top-0 border-solid custom-border-color"
                        options={slideOption}
                       style={{border:" 1px solid #EEE"}} 
                      >
                        {bestSelling
                          ? bestSelling
                              .slice(0, 6)
                              .map((item, index) => (
                                <ProductOne
                                  adClass="inner-quickview inner-icon"
                                  product={item}
                                  key={"product-one" + index}
                                />
                              ))
                          : [0, 1, 2, 3].map((item, index) => (
                              <div
                                className="skel-pro skel-pro-grid"
                                key={"product-one" + index}
                              ></div>
                            ))}
                      </OwlCarousel>
                    </TabPanel>

                    <TabPanel className="tab-pane fade">
                      <OwlCarousel
                        adClass="products-slider nav-circle nav-image-center pb-0"
                        options={slideOption}
                      >
                        {latest
                          ? latest
                              .slice(0, 6)
                              .map((item, index) => (
                                <ProductOne
                                  adClass="inner-quickview inner-icon"
                                  product={item}
                                  key={"product-one" + index}
                                />
                              ))
                          : [0, 1, 2, 3].map((item, index) => (
                              <div
                                className="skel-pro skel-pro-grid"
                                key={"product-one" + index}
                              ></div>
                            ))}
                      </OwlCarousel>
                    </TabPanel>

                    <TabPanel className="tab-pane fade">
                      <OwlCarousel
                        adClass="products-slider nav-circle nav-image-center pb-0"
                        options={slideOption}
                      >
                        {topRated
                          ? topRated
                              .slice(0, 6)
                              .map((item, index) => (
                                <ProductOne
                                  adClass="inner-quickview inner-icon"
                                  product={item}
                                  key={"product-one" + index}
                                />
                              ))
                          : [0, 1, 2, 3].map((item, index) => (
                              <div
                                className="skel-pro skel-pro-grid"
                                key={"product-one" + index}
                              ></div>
                            ))}
                      </OwlCarousel>
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default React.memo(GardenCollection);
