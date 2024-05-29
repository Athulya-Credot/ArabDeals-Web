import React from 'react';

function ShopBanner ( { adClass } ) {
    return (
        <div className={ `category-banner banner banner2 d-flex align-items-center justify-content-end ${adClass}` } style={ { backgroundImage: 'url(images/home/banners/banner2.jpg)' } }>
            <div className="container d-flex align-items-center justify-content-end">
                <div className="banner-layer text-right pt-0">
                    <h4 className="text-dark mb-0 pl-3 pr-3 pt-1 pb-1">TOP ELECTRONIC<br />FOR GIFTS
                                        </h4>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ShopBanner );