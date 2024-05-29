import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ALink from "../../components/common/ALink";
import { toast } from "react-toastify";
import { actions as WishlistAction } from "../../store/wishlist";
import { actions as CartAction } from "../../store/cart";
import { actions as ModalAction } from "../../store/modal";
import { IoMdHome } from "react-icons/io";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import withApollo from "../../server/apollo";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";
import Pagination from "../../components/features/pagination";
import { useRouter } from "next/router";

const GET_ORDERS = gql`
  query GetUserOrderProducts($input: GetUserOrderProductsInput!) {
    getUserOrderProducts(input: $input) {
      maxRecords
      records {
        _id
        productId
        vendorId
        orderId
        itemId
        productName
        shortDescription
        skuId
        image {
          fileType
          fileURL
          mimeType
          originalName
        }
        returnPeriod
        mrp
        sellingPrice
        shippingCharge
        paymentMode
        paymentStatus
        orderDate
        shippingStatus
        shippedDate
        deliveryDate
        returnStatus
        returnDate
        returnRequestDate
        returnRejectedDate
        returnUserReason
        refundStatus
        refundAmount
        refundDate
        cancelledDate
        cancelUserReason
        courierId
        invoiceNumber
        invoice {
          fileType
          fileURL
          mimeType
          originalName
        }
      }
    }
  }
`;

const CANCEL_ORDER = gql`
  mutation CancelUserOrderProduct($input: CancelUserOrderProductInput!) {
    cancelUserOrderProduct(input: $input) {
      _id
    }
  }
`;

const DOWNLOAD_INVOICE = gql`
  mutation GetUserIvoiceSignedUrl($input: GetUserIvoiceUrlInput!) {
    getUserIvoiceSignedUrl(input: $input) {
      url
    }
  }
`;

