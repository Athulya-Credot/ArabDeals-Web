import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { infoBoxSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes';

export default function InfoSection () {
    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
            <OwlCarousel adClass="info-boxes-slider owl-theme" options={ infoBoxSlider }>
                <div className="info-box info-box-icon-left">
                    <i className="icon-shipping text-primary"></i>

                    <div className="info-box-content">
                        <h4>FREE SHIPPING &amp; RETURN</h4>
                        <p className="text-body">Free shipping on all orders over $99.</p>
                    </div>
                </div>

                <div className="info-box info-box-icon-left">
                    <i className="icon-money text-primary"></i>

                    <div className="info-box-content">
                        <h4>MONEY BACK GUARANTEE</h4>
                        <p className="text-body">100% money back guarantee</p>
                    </div>
                </div>

                <div className="info-box info-box-icon-left">
                    <i className="icon-support text-primary"></i>

                    <div className="info-box-content">
                        <h4>ONLINE SUPPORT 24/7</h4>
                        <p className="text-body">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="info-box info-box-icon-left">
                    <i className="icon-password-lock text-primary"></i>

                    <div className="info-box-content">
                        <h4>SECURE PAYMENT</h4>
                        <p className="text-body">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </OwlCarousel>
        </Reveal>
    );
}