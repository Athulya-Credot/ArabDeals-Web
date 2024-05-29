import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Component
import ALink from "../../common/ALink";
import { useRouter } from "next/router";

function CartPopup(props) {
  const { product } = props;
  const router = useRouter();


  return (
    <div className="minipopup-area">
      <div className="minipopup-box" style={{ top: "0" }}>
        <div className="product media-with-lazy">
          <figure className="product-media w-100">
            <ALink href={`/product/default/${product._id}`}>
              <LazyLoadImage
                alt="product"
                src={
                  product?.product?.images
                    ? `${product?.product?.images[0]?.fileURL
                    }`
                    : ""
                }
                threshold={500}
                effect="black and white"
                width="100%"
                height="auto"
              />
            </ALink>
          </figure>
          <div className="product-detail">
            {product.index > -1 ? (
              !product.variants[product.index].color ? (
                <ALink
                  className="product-name"
                  href={`/product/default/${product?.product?._id}`}
                >
                  {product.name +
                    " - " +
                    product.variants[product.index].size.name}
                </ALink>
              ) : !product.variants[product.index].size ? (
                <ALink
                  className="product-name"
                  href={`/product/default/${product.slug}`}
                >
                  {product.name +
                    " - " +
                    product.variants[product.index].color.name}
                </ALink>
              ) : (
                <ALink
                  className="product-name"
                  href={`/product/default/${product.slug}`}
                >
                  {product.name +
                    " - " +
                    product.variants[product.index].color.name +
                    ", " +
                    product.variants[product.index].size.name}
                </ALink>
              )
            ) : (
              <ALink
                className="product-name"
                href={`/product/default/${product?.product?._id}`}
              >
                {product?.product?.productName}
              </ALink>
            )}

            <p>has been added to your cart.</p>
          </div>
        </div>
        <div className="product-action">
          <ALink href="/pages/cart" className="btn viewcart">
            View Cart
          </ALink>
          {
            localStorage.getItem("arabtoken") &&
            <div href="/pages/checkout" className="btn btn-dark checkout" onClick={() => router.push("/pages/checkout")}>
              Checkout
            </div>
          }
        </div>
        <button className="mfp-close"></button>
      </div>
    </div>
  );
}

export default React.memo(CartPopup);
