import { useRouter } from "next/router";
import React from "react";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Actions
import { actions as WishlistAction } from "../../../store/wishlist";
import { actions as CartAction } from "../../../store/cart";
import { actions as ModalAction } from "../../../store/modal";

// Import Custom Component
import ALink from "../../common/ALink";
import ProductCountdown from "../product-countdown";
import { gql, useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import AddToCartPopup from "../modals/add-to-cart-popup";
useQuery;




const POST_CART = gql`
mutation AddToCart($input: addToCartInput!) {
  addToCart(input: $input) {
    message
  }
}
`;

const GET_CART = gql`
query GetCart {
  getCart {
    products {
      _id
      productId
      quantity
      name
      shortDescription
      stock
      color
      size
      price
      image
      sellingPrice
      mrp
    }
    grandTotal
    subTotal
    deliveryCharge
  }
}
`;

function ProductFour(props) {
  const router = useRouter();
  const { adClass = "", link = "default", product } = props;
  const token = localStorage.getItem("arabtoken");


  const [addToCart] = useMutation(POST_CART);

  const { data: cartData, loading: cartLoading, error: cartError, refetch: cartRefetch, } = useQuery(GET_CART, { skip: !token, fetchPolicy: "network-only" });

  function isSale() {
    return product.price[0] !== product.price[1] &&
      product.variants.length === 0
      ? "-" +
      (
        (100 * (product.price[1] - product.price[0])) /
        product.price[1]
      ).toFixed(0) +
      "%"
      : product.variants.find((variant) => variant.sale_price)
        ? "Sale"
        : false;
  }

  function isInWishlist() {
    return (
      product &&
      props.wishlist.findIndex((item) => item.slug === product.slug) > -1
    );
  }

  function onWishlistClick(e) {
    e.preventDefault();
    if (!isInWishlist()) {
      let target = e.currentTarget;
      target.classList.add("load-more-overlay");
      target.classList.add("loading");

      setTimeout(() => {
        target.classList.remove("load-more-overlay");
        target.classList.remove("loading");
        props.addToWishList(product);
      }, 1000);
    } else {
      router.push("/pages/wishlist");
    }
  }

  function onAddCartClick(e) {
    e.preventDefault();
    if (localStorage.getItem("arabtoken")) {
      try {
        if (product.stock > 0 && !e.currentTarget.classList.contains("disabled")) {
          const response = addToCart({
            variables: {
              input: {
                productId: product._id,
                quantity: 1,
              },
            },
          });

          if (response) {
            cartRefetch();
            return toast(<AddToCartPopup product={{ product }} />);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart) {
        const productIndex = localCart.findIndex((item) => item.productId === product._id);
        if (productIndex > -1) {
          localCart[productIndex].quantity += 1;
        } else {
          localCart.push({
            productId: product._id,
            quantity: 1,
            name: product.productName,
            shortDescription: product.shortDescription,
            stock: product.stock,
            color: product.color,
            size: product.size,
            price: product.price,
            image: product.images[0] && product.images[0].fileURL,
            sellingPrice: product.sellingPrice,
            mrp: product.mrp,
          });
        }
        localStorage.setItem("cart", JSON.stringify(localCart));
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            {
              productId: product._id,
              quantity: 1,
              name: product.productName,
              shortDescription: product.shortDescription,
              stock: product.stock,
              color: product.color,
              size: product.size,
              price: product.price,
              image: product.images[0] && product.images[0].fileURL,
              sellingPrice: product.sellingPrice,
              mrp: product.mrp,
            },
          ])
        );
      }
    }
    return toast(<AddToCartPopup product={{ product }} />);
  }


  function onQuickViewClick(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return (
    <div
      className={`product-default custom-product-resp media-with-lazy ${adClass}`}
      style={{ border: "1px solid rgba(185, 185, 185, 1)",marginRight:"20px" }}
    >
      {/* <figure> */}
      <ALink href={`product/default/${product?._id}`}>
        <span style={{ display: "flex", justifyContent: "center", maxHeight: "383px" }}>
          {/* <img src={"images/iphone.svg"} style={{ marginTop: "74px" }} /> */}
          <img src={product?.images[0]?.fileURL} style={{ marginTop: "74px", objectFit: "contain" }} />

        </span>
        {/* <LazyLoadImage
            alt="product"
            // src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[0].url}
            src="images/iphone.svg"
            threshold={500}
            effect="black and white"
            width="225px"
            height="200px"
            objectFit="contain"
          /> */}
        {/* {product.pictures.length >= 2 ? (
            <LazyLoadImage
              alt="product"
              // src={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ 1 ].url }
              src="images/home/banners/homeimage4.svg"
              threshold={500}
              effect="black and white"
              wrapperClassName="product-image-hover"
            />
          ) : (
            ""
          )} */}
      </ALink>

      {/* {product.until && product.until !== null && (
        <ProductCountdown adClass="custom-product-countdown" />
      )} */}
      {/* </figure> */}

      <div className="product-details" style={{ alignItems: "center" }}>
        <div className="category-wrap"style={{  display:'flex', justifyContent: "center" }}>
          <div className="category-list">
            {/* {product */}
            {/* ? product.map((item, index) => ( */}
            <React.Fragment key={product._id}>
              <ALink
                href={{
                  pathname: `product/default/${product?._id}`,
                  // query: { product._id },
                }}
                style={{
                  color: "rgba(227, 6, 19, 1)",
                  fontSize: "12px",
                  fontWeight: "700",
                  justifyContent: "center",
                }}
              >
                {product?.categoryNamePath}
              </ALink>
              {/* {index < product.categories.length - 1 ? ", " : ""} */}
            </React.Fragment>
            {/* )) */}
            {/* : ""} */}
          </div>
        </div>

        <h3 className="product-title" style={{ justifyContent: "center" }}>
          <ALink href={`/product/default/${product.slug}`}>
            {product?.productName}
          </ALink>
        </h3>

        {/* <div className="ratings-container">
          <div className="product-ratings">
            <span
              className="ratings"
              style={{ width: 20 * product.ratings + "%" }}
            ></span>
            <span className="tooltiptext tooltip-top">
              {product.ratings.toFixed(2)}
            </span>
          </div>
        </div> */}

        <div className="price-box">
          <span style={{ fontFamily: "Plus Jakarta Sans" }}>OMR</span>
          <span
            className="product-price"
            style={{

              fontWeight: "800px",
              fontSize: "16px",
              lineHeight: "15px",
              marginLeft: "25px",
            }}
          >
            {product?.price.toFixed(2)}
          </span>
          <span
            className="old-price"
            style={{ marginLeft: "25px", color: "#777777", fontWeight: "600" }}
          >
            {product?.mrp?.toFixed(2)}
          </span>
        </div>
        {/* <div className="price-box">
          {product.price[0] == product.price[1] ? (
            <span className="product-price">
              {"$" + product.price[0].toFixed(2)}
            </span>
          ) : product.variants.length > 0 ? (
            <span className="product-price">
              {"$" + product.price[0].toFixed(2)} &ndash;{" "}
              {"$" + product.price[1].toFixed(2)}
            </span>
          ) : (
            <>
              <span className="product-price">
                {"$" + product.price[0].toFixed(2)}
              </span>
              <span className="old-price">
                {"$" + product.price[1].toFixed(2)}
              </span>
            </>
          )}
        </div> */}

        <div className="product-action">
          {product?.variants?.length > 0 ? (
            <ALink
              href={`/product/default/${product?.slug}`}
              className="btn-icon btn-add-cart"
            >
              <i className="fa fa-arrow-right"></i>
              <span>SELECT OPTIONS</span>
            </ALink>
          ) : (
            <a
              href="#"
              className="btn-icon  btn-add-cart product-type-simple "
              title="Add To Cart"
              onClick={

                (e) => {
                  e.preventDefault();
                  product.stock > 0
                    && onAddCartClick(e);
                }
              }
            >
              <span>ADD TO CART</span>
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default connect(mapStateToProps, {
  ...WishlistAction,
  ...CartAction,
  ...ModalAction,
})(React.memo(ProductFour));
