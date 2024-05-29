import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductCountdown from '../../features/product-countdown';
import ProductOne from '../../features/products/product-one';
import ProductThree from '../../features/products/product-three';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'
import { productSlider } from '../../../utils/data/slider';

function SelectedCollection ( props ) {
    const { latest, bestSelling, topRated } = props;

    return (
        <section className="selected-collection">
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <div className="product-slider-tab selected-products-section bg-white">
                    <Tabs selectedTabClassName="active" selectedTabPanelClassName="active show">
                        <div className="heading shop-list d-flex flex-lg-row flex-column align-items-lg-center bg-gray mb-0 pl-0 pr-0 pt-2">
                            <h4 className="section-title text-transform-none mb-0 ml-0">Selected Products</h4>

                            <TabList className="nav justify-content-lg-center mb-0">
                                <Tab className="nav-item">
                                    <ALink href="#" className="nav-link">Best Sellers</ALink>
                                </Tab>

                                <Tab className="nav-item">
                                    <ALink href="#" className="nav-link">New Arrivals</ALink>
                                </Tab>

                                <Tab className="nav-item">
                                    <ALink href="#" className="nav-link">Best Ratings</ALink>
                                </Tab>
                            </TabList>

                            <ALink className="view-all ml-auto" href="/shop">View All<i className="fas fa-long-arrow-alt-right"></i></ALink>
                        </div>

                        <div className="tab-content">
                            <TabPanel className="tab-pane fade">
                                <OwlCarousel adClass="products-slider nav-outer carousel-with-bg nav-circle show-nav-hover nav-image-center pb-0" options={ productSlider }>
                                    {
                                        bestSelling ?
                                            bestSelling.slice( 0, 7 ).map( ( item, index ) => (
                                                <ProductOne
                                                    adClass="inner-quickview inner-icon"
                                                    product={ item }
                                                    key={ "product-one" + index }
                                                />
                                            ) )
                                            :
                                            [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                                <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                            )
                                    }
                                </OwlCarousel>
                            </TabPanel>

                            <TabPanel className="tab-pane fade">
                                <OwlCarousel adClass="products-slider nav-outer carousel-with-bg nav-circle show-nav-hover nav-image-center pb-0" options={ productSlider }>
                                    {
                                        latest ?
                                            latest.slice( 0, 7 ).map( ( item, index ) => (
                                                <ProductOne
                                                    adClass="inner-quickview inner-icon"
                                                    product={ item }
                                                    key={ "product-one" + index }
                                                />
                                            ) )
                                            :
                                            [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                                <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                            )
                                    }
                                </OwlCarousel>
                            </TabPanel>

                            <TabPanel className="tab-pane fade">
                                <OwlCarousel adClass="products-slider nav-outer carousel-with-bg nav-circle show-nav-hover nav-image-center pb-0" options={ productSlider }>
                                    {
                                        topRated ?
                                            topRated.slice( 0, 7 ).map( ( item, index ) => (
                                                <ProductOne
                                                    adClass="inner-quickview inner-icon"
                                                    product={ item }
                                                    key={ "product-one" + index }
                                                />
                                            ) )
                                            :
                                            [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                                <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                            )
                                    }
                                </OwlCarousel>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </Reveal >

            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <div className="top-notice bg-dark text-white top-notice-bg">
                    <div className="container text-center d-flex align-items-center justify-content-center flex-column flex-xl-row ">
                        <img src="images/home/shop-logo.png" width="116" height="23" alt="logo" />
                        <h5 className="d-inline-block mb-0 pl-3 pr-3 pt-1 pb-1">The Lowest Prices Once A Month! Hurry To Snap Up</h5>
                        <ALink href="/shop" className="btn btn-darkcategory ls-n-0 mt-xl-0 mt-1">SHOP NOW!</ALink>
                    </div>
                </div>
            </Reveal>
        </section >

    );
}

export default React.memo( SelectedCollection );