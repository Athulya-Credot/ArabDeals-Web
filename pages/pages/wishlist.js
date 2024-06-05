import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ALink from "../../components/common/ALink";

import { actions as WishlistAction } from "../../store/wishlist";
import { actions as CartAction } from "../../store/cart";
import { actions as ModalAction } from "../../store/modal";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../../server/apollo";
import AddToCartPopup from "../../components/features/modals/add-to-cart-popup";

import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useRouter } from "next/router";
const GET_WISH_LIST = gql`
  query Products {
    getWishListProducts {
      products {
        image
        productId
        productName
        sellingPrice
        shortDescription
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

const REMOVE_WISHLIST = gql`
  mutation RemoveFromWishList($input: RemoveFromWishListInput!) {
    removeFromWishList(input: $input) {
      message
    }
  }
`;

function Wishlist(props) {
  const router = useRouter();
  const { wishlist, removeFromWishlist, showQuickView } = props;
  const [flag, setFlag] = useState(0);
  const [wishlistDatas, setWishlistDatas] = useState([]);

  const [addToCart] = useMutation(POST_CART);
  const [removeFromWishList] = useMutation(REMOVE_WISHLIST);
  const token = localStorage.getItem("arabtoken");

  const {
    data: cartData,
    loading: cartLoading,
    error: cartError,
    refetch: cartRefetch,
  } = useQuery(GET_CART, {
    skip: !token,
  });

  const {
    data: wishListData,
    loading: wishListLoading,
    error: wishListError,
    refetch: wishListRefetch,
  } = useQuery(GET_WISH_LIST, {
    skip: !token,
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (wishListError) {
      console.log(wishListError);
    } else if (wishlistDatas) {
      setWishlistDatas(wishListData?.getWishListProducts.products || []);
    }
  }, [wishListData]);

  const onMoveFromToWishlit = (e, item) => {
    setFlag(2);
    e.preventDefault();
    addToCart(item);
    removeFromWishlist(item);
  };

  const removeProduct = async (e, item) => {
    try {
      if (item) {
        const response = await removeFromWishList({
          variables: {
            input: {
              productId: item.productId,
            },
          },
        });
        if (response) {
          wishListRefetch();
          return toast.success("Successfully product removed to cart");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onQuickViewClick = (e, product) => {
    e.preventDefault();
    showQuickView(product.productId);
  };

  const onAddCartClick = async (e, product) => {
    e.preventDefault();
    try {
      if (product) {
        const response = await addToCart({
          variables: {
            input: {
              productId: product.productId,
              quantity: 1,
            },
          },
        });

        if (response) {
          cartRefetch();
          wishListRefetch();
          return toast.success("Successfully product added to cart");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Wishlist | Arab Deals</title>
      </Helmet>
      <main className="main">
        <div className="page-header">
          <div className="container d-flex flex-column align-items-center">
            {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Wishlist
                                </li>
                            </ol>
                        </div>
                    </nav> */}

            <h1>Wishlist</h1>
          </div>
        </div>

        <div className="container">
          <div className="success-alert">
            {flag === 1 ? <p>Product successfully removed.</p> : ""}
            {flag === 2 ? <p>Product added to cart successfully.</p> : ""}
          </div>
          {wishListLoading && <div>loading...</div>}
          {!wishListLoading && wishlistDatas?.length === 0 ? (
            <div className="wishlist-table-container">
              <div className="table table-wishlist mb-0">
                <div className="wishlist-empty-page text-center">
                  <i className="far fa-heart"></i>
                  <p>No products added to the wishlist</p>
                  <ALink
                    href="/shop"
                    className="btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto"
                  >
                    go shop{" "}
                  </ALink>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {!wishListLoading && wishlistDatas.length ? (
            <div className="wishlist-table-container">
              <table className="table table-wishlist mb-0">
                <thead>
                  <tr>
                    <th className="thumbnail-col">Product</th>
                    <th className="product-col"></th>
                    <th className="price-col">Price</th>
                    <th className="status-col">Stock Status</th>
                    <th className="action-col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistDatas?.map((item, index) => (
                    <tr
                      key={"wishlist-item" + index}
                      className="product-row"
                      style={{ borderBottom: "1px solid #e7e7e7" }}
                    >
                      <td className="media-with-lazy">
                        <figure className="product-image-container">
                          <ALink
                            href={`/product/default/${item?.productId}`}
                            className="product-image"
                          >
                            <LazyLoadImage
                              alt="product"
                              src={item.image}
                              threshold={500}
                              width="80"
                              height="80"
                            />
                          </ALink>
                          <a
                            className="btn-remove icon-cancel"
                            title="Remove Product"
                            onClick={(e) => removeProduct(e, item)}
                          ></a>
                        </figure>
                      </td>
                      <td>
                        <h5 className="product-title">
                          <ALink href={`/product/default/${item.productId}`}>
                            {item?.productName}
                          </ALink>
                        </h5>
                      </td>
                      <td style={{ color: "black" }}>
                        <div className="price-box">
                          <span className="product-price" style={{ color: "#000" }}>
                            {"OMR " + item?.sellingPrice}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className="stock-status">
                          {item.stock <= 0 ? "Out of stock" : "In stock"}
                        </span>
                      </td>
                      <td className="action">
                        {/* <a
                          href="ajax/product-quick-view"
                          className="btn btn-quickview mt-1 mt-md-0"
                          title="Quick View"
                          onClick={(e) => {
                            onQuickViewClick(e, item);
                          }}
                          style={{ border: "1px solid" }}
                        >
                          Quick View
                        </a> */}
                        <div
                          className="btn btn-quickview mt-1 mt-md-0"
                          title="View"
                          style={{ border: "1px solid" }}
                          onClick={(e) => router.push(`/product/default/${item.productId}`)}
                        >
                          View
                        </div>
                        {item?.variants?.length > 0 ? (
                          <ALink
                            className="btn btn-dark btn-add-cart product-type-simple btn-shop"
                            href={`/product/default/${item.slug}`}
                             
                          >
                            select options
                          </ALink>
                        ) : (
                          <button
                            className="btn btn-dark btn-add-cart product-type-simple btn-shop hoverbtn"
                            onClick={(e) => {
                              onAddCartClick(e, item);
                            }}
                            
                          >
                            ADD TO CART
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default withApollo({ ssr: typeof window === "undefined" })(
  connect(mapStateToProps, {
    ...WishlistAction,
    ...CartAction,
    ...ModalAction,
  })(Wishlist)
);
