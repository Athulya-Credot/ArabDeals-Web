import React from 'react'
import ProductOne from "../../features/products/product-one";
export default function appleproducts({ products }) {
  return (
    <div className='custom-mobOnlyapple'>
    <div className='custom-apple-title'>
Apple Products
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
<path d="M8 9L15.7942 0H0.205771L8 9Z" fill="white"/>
</svg>
    </div>
    <div className='apple-container'>
    <div className="row row-joined">
                {products
                  ? products
                      .filter((item) => item.until === null)
                      .slice(0, 6)
                      .map((item, index) => (
                        <div
                          className="col-xl-4 col-sm-4 col-6"
                          key={"All Products:" + index}
                          style={{ border: "1px solid rgba(185, 185, 185, 1)" }}
                        >
                          <ProductOne
                            // adClass="inner-quickview inner-icon"
                            product={item}
                            // customStyle="60%"

                          />
                        </div>
                      ))
                  : new Array(8).fill(1).map((item, index) => (
                      <div
                        className="col-xl-3 col-sm-4 col-6"
                        key={"All Products:" + index}
                      >
                        <div
                          className="skel-pro skel-pro-grid"
                          key={"Skeleton:" + index}
                        ></div>
                      </div>
                    ))}
              </div></div>
   </div>
  )
}