function Orders(props) {
  const { wishlist, addToCart, removeFromWishlist, showQuickView } = props;
  const [flag, setFlag] = useState(0);
  const [orders, setOrders] = useState([]);
  const router = useRouter();
  const page = router.query.page ? parseInt(router.query.page) : 0;
  const [perPage, setPerPage] = useState(5);

  const onMoveFromToWishlit = (e, item) => {
    setFlag(2);
    e.preventDefault();
    addToCart(item);
    removeFromWishlist(item);
  };

  const removeProduct = (e, item) => {
    setFlag(1);
    e.preventDefault();
    removeFromWishlist(item);
  };

  const onQuickViewClick = (e, product) => {
    e.preventDefault();
    showQuickView(product.slug);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "#FFA500";
      case "IN_PROGRESS":
        return "#FFA500";
      case "COMPLETED":
        return "#44961D";
      default:
        return "#000000";
    }
  };

  const [cancelUserOrderProduct] = useMutation(CANCEL_ORDER);
  const [downloadInvoice] = useMutation(DOWNLOAD_INVOICE);

  const { data, loading, error, refetch } = useQuery(GET_ORDERS, {
    variables: { input: { page: page || 0, size: perPage } },
  });

  const totalPage = data
    ? parseInt(data?.getUserOrderProducts?.maxRecords / perPage) +
      (data?.getUserOrderProducts?.maxRecords % perPage ? 1 : 0)
    : 0; 

  useEffect(() => {
    if (error) {
      console.error("Error fetching orders:", error);
    } else if (data) {
      setOrders(data.getUserOrderProducts.records || []);
    }
  }, [data, error]);

  const orderCancel = async (id) => {
    try {
      const response = await cancelUserOrderProduct({
        variables: {
          input: {
            _id: id,
          },
        },
      });
      refetch();
      toast.success(<div style={{ padding: "10px" }}>Your order has been canceled.</div>);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = async (_id) => {
    try {
      const invoice = await downloadInvoice({
        variables: {
          input: {
            _id,
          },
        },
      });

      const url = invoice.data.getUserIvoiceSignedUrl.url;
      // console.log("invoice", url);
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', 'invoice.pdf');
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      window.open(url, "_blank");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Orders | Arab Deals</title>
      </Helmet>
      <main className="main">
        <div className="container">
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <ALink href="/">
                    <IoMdHome style={{ fontSize: "16px" }} />
                    {/* <i className="icon-home" ></i> */}
                  </ALink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <ALink href="/pages/account">My account</ALink>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  <ALink className="activeitem" href="/pages/orders">
                    Orders
                  </ALink>
                </li>
              </ol>
            </div>
          </nav>
        </div>
        {/* <div className="page-header"> */}

        {/* <div className="container d-flex flex-column align-items-center"> */}
        {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Orders
                                </li>
                            </ol>
                        </div>
                    </nav> */}

        {/* <h1>orders</h1>
         */}

        {/* <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
          <li className="">
              <ALink href="/pages/account">My Account</ALink>
            </li>
            <li className="active">
              <ALink href="/pages/orders">Orders</ALink>
            </li>
           
          </ul>
        </div>
      </div> */}

        <div className=" d-flex flex-column align-items-center">
          <ul
            className="checkout-progress-bar d-flex justify-content-center flex-wrap"
            style={{ backgroundColor: "#F9F9F9", width: "100%" }}
          >
            <li className="">
              <ALink href="/pages/account">My Account</ALink>
            </li>
            <li className="active">
              <ALink href="/pages/orders">Orders</ALink>
            </li>
          </ul>
        </div>

        <div
          className="container"
          style={{
            marginTop: "2rem",
            borderBottom: "1px solid",
            borderColor: "#E2E2E2",
          }}
        >
          <h4>Orders</h4>
        </div>
        <div className="container" style={{}}>
          <div className="success-alert">
            {flag === 1 ? <p>Product successfully removed.</p> : ""}
            {flag === 2 ? <p>Product added to cart successfully.</p> : ""}
          </div>
          {/* <div className="wishlist-title">
                    <h2>My wishlist on Porto Shop 36</h2>
                </div> */}
          {orders.length === 0 ? (
            <div className="wishlist-table-container">
              <div className="table table-wishlist mb-0">
                <div className="wishlist-empty-page text-center">
                  <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                  <p>No products Ordered</p>
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
            <div className="wishlist-table-container">
              <table className="table table-wishlist mb-0">
                <thead>
                  <tr>
                    <th className="thumbnail-col">Product</th>
                    <th className="status-col"></th>
                    <th className="status-col">Order Id</th>
                    <th className="status-col">Date</th>
                    <th className="status-col">Status</th>
                    <th className="price-col">Total Price</th>
                    <th className="action-col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, index) => (
                    <tr key={"wishlist-item" + index} className="product-row">
                      <td className="media-with-lazy">
                        <figure className="product-image-container">
                          <ALink
                            href={`/product/default/${item.productId}`}
                            className="product-image"
                          >
                            <LazyLoadImage
                              alt="product"
                              src={item.image.fileURL}
                              threshold={500}
                              width="80"
                              height="80"
                            />
                          </ALink>
                        </figure>
                      </td>
                      <td>
                        <h5 className="product-title">
                          <ALink href={`/product/default/${item.productId}`}>
                            {item.productName}
                          </ALink>
                        </h5>
                      </td>
                      <td style={{ color: "black" }}>{item.orderId}</td>
                      <td style={{ color: "black" }}>
                        {dayjs(item.orderDate).format("YYYY/MM/DD")}
                      </td>
                      <td style={{ color: getStatusColor(item?.shippingStatus) }}>
                        {item?.shippingStatus}
                      </td>

                      <td style={{ color: "black" }}>
                        <div className="price-box">
                          <>
                            {/* <span className="old-price">{'OMR ' + item.price[ 1 ].toFixed( 2 ) }</span> */}
                            <span className="product-price">
                              OMR{" "}
                              {parseFloat(
                                Number(item.sellingPrice) + Number(item?.shippingCharge)
                              ).toFixed(2)}
                            </span>
                          </>
                        </div>
                      </td>

                      {
                        item?.shippingStatus !== "DELIVERED" &&
                        item?.shippingStatus !== "SHIPPED" &&
                        item?.shippingStatus !== "CANCELED" ? (
                          <td className="action">
                            <button
                              className="btn btn-quickview mt-1 mt-md-0"
                              title="Quick View"
                              style={{ border: "1px solid" }}
                              onClick={(e) => {
                                e.preventDefault();
                                orderCancel(item._id);
                              }}
                            >
                              Cancel
                            </button>
                          </td>
                        ) : (
                          <>
                            {!item?.invoice ? (
                              <td className="action">
                                <button
                                  className="btn btn-quickview mt-1 mt-md-0"
                                  title="Quick View"
                                  style={{ border: "1px solid", display: "none" }}
                                  disabled
                                >
                                  Cancel
                                </button>
                              </td>
                            ) : (
                              <td className="action">
                                <button
                                  className="btn btn-dark "
                                  title="Quick View"
                                  style={{ border: "1px solid" }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleDownload(item._id);
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    style={{
                                      marginRight: "5px",
                                    }}
                                  >
                                    <path fill="white" d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z" />
                                  </svg>
                                  Invoice
                                </button>
                              </td>
                            )}
                          </>
                        )

                        // <>
                        //   <td>
                        //     <a
                        //       href={`/product/default/${item.productId}`}
                        //       className="btn btn-quickview mt-1 mt-md-0"
                        //       title="Quick View"
                        //       style={{ border: "1px solid" }}
                        //     >
                        //       view
                        //     </a>
                        //   </td>
                        // </>
                      }
                    </tr>
                  ))}
                </tbody>
              </table>
              {loading ||
                (orders && orders.length && (
                  <div className="container">
                    <nav className="toolbox toolbox-pagination border-0">
                      <Pagination totalPage={totalPage} />
                    </nav>
                  </div>
                ))}
            </div>
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
  })(Orders)
);
