import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';

// Import Utils
import { fadeIn } from '../../../utils/data/keyframes'

function PromoSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
            <div className="promo-section bg-white">
                <div className="promo-banner banner container text-uppercase bg-transparent">
                    <div className=" banner-content d-flex align-items-center justify-content-center flex-column
                            flex-md-row text-center">
                        <h1 className="text-white text-animate text-shadow font1">DOWNLOAD OUR APP DOWNLOAD OUR APP
                        DOWNLOAD OUR APP DOWNLOAD OUR
                                    APP DOWNLOAD OUR APP DOWNLOAD OUR APP DOWNLOAD OUR APP DOWNLOAD OUR APP</h1>
                        <h6 className="font1 mb-md-0 mb-1 pt-2 pt-md-0 pb-1">EXCLUSIVE SALES, GET IT NOW!</h6>
                        <h4 className="d-inline-block mb-0 pl-3 pr-3 pt-1 pb-1 mb-md-0 mb-1">DOWNLOAD OUR APP</h4>
                        <ALink href="/shop" className="btn btn-dark">Get NOW!</ALink>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export default React.memo( PromoSection );