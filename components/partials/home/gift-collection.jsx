import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'
import { productSlider } from '../../../utils/data/slider';

export default function GiftCollection ( { products } ) {
    return (

        <section className="gift-section">
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <div className="categories-container categories-container-two bg-white">
                    <h4 className="section-title text-transform-none">Gift & Gadgets</h4>

                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
                                <ALink href={ { pathname: '/shop', query: { category: 'her-him' } } }><i className="icon-boy-broad-smile"></i></ALink>
                                <div>
                                    <ALink href={ { pathname: '/shop', query: { category: 'her-him' } } } className="sub-title">For Him</ALink>

                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-boyfriend' } } }>Gifts for Boyfriend</ALink>
                                        </li>

                                        <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-dad' } } }>Gifts for Dad</ALink>
                                        </li>

                                        <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-husband' } } }>Gifts for Husband</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
                                <ALink href={ { pathname: '/shop', query: { category: 'for-her' } } }><i className="icon-smiling-girl"></i></ALink>

                                <div>
                                    <ALink href={ { pathname: '/shop', query: { category: 'for-her' } } } className="sub-title">For Her</ALink>

                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-mom' } } }>Gifts for Mom</ALink>
                                        </li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-girlfriend' } } }>Gifts for Girlfriend</ALink>
                                        </li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-wife' } } }>Gifts for Wife</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
                                <ALink href={ { pathname: '/shop', query: { category: 'for-kids' } } }><i className="icon-smiling-baby"></i></ALink>
                                <div>
                                    <ALink href={ { pathname: '/shop', query: { category: 'for-kids' } } } className="sub-title">For Kids</ALink>
                                    <ul>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-boys' } } }>Gifts for Boys</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-girls' } } }>Gifts for Girls</ALink>
                                        </li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'gifts-for-twin-boys' } } }>Gifts for Twin Boys</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-6">
                            <div className="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
                                <ALink href={ { pathname: '/shop', query: { category: 'birthday' } } }><i className="icon-gift-2"></i></ALink>
                                <div>
                                    <ALink href={ { pathname: '/shop', query: { category: 'birthday' } } } className="sub-title">Birthday</ALink>
                                    <ul >
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'birthday-for-him' } } }>Birthday for Him</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'birthday-for-her' } } }>Birthday for Her</ALink>
                                        </li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'boyfriend-for-gifts' } } }>Boyfriend Gifts</ALink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
            <OwlCarousel adClass="products-slider product-slider-two carousel-with-bg nav-outer show-nav-hover nav-image-center pb-0 nav-circle" options={ productSlider }>
                {
                    products ?
                        products.map( ( item, index ) => (
                            <ProductOne
                                adClass="inner-quickview inner-icon"
                                product={ item }
                                key={ "product-one" + index }
                            />
                        ) )
                        :
                        [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                        )
                }
            </OwlCarousel>

            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <div className="sale-banner banner bg-image mb-4" style={ { backgroundImage: 'url(images/home/banners/banner6.jpg)' } }>
                    <div className="container banner-content">
                        <div className="row no-gutter justify-content-start">
                            <div
                                className="col-auto col-lg-5 col-md-6 col-12 d-flex flex-column justify-content-center content-left text-center text-md-right">
                                <h4 className="align-left text-white text-uppercase">THE PERFECT GIFT FOR YOUR
                                        GIRLFRIEND</h4>
                                <h3 className="text-white mb-0 align-left text-uppercase">GIFT SELECTION ON SALE</h3>
                            </div>
                            <div
                                className="col-auto col-md-2 col-12 col-2 justify-content-center content-center mr-md-3 mr-lg-0  ml-md-4 ml-lg-0">
                                <h2 className="text-white mb-0 position-relative align-left">
                                    50<small>%<ins>OFF</ins></small>
                                </h2>
                            </div>
                            <div
                                className="mb-0 col-md-4 col-12 col-3 col-auto justify-content-center justify-content-md-start content-right">
                                <ALink href="/shop" className="btn btn-lg bg-white text-dark font2">Shop Now!</ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>

    );
}