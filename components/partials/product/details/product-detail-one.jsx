import SlideToggle from "react-slide-toggle";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Actions
import { actions as WishlistAction } from "../../../../store/wishlist";
import { actions as CartAction } from "../../../../store/cart";

// Import Custom Component
import ProductNav from "../product-nav";
import Qty from "../qty";
import ALink from "../../../common/ALink";
import ProductCountdown from "../../../features/product-countdown";
// import{useLazyQuery, useQuery}from"@apollo/client"

import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import AddToCartPopup from "../../../features/modals/add-to-cart-popup";

import { toast } from "react-toastify";
// import eventEmmitter from "../../../../server/eventEmmitter";
import withApollo from "../../../../server/apollo.js";

function ProductDetailOne(props) {
  const router = useRouter();
  const {
    product,
    adClass = "col-lg-7 col-md-6",
    prev,
    next,
    isNav = true,
    parent = ".product-single-default",
    isSticky = false,
  } = props;
  const [attrs, setAttrs] = useState({});
  const [variant, setVariant] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [qty, setQty] = useState(1);
  const [selectedcolor, setSelectedColor] = useState();
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [variantData, setVariantData] = useState([]);
  const token = localStorage.getItem("arabtoken");
  const [wishlistDatas, setWishlistDatas] = useState(Boolean);
  const [colorVariants, setColorVariants] = useState([]);


  const GET_VARIANT = gql`
    query Query($input: VariantsInput!) {
      getVariants(input: $input) {
        variants {
          productId
          attributeId
          attributeType
          attributeName
          attributeValueId
          attributeValue
          attributeDescription
          colorCode
        }
      }
    }
  `;

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


  const POST_WISHLIST = gql`mutation AddToWishList($input: AddToWishListInput!) {
  addToWishList(input: $input) {
    message
  }
}`;

  const GET_WISH_LIST = gql`query Products {
  getWishListProducts {
    products {
      image
      productId
      productName
      sellingPrice
      shortDescription
    }
  }
}`;

  const GET_WISHLIST_PRODUCT_STATUS = gql`query GetWishListProductStatus($input: GetWishListProductStatusInput!) {
  getWishListProductStatus(input: $input) {
    isExist
  }
}`;


  const [addToCart] = useMutation(POST_CART);
  const [addToWishList] = useMutation(POST_WISHLIST);

  const { data: variData, loading: variantLoading, error: variantError, } = useQuery(GET_VARIANT, {
    variables: { input: { _id: product?._id } },
  });




  const { refetch: wishListRefetch, } = useQuery(GET_WISH_LIST, {
    skip: !token,
  });








  // console.log("dfgfff",variData);

  const getUniqueVariants = (data) => {
    const uniqueVariants = [];
    const variantSet = new Set();

    if (data?.length) {
      data.forEach((variant) => {
        const key = `${variant.attributeName}_${variant.attributeValue}`;

        if (!variantSet.has(key)) {
          variantSet.add(key);
          uniqueVariants.push(variant);
        }
      });
    }
    return uniqueVariants;
  };

  useEffect(() => {
    if (variantError) {
      console.error("Error fetching variant data:", variantError);
    } else {
      //   if product.attributes having same attributeId and attributeValueId  in variData?.getVariants.variants , then add a create a new array with all the elements  of variData?.getVariants.variants  with a flag isAvailable
      const attributes = product?.attributes;
      const variants = variData?.getVariants?.variants;

      if (attributes && variants) {
        const updatedVariants = variants.map((variant) => {
          const matchingVariant = attributes.find(
            (attribute) =>
              attribute.attributeId === variant.attributeId &&
              attribute.attributeValueId === variant.attributeValueId
          );
          return {
            ...variant,
            isAvailable: !!matchingVariant,
          };
        });

        const filteredColorVariants = updatedVariants.filter(
          (variant) => variant.attributeType === "COLOR"
        );
        if (filteredColorVariants?.length > 0) {
          const uniqueColorVariants = getUniqueVariants(filteredColorVariants);
          setColorVariants(uniqueColorVariants);
        }

        const uniqueVariants = getUniqueVariants(
          updatedVariants || []
        );
        setVariantData(uniqueVariants);

      }


    }
  }, [variData, product]);


  useEffect(() => {
    if (product && variantData) {
      let attributes = variantData.reduce(
        (acc, cur) => {
          const attributeType = cur?.attributeName.toLowerCase();
          const attributeName = cur?.attributeName;
          const attributeValue = cur?.attributeValue;

          if (!acc[attributeType]) {
            acc[attributeType] = [];
          }

          if (
            attributeValue &&
            !acc[attributeType].find((attr) => attr.value === attributeValue)
          ) {
            acc[attributeType].push({
              name: attributeName,
              value: attributeValue,
            });
          }

          return acc;
        },
        {} // Initialize an empty object
      );

      setAttrs(attributes);
      initState();
    }
  }, [variantData]);


  useEffect(() => {
    if (product && attrs) {
      let priceToggle = document.querySelector(`${parent} .price-toggle`);
      let variationToggle = document.querySelector(
        `${parent} .variation-toggle`
      );

      // Check if there are any attributes
      const hasAttributes = Object.keys(attrs).length > 0;

      // Check if any attribute is not selected
      const hasUnselectedAttribute = Object.values(attrs).some((attr) => !attr);

      if (hasAttributes && hasUnselectedAttribute) {
        document.querySelector(`${parent} .shopping-cart`) &&
          document
            .querySelector(`${parent} .shopping-cart`)
            .classList.add("disabled");
        document.querySelector(`${parent} .sticky-cart .add-cart`) &&
          document
            .querySelector(`${parent} .sticky-cart .add-cart`)
            .classList.add("disabled");
        priceToggle &&
          priceToggle.classList.contains("expanded") &&
          priceToggle.click();
      } else {
        document.querySelector(`${parent} .shopping-cart`) &&
          document
            .querySelector(`${parent} .shopping-cart`)
            .classList.remove("disabled");
        document.querySelector(`${parent} .sticky-cart .add-cart`) &&
          document
            .querySelector(`${parent} .sticky-cart .add-cart`)
            .classList.remove("disabled");

        let index = product?.variants?.findIndex((item) => {
          const hasAttributeMatches = Object.keys(attrs).every((key) => {
            const attributeValue = attrs[key];
            return (
              !item[key] || (item[key] && item[key].name === attributeValue)
            );
          });

          return hasAttributeMatches;
        });

        // TODO: when adding remove commented
        setVariant({ ...product?.attributes[index], id: index });
      }

      if (Object.values(attrs).some((attr) => attr !== null)) {
        variationToggle &&
          variationToggle.classList.contains("collapsed") &&
          variationToggle.click();
      } else {
        variationToggle &&
          variationToggle.classList.contains("expanded") &&
          variationToggle.click();
      }
    }
  }, [product]);

  useEffect(() => {
    if (variant && variant.id >= 0) {
      let priceToggle = document.querySelector(`${parent} .price-toggle`);
      priceToggle &&
        priceToggle.classList.contains("collapsed") &&
        priceToggle.cccccc();
    }
  }, [product]);

  const { loading, error, data, refetch } = useQuery(GET_WISHLIST_PRODUCT_STATUS, {
    variables: {
      input: {
        productId: product && product._id
      }

    },
    skip: !token
  });
  useEffect(() => {
    if (error) {
      console.log(wishListError.message);
    } else if (data) {
      setWishlistDatas(data?.getWishListProductStatus.isExist);
    }
    refetch();
  }, [data]);


  function isInWishlist() {
    return wishlistDatas;
  }

  function onWishlistClick(e) {
    if (!token) {
      router.push("/pages/login");
    }
    e.preventDefault();
    if (!isInWishlist()) {
      let target = e.currentTarget;
      target.classList.add("load-more-overlay");
      target.classList.add("loading");

      setTimeout(() => {
        target.classList.remove("load-more-overlay");
        target.classList.remove("loading");
        // props.addToWishList(product);

        addToWishList({
          variables: {
            input: {
              productId: product._id,
            }
          }
        }).then((res) => { refetch(), wishListRefetch(); }).catch((err) => { console.log(err, "err"); });
      }, 1000);
    } else {
      router.push("/pages/wishlist");
    }
  }


  const { data: cartData, loading: cartLoading, error: cartError, refetch: cartRefetch, } = useQuery(GET_CART, { skip: !token, fetchPolicy: "network-only" });



  const onAddCartClick = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("arabtoken")) {
      try {
        if (
          product.stock > 0 &&
          !e.currentTarget.classList.contains("disabled")
        ) {
          const response = await addToCart({
            variables: {
              input: {
                productId: product._id,
                quantity: parseInt(qty),
              },
            },
          });

          if (response) {
            // eventEmmitter.emit("productAdded")
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
          localCart[productIndex].quantity += qty;
        } else {
          localCart.push({
            productId: product._id, quantity: qty,
            name: product.productName,
            shortDescription: product.shortDescription,
            stock: product.stock,
            color: selectedAttributes.color,
            size: selectedAttributes.size,
            price: product.price,
            image: product.images[0] && product.images[0].fileURL,
            sellingPrice: product.sellingPrice,
            mrp: product.mrp,
          });
        }
        localStorage.setItem("cart", JSON.stringify(localCart));
      } else {
        localStorage.setItem("cart", JSON.stringify([{
          productId: product._id, quantity: qty,
          name: product.productName,
          shortDescription: product.shortDescription,
          stock: product.stock,
          color: selectedAttributes.color,
          size: selectedAttributes.size,
          price: product.price,
          image: product.images[0] && product.images[0].fileURL,
          sellingPrice: product.sellingPrice,
          mrp: product.mrp,
        }]));
      }
    }
    window.dispatchEvent(new Event("storage"));
    return toast(<AddToCartPopup product={{ product }} />);
  };

  function changeQty(value) {
    setQty(value);
  }


  function initState() {
    const defaultValues = {};

    product.attributes.forEach((variant) => {
      const attributeType = variant.attributeName.toLowerCase();
      const defaultValue = variant.attributeValue;

      if (!defaultValues[attributeType]) {
        defaultValues[attributeType] = defaultValue;
      }
    });

    const defaultAttributes = {};
    Object.keys(defaultValues).forEach((attributeType) => {
      defaultAttributes[attributeType] = defaultValues[attributeType];
    });

    setSelectedAttributes(defaultAttributes);
  }


  function changeSelection(item) {

    let variants = {};


    for (let product of variData?.getVariants?.variants) {
      (variants[product.productId] = variants[product.productId] || []).push(product);
    }

    let attrKeys = Object.keys(selectedAttributes).filter(k => k.toLowerCase() !== item.attributeName.toLowerCase());

    let selected;

    for (let id of Object.keys(variants)) {


      let flag = true;
      let v = variants[id];

      for (let key of attrKeys) {

        let flag2 = false;
        for (let i of v) {
          if (i.attributeName.toLowerCase() === key.toLowerCase() && i.attributeValue.toLowerCase() === selectedAttributes[key].toLowerCase()) {
            flag2 = true;
            break;
          }
        }
        if (!flag2) {
          flag = false;
          break;
        }
      }

      if (flag) {


        for (let i of v) {

          if (item.attributeName.toLowerCase() === i.attributeName.toLowerCase() && i.attributeValue.toLowerCase() === item.attributeValue.toLowerCase()) {

            selected = id;
            break;
          }
        }

        if (selected) {
          break;
        }

      }
    }



    setSelectedAttributes({});
    router.push({
      pathname: "/product/default/[...slug]",
      query: { slug: [selected ? selected : item.productId] },
    });


  }


  // ... other code

  function selectAttribute(attributeType, e) {
    e.preventDefault();
    // setAttrs({})
    setSelectedAttributes({});
    const productId = attributeType; // Replace with your dynamic value
    router.push({
      pathname: "/product/default/[...slug]",
      query: { slug: [productId] },
    });
  }

  // ...

  useEffect(() => {
    if (product && variantData) {
      initState();
      // ... (rest of the useEffect logic)
    }
  }, [product, variData]);

  function clearVariation(e) {
    e.preventDefault();
    initState();
  }



  function isDisabled(passvalue) {
    // const value = "red";
    const attrbutsvalue = product?.attributes?.map(attribute => attribute.attributeValue); // Assuming `attrbutsvalue` is the property you want to compare
    const matchedElements = attrbutsvalue?.some(element => element === passvalue);
    return matchedElements;

  }

  // isDisabled()
  function updateSelectedAttributes(attributeType, value) {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeType]: value,
    }));
  }

  return (
    <>
      <div className={`skel-pro  skel-detail ${adClass} `}></div>
      {product && (
        <div className={`product-single-details pl-4 pl-md-0 ${adClass}`}>
          <p
            style={{
              color: "#E30613",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "26px",
              textTransform: "uppercase",
              marginBottom: "0px",
            }}
          >
            {product.categoryNamePath ? product.categoryNamePath.split(' ').pop() : ""}
          </p>
          <h1
            className="product-title"
            style={{
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "33.43px",
            }}
          >
            {product?.productName}
          </h1>

          {isNav ? <ProductNav prev={prev} next={next} /> : ""}

          <div className="">
            {/* <div className="product-ratings">
              <span
                className="ratings"
                style={{ width: `${20 * product.rating}%` }}
              ></span>
              <span className="tooltiptext tooltip-top">
                {product?.rating?.toFixed(2)}
              </span>
            </div> */}

            {/* <ALink
              href="#"
              className="rating-link"
              style={{ fontSize: "1.1rem" }}
            >
              ({" "}
              {product.reviews > 0
                ? `${product.reviews} Reviews`
                : "There are no reviews yet."}{" "}
              )
            </ALink> */}
          </div>

          {/* <hr className="short-divider" /> */}

          <div className="price-box pt-5 ">
            {product?.price == product.price ? (
              <>
                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: "600px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    marginTop: "10px",
                    marginRight: "8px",
                    color: "#606060",
                  }}
                >
                  OMR
                </span>
                <span
                  className="product-price"
                  style={{
                    fontWeight: "600px",
                    fontSize: "18px",
                    lineHeight: "15px",
                    letterSpacing: "-0.1px",
                    color: "black",
                  }}
                >
                  {" "}
                  {product?.sellingPrice?.toFixed(2)}
                </span>
                <span
                  className="old-price"
                  style={{
                    fontWeight: "600px",
                    fontSize: "16px",
                    lineHeight: "15px",
                    letterSpacing: "-0.1px",
                    marginLeft: "10px",
                    marginBottom: "3px",
                  }}
                >
                  {" "}
                  {product?.mrp?.toFixed(2)}
                </span>
              </>
            ) : product?.variants.length > 0 ? (
              <span
                className="product-price"
                style={{
                  fontSize: "12px",
                  fontFamily: "Plus Jakarta Sans",
                  color: "#606060",
                  fontWeight: "600",
                }}
              >
                OMR &nbsp;&nbsp;&nbsp;
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  {product.price[0].toFixed(2)}
                  <span
                    style={{
                      fontSize: "16px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#606060",
                      fontWeight: "600",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;
                    <strike>
                      {product?.mrp ? product?.mrp : product?.price}
                    </strike>
                  </span>
                  {/* <span style={{fontSize:"12px",fontFamily: "Plus Jakarta Sans",color:"#606060",fontWeight:"600"}}> OMR </span> */}
                  {/* <span>{product.price[1].toFixed(2)}</span> */}
                </span>
              </span>
            ) : (
              <>
                <span
                  className="old-price"
                  style={{
                    fontSize: "12px",
                    fontFamily: "Plus Jakarta Sans",
                    color: "#606060",
                    fontWeight: "600",
                  }}
                >
                  OMR &nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "black",
                    }}
                  >
                    {product.price.toFixed(2)}
                  </span>
                </span>
                <span className="new-price">
                  {"OMR" + product.price.toFixed(2)}
                </span>
              </>
            )}
          </div>

          {product?.until && product?.until !== null && (
            <ProductCountdown type="1" />
          )}

          <div
            className="product-desc"
            style={{
              fontFamily: "Poppins",
              fontWeight: "400px",
              fontSize: "14px",
              lineHeight: "26px",
            }}
          >
            <p style={{ fontWeight: "400" }}>{product?.shortDescription}</p>
          </div>

          {variantData?.length > 0 ? (
            <div className="product-filters-container">
              {colorVariants?.length > 0 ? (
                <>
                  <label>
                    COLOR:&nbsp;{""}
                    <span style={{ fontWeight: "500" }}>
                      {selectedAttributes &&
                        // selectedAttributes.charAt(0).toUpperCase() +
                        selectedAttributes?.color}
                    </span>
                  </label>
                </>
              ) : null}


              <div
                className="product-single-filter  d-flex"
                style={{ gap: "20px" }}
              >
                {colorVariants.map((item, index) => (
                  <>
                    <ul
                      className="config-size-list config-color-list config-filter-list"
                      style={{ gap: "20px" }}
                    >
                      <li
                        key={`filter-color-${index}`}
                        className={` ${item?.isAvailable
                          ? "tag-remove"
                          : ""
                          }`}
                      >
                        {item?.thumb ? (
                          <a
                            className="filter-thumb p-0"
                          >
                            <LazyLoadImage
                              src={
                                process.env.NEXT_PUBLIC_ASSET_URI +
                                item?.thumb?.url
                              }
                              alt="product thumb"
                              width={item?.thumb?.width}
                              height={item?.thumb?.height}
                            />
                          </a>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "63px",
                              height: "63px",
                              backgroundColor: item?.attributeValue === selectedAttributes[item?.attributeName.toLowerCase()] ? "#ebebeb" : "#f8f8f8",
                              borderRadius: "50%",
                            }}
                          >
                            <a
                              className="filter-color border-0"
                              style={{
                                backgroundColor: item?.colorCode,
                                borderRadius: "50%",
                                width: "3.8rem",
                                height: "3.8rem",
                                border: `1px solid ${item?.colorCode}`,
                                cursor: "pointer",
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                changeSelection(item);
                                // selectAttribute(item?.productId, e);
                                // updateSelectedAttributes(
                                //   item?.attributeName.toLowerCase(),
                                //   item?.attributeValue
                                // );
                              }}
                            ></a>
                          </div>
                        )}
                      </li>
                    </ul>
                  </>
                ))}
              </div>

              {variantData?.length > 0 ? (
                <div className="product-single-filter">
                  {/* <label
                    style={{
                      // fontWeight: "600px",
                      // fontSize: "14px",
                      // lineHeight: "22px",
                      color: "#000",
                      fontWeight: "500",
                    }}
                  >
                    Size &nbsp;{""}
                  </label> */}


                  {variantData?.some(
                    (value) =>
                      value?.attributeName?.toLowerCase() === "size"
                  ) ? (
                    <>
                      <label style={{
                        // fontWeight: "600px",
                        // fontSize: "14px",
                        // lineHeight: "22px",
                        // marginBottom:"5px",
                        color: "#000",
                        fontWeight: "500",
                      }}>
                        Size



                      </label>
                    </>
                  ) : null}
                  <div className=" d-flex " style={{ gap: "4px", marginBottom: "1rem" }}>
                    {variantData
                      ?.filter(
                        (value) =>
                          value.attributeName.toLowerCase() === "size"
                      )

                      .map((item, index) => (
                        <>
                          <ul className="config-size-list d-flex" style={{ marginTop: "5px" }}>
                            <li
                              key={`filter-size-${index}`}
                              className={`${item?.attributeValue === selectedAttributes.size
                                ? "active"
                                : ""

                                // attrs["size"]?.find((value) =>
                                //   product?.attributes?.some((attrValue) => attrValue?.attributeValue === value.value)
                                // )
                                //   ? "active"
                                //   : ""
                                } ${!isDisabled(item?.attributeValue)
                                  ? "strikethrough"
                                  : ""
                                }`}
                            >
                              {item?.thumb ? (
                                <a
                                  href="#"
                                  className="filter-thumb p-0"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    changeSelection(item);

                                    // selectAttribute(item?.productId, e);
                                    // updateSelectedAttributes(
                                    //   item?.attributeName.toLowerCase(),
                                    //   item?.attributeValue
                                    // );
                                  }}
                                >
                                  <LazyLoadImage
                                    src={
                                      process.env.NEXT_PUBLIC_ASSET_URI +
                                      item?.thumb?.url
                                    }
                                    alt="product thumb"
                                    width={item.thumb.width}
                                    height={item.thumb.height}
                                  />
                                </a>
                              ) : (
                                <a
                                  href="#"
                                  className="d-flex align-items-center justify-content-center"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    changeSelection(item)
                                  }
                                  }
                                  style={{
                                    fontWeight: "600",
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    // color: "#292D32",


                                  }}
                                >
                                  {item?.attributeValue}
                                </a>
                              )}
                            </li>
                          </ul>
                        </>
                      ))}
                  </div>
                </div>
              ) : (
                ""
              )}
              {variantData?.length > 0 ? (
                <div className="product-single-filter">
                  {Array.from(
                    new Set(
                      variantData
                        ?.filter(
                          (value) =>
                            value.attributeName.toLowerCase() !==
                            "size" && value.attributeDescription.toLowerCase() !== "size" &&
                            value.attributeDescription.toLowerCase() !== "color" &&
                            value.attributeDescription.toLowerCase() !== "colour"
                        )
                        .map((item) => item.attributeName.toLowerCase())
                    )
                  ).map((uniqueAttributeName, index) => (
                    <div key={`attribute-group-${index}`} style={{ marginBottom: "1rem" }}>
                      <label
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          marginBottom: "10px"
                        }}
                      >
                        {uniqueAttributeName} &nbsp;
                      </label>
                      <ul className="config-size-list " style={{ marginTop: "5px" }}>
                        {variantData
                          ?.filter(
                            (item) =>
                              item.attributeName.toLowerCase() ===
                              uniqueAttributeName
                          )
                          .map((item, subIndex) => (
                            <li
                              key={`filter-size-${subIndex}`}
                              className={`${Object.values(selectedAttributes).includes(
                                item?.attributeValue
                              )
                                ? "active"
                                : ""
                                } ${!isDisabled(

                                  item?.attributeValue
                                )
                                  // ? "strikethrough"
                                  ? ""
                                  : ""
                                }`}
                            >
                              {item?.thumb ? (
                                <a
                                  href="#"
                                  className="filter-thumb p-0"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    changeSelection(item)
                                  }

                                  }
                                >
                                  <LazyLoadImage
                                    src={
                                      process.env.NEXT_PUBLIC_ASSET_URI +
                                      item?.thumb?.url
                                    }
                                    alt="product thumb"
                                    width={item.thumb.width}
                                    height={item.thumb.height}
                                  />
                                </a>
                              ) : (
                                <a
                                  href="#"
                                  className="d-flex align-items-center justify-content-center"

                                  onClick={(e) => {
                                    e.preventDefault();
                                    changeSelection(item)
                                  }

                                  }
                                  style={{
                                    fontWeight: "600",
                                    fontSize: "12px",
                                    lineHeight: "15px",
                                    // color: "#292D32",
                                    marginRight: "5px",
                                    // color:`${  isDisabled(item.attributeDescription, item.attributeValue)? "blue":"black"}`
                                  }}
                                >
                                  {item?.attributeValue}
                                </a>
                              )}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {
                // <SlideToggle collapsed={true}>
                //   {({ onToggle, setCollapsibleElement, toggleState }) => (
                //     <>
                //       <button
                //         className={`d-none variation-toggle ${toggleState?.toLowerCase()}`}
                //         onClick={onToggle}
                //       ></button>
                //       <div
                //         className="product-single-filter m-0"
                //         ref={setCollapsibleElement}
                //       >
                //         <label></label>
                //         <a
                //           className="font1 text-uppercase clear-btn"
                //           href="#"
                //           onClick={clearVariation}
                //         >
                //           Clear
                //         </a>
                //       </div>
                //     </>
                //   )}
                // </SlideToggle>
              }
            </div>
          ) : (
            ""
          )}

          {isSticky && (
            <div className="sticky-wrapper">
              <div className="sticky-header desktop-sticky sticky-cart d-none d-lg-block">
                <div className="container">
                  <div className="sticky-img mr-4 media-with-lazy">
                    <figure className="mb-0">
                      <LazyLoadImage
                        src={
                          process.env.NEXT_PUBLIC_ASSET_URI +
                          product.product.url
                        }
                        width="100%"
                        height="auto"
                        alt="Thumbnail"
                      />
                    </figure>
                  </div>
                  <div className="sticky-detail">
                    <div className="sticky-product-name">
                      <h2 className="product-title w-100 ls-0">
                        {product.productName}
                      </h2>
                    </div>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span
                          className="ratings"
                          style={{ width: `${20 * product.rating}%` }}
                        ></span>
                        <span className="tooltiptext tooltip-top">
                          {product?.rating?.toFixed(2)}
                        </span>
                      </div>

                      <ALink href="#" className="rating-link">
                        ({" "}
                        {product.reviews > 0
                          ? `${product.reviews} Reviews`
                          : "There are no reviews yet."}{" "}
                        )
                      </ALink>
                    </div>
                  </div>

                  <div className="product-action">
                    <Qty
                      max={product?.stock > 10 ? 10 : product?.stock}
                      value={qty}
                      onChangeQty={changeQty}
                    />

                    <a
                      href="#"
                      className={`btn btn-dark add-cart mr-2 ${product.stock < 0
                        ? "disabled"
                        : ""
                        }`}
                      title="Add To Cart"
                      onClick={(e) => { e.preventDefault(); onAddCartClick(e); }}
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="product-action">
            {product?.variantData?.length ? (
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <>
                    <button
                      className={`d-none price-toggle ${toggleState?.toLowerCase()}`}
                      onClick={onToggle}
                    ></button>
                    <div
                      className="price-box product-filtered-price m-0"
                      ref={setCollapsibleElement}
                    >
                      {variant &&
                        variant.id >= 0 &&
                        (variant.price ? (
                          variant.sale_price ? (
                            <>
                              <del className="old-price">
                                <span>${variant.price.toFixed(2)}</span>
                              </del>
                              <span className="product-price">
                                ${variant && variant.sale_price.toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="product-price">
                              ${variant && variant.price.toFixed(2)}
                            </span>
                          )
                        ) : (
                          <span className="product-stock pb-3 d-block">
                            {product.is_out_of_stock
                              ? "Out of Stock"
                              : `${product.stock} in stock`}
                          </span>
                        ))}
                    </div>
                  </>
                )}
              </SlideToggle>
            ) : (
              ""
            )}

            <Qty max={10} value={qty} onChangeQty={changeQty} />

            <a
              href="#"
              style={product.stock < 1 ? {
                pointerEvents: "none",
                touchAction: "none",
              } : {}}
              className={`btn btn-dark add-cart shopping-cart mr-2 custom-detail-cart ${product.stock < 1 ? "disabled" : ""
                }`}
              title="Add To Cart"
              onClick={(e) => { e.preventDefault(); product.stock > 0 ? onAddCartClick(e) : null }}
            >
              {product?.stock > 0 ? "Add To Cart" : "Out of Stock"}
            </a>
          </div>

          <hr className="divider mb-0 mt-0" />

          <div className="product-single-share mb-3">
            <label className="sr-only">Share:</label>

            {/* <div className="social-icons mr-2">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"
                                title="Facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"
                                title="Twitter"></ALink>
                            <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                title="Linkedin"></ALink>
                            <ALink href="#" className="social-icon social-mail icon-mail-alt"
                                title="Mail"></ALink>
                        </div> */}

            <a
              href="#"
              className={`btn-icon-wish add-wishlist ${isInWishlist() ? "added-wishlist" : ""
                }`}
              onClick={onWishlistClick}
              title={`${isInWishlist() ? "Go to Wishlist" : "Add to Wishlist"}`}
            >
              <i className="icon-wishlist-2"></i>
              <span
                style={{
                  marginLeft: "10px",
                  fontFamily: "Poppins",
                  fontWeight: "14px",
                  lineHeight: "34px",
                }}
              >
                {isInWishlist() ? "Go to Wishlist" : "Add to Wishlist"}
              </span>
            </a>

            {/* <a
              href="#"
              className="btn-icon-wish add-wishlist"
              onClick={onWishlistClick}
              title={`${isInWishlist() ? "Go to Wishlist" : "Add to Wishlist"}`}
            > */}
            {/* <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  border: "1px solid #E7E7E7",
                }}
              >
                <i className="fa fa-share"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="black"
                  className="custom-sharing"
                >
                  <g clip-path="url(#clip0_70_15820)">
                    <path d="M12.25 7.875V4.375L18.375 10.5L12.25 16.625V13.0375C7.875 13.0375 4.8125 14.4375 2.625 17.5C3.5 13.125 6.125 8.75 12.25 7.875Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_70_15820">
                      <rect
                        width="21"
                        height="21"
                        fill="white"
                        transform="matrix(-1 0 0 1 21 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div> */}

            {/* <span
                style={{
                  marginLeft: "10px",
                  fontFamily: "Poppins",
                  fontWeight: "14px",
                  lineHeight: "34px",
                }}
              >
                share this
              </span>
            </a> */}
          </div>
        </div >
      )
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default withApollo({ ssr: typeof window === "undefined" })(
  connect(mapStateToProps, { ...WishlistAction, ...CartAction })(
    ProductDetailOne
  )
);
