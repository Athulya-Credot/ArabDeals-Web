import { connect } from "react-redux";

import SlideToggle from "react-slide-toggle";
import ALink from "../../components/common/ALink";
import { getCartTotal } from "../../utils";
import { BiSolidUpArrow, BiSolidDownArrow, BiBorderRight } from "react-icons/bi";
import { useEffect, useState } from "react";
import Select from "react-select";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import withApollo from "../../server/apollo";
import Shipping from "../../components/features/adresses/Shippingaddress";
import { IoAddCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";

const countryOptions = [
  { value: "uae", label: "+971", flag: "/images/uae.svg" },
  { value: "india", label: "+91", flag: "/images/ind.svg" },
  { value: "oman", label: "+98", flag: "/images/omn.png" },
  { value: "saudi", label: "+966", flag: "/images/sar.png" },
];

const GET_CART = gql`
  query GetCart {
    getCart {
      products {
        _id
        productId
        quantity
        name
        stock
        sellingPrice
        price
        image
      }
      grandTotal
      subTotal
      deliveryCharge
    }
  }
`;
export const GET_ADDRESSES = gql`
  query GetUserShippingAddresses {
    getUserShippingAddresses {
      address {
        _id
        apartment
        city

        country
        email
        firstname
        houseNumber
        mobile
        postCode
        streetName
        suite
        unit
        isDefault
      }
    }
  }
`;

export const REMOVE_ADDRESS = gql`
  mutation RemoveUserShippingAddress($input: UserRemoveShippingAddressInput!) {
    removeUserShippingAddress(input: $input) {
      _id
      message
    }
  }
`;

export const PLACE_ORDER = gql`
  mutation CreateUserOrder($input: CreateUserOrderInput!) {
    createUserOrder(input: $input) {
      orderId
    }
  }
`;

function CheckOut() {
  const arabtoken = localStorage.getItem("arabtoken");
  const defaultOption = countryOptions[0];
  const [cartList, setCartList] = useState();
  const [isShipping, setIsshipping] = useState(false);
  const [isEdit, setIsedit] = useState(false);
  const [defaultAddressId, setDefaultAddressId] = useState("");
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const { data, loading, error, refetch } = useQuery(GET_ADDRESSES);
  const [RemoveUserShippingAddress] = useMutation(REMOVE_ADDRESS);
  const [CreateUserOrder] = useMutation(PLACE_ORDER);
  const router = useRouter();
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRight: "none",
      boxShadow: "none",
      borderRadius: "0",
      height: "100%",
      outline: "none",

      boxShadow: state.isFocused ? "none" : provided.boxShadow, // Preserve boxShadow when not focused
      "&:selected": {
        border: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      width: "150px",
      // background:"red" // Adjust the width as needed
    }),
    option: (provided, state) => ({
      ...provided,
      whiteSpace: "nowrap",
      background: state.isSelected ? "#EFEFEF" : "transparent",
      color: "black",
      background: "transparent",
      // Prevent text wrapping
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: () => ({
      display: "none",
    }),
  };

  const overrideDefaultStyles = `
  
  .react-select__control:focus {
    box-shadow: none;
    outline:none;
    borderColor:red;
    border:none
  }
`;
  const [toggler, setToggler] = useState(false);
  const token = localStorage.getItem("arabtoken");

  const {
    data: cartData,
    loading: cartLoading,
    error: cartError,
    refetch: cartRefetch,
  } = useQuery(GET_CART, { skip: !token });

  useEffect(() => {
    if (data && data.getUserShippingAddresses && data.getUserShippingAddresses.address.length > 0) {
      const defaultAddress = data.getUserShippingAddresses.address.find(
        (address) => address.isDefault
      );
      if (defaultAddress) {
        setDefaultAddressId(defaultAddress._id);
      }
    }
  }, [data]);

  useEffect(() => {
    if (cartError) {
      console.error("Error fetching cart data:", cartError);
    } else if (cartData) {
      setCartList(cartData.getCart.products || []);
    }
    cartRefetch();
  }, [cartData]);
  const handleCloseShipping = () => {
    setIsshipping(false);
    refetch();
  };
  const handleRemove = async (id) => {
    const response = await RemoveUserShippingAddress({
      variables: {
        input: {
          _id: id,
        },
      },
    });
    refetch();
  };

  const handleAddressSelection = (addressId) => {
    setDefaultAddressId(addressId);
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await CreateUserOrder({
        variables: {
          input: {
            grandTotal: cartData?.getCart?.grandTotal,
            paymentMode: "COD",
            shippingAddressId: defaultAddressId,
          },
        },
      });
      // toast.success(<div style={{padding:"10px"}}>Order Placed</div>)
      // router.push("/pages/success")
      router.push({
        pathname: "/pages/success",
        query: { orderId: response?.data?.createUserOrder?.orderId },
      });
    } catch (error) {
      // toast.error(<div style={{padding:"10px"}}>{error.message}</div>)
      router.push("/pages/failed");
    }
  };

  useEffect(() => {
    if (!arabtoken) {
      router.push("/pages/login");
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Checkout | Arab Deals</title>
      </Helmet>
      <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
        <li>
          <ALink href="/pages/cart">Shopping Cart</ALink>
        </li>
        <li className="active">
          <ALink href="/pages/checkout">Checkout</ALink>
        </li>
        <li className="disabled">
          <ALink href="#">Order Complete</ALink>
        </li>
      </ul>
      <main className="main main-test">
        {isShipping ? (
          <>
            <Shipping
              isEdit={isEdit}
              addressId={selectedAddressId}
              onClose={handleCloseShipping}
              isShipping={isShipping}
              onIsShipping={setIsshipping}
            />
          </>
        ) : (
          <div className="container checkout-container">
            {cartList?.length === 0 ? (
              <div className="cart-empty-page text-center">
                <p className="noproduct-msg mb-2">
                  Checkout is not available while your cart is empty.
                </p>
                <i className="icon-bag-2"></i>
                <p>No products added to the cart</p>
                <ALink
                  href="/shop"
                  className="btn btn-dark btn-add-cart product-type-simple btn-shop font1"
                >
                  return to shop
                </ALink>
              </div>
            ) : (
              <>
                {/* discount coupon */}
                {/* <div className="checkout-discount">
                <SlideToggle
                  duration={200}
                  collapsed
                  onExpanded={() => {
                    setToggler(true);
                  }}
                  onCollapsed={() => {
                    
                    setToggler(false);
                  }}
                >
                  {({ onToggle, toggle, setCollapsibleElement }) => (
                    <div className="m-b-3 mb-4">
                      <div
                        className="feature-box feature-coupon mb-0"
                        style={{ overflow: "hidden" }}
                      >
                        <div className="feature-box-content mt-0">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div>
                              <h4
                                className="mb-1"
                                style={{
                                  fontSize: "22px",
                                  fontWeight: "600",
                                  color: "black",
                                }}
                              >
                                Have a coupon?{" "}
                                <button
                                  className="btn btn-link btn-toggle"
                                  onClick={onToggle}
                                  style={{
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    color: "black",
                                  }}
                                >
                                  Enter your code
                                </button>
                              </h4>
                            </div>
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                background: "rgba(232,232,232,0.29)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              onClick={() => {
                                onToggle();
                                console.log(toggle);
                              }}
                            >
                              {toggler ? (
                                <BiSolidUpArrow style={{ color: "black" }} />
                              ) : (
                                <BiSolidDownArrow style={{ color: "black" }} />
                              )}
                            </div>
                          </div>
                          <p className="ls-0" style={{ color: "#737373" }}>
                            If you have a coupon code, please apply it below.
                          </p>

                          <form action="#" ref={setCollapsibleElement}>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control htmlForm-control-sm w-auto"
                                placeholder="Coupon code"
                                required
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-sm mt-0"
                                  type="submit"
                                >
                                  Apply Coupon
                                </button>
                              </div>
                            </div>
                            <div
                              className="row pl-3"
                              style={{ color: "#E30613", fontWeight: "500" }}
                            >
                              <p> Get available coupon codes</p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </SlideToggle>
              </div> */}
                <div className="row" style={{ marginTop: "62px" }}>
                  <div className="col-lg-7">
                    <div>
                      <h2 className="step-title">Select a shipping address</h2>
                      <div
                        className="shipingBox"
                        // style={{border:"1px solid #dfdfdf",borderRadius:"4px",padding:"10px"}}
                      >
                        {data && data?.getUserShippingAddresses?.address.length > 0
                          ? data?.getUserShippingAddresses?.address.map((address, index) => {
                              return (
                                <>
                                  <div
                                    key={index}
                                    style={{
                                      lineHeight: "19px",
                                      alignItems: "baseline",
                                      gap: "20px",
                                      border: "1px solid #dfdfdf",
                                      margin: "15px 0",
                                      padding: "10px",
                                      borderRadius: "4px",
                                    }}
                                  >
                                    <div>
                                      <div className="custom-control custom-radio d-flex">
                                        <input
                                          type="radio"
                                          className="custom-control-input"
                                          id={`shipaddress${index}`}
                                          value={address._id}
                                          checked={defaultAddressId === address._id}
                                          onChange={() => handleAddressSelection(address._id)}
                                        />

                                        <label
                                          className="custom-control-label"
                                          style={{ paddingLeft: "10px", maxWidth: "575px" }}
                                          htmlFor={`shipaddress${index}`}
                                        >
                                          {address?.firstname}, &nbsp;{address?.houseNumber},{" "}
                                          {address?.streetName}, &nbsp;{address?.postCode},
                                          {address?.city}, {address?.country}
                                        </label>
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        color: "black",
                                        width: "100%",
                                        alignItems: "flex-end",
                                        justifyContent: "flex-end",
                                      }}
                                    >
                                      <div
                                        className=" btn-address-edit"
                                        onClick={() => {
                                          setIsshipping(true);
                                          setIsedit(true);
                                          setSelectedAddressId(address?._id);
                                        }}
                                      >
                                        Edit
                                      </div>
                                      {data &&
                                        data?.getUserShippingAddresses?.address.length > 1 && (
                                          <button
                                            style={{
                                              cursor: "pointer",
                                              background: "none",
                                              border: "none",
                                              color: "#E30613",
                                            }}
                                            onClick={() => handleRemove(address?._id)}
                                          >
                                            Remove
                                          </button>
                                        )}
                                    </div>
                                  </div>
                                </>
                              );
                            })
                          : ""}

                        <div
                          style={{
                            display: "flex",
                            gap: "15px",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setIsshipping(true);
                          }}
                        >
                          <IoAddCircleOutline style={{ fontSize: "20px" }} />
                          <p className="addaddressbtn" style={{ margin: 0 }}>
                            {" "}
                            Add Address{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <ul className="checkout-steps">
                    <li>
                      <h2 className="step-title">Billing details</h2>

                      <form action="#" id="checkout-form">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                First name{" "}
                                <span style={{ color: "red" }}>*</span>
                                
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Last name{" "}
                                <span style={{ color: "red" }}>*</span>
                               
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Company name (optional)</label>
                          <input type="text" className="form-control" />
                        </div>

                        <div className="select-custom">
                          <label>
                            Country / Region{" "}
                            <span style={{ color: "red" }}>*</span>
                           
                          </label>
                          <select name="orderby" className="form-control">
                            <option value="" defaultValue="selected">
                              Vanuatu
                            </option>
                            <option value="1">Brunei</option>
                            <option value="2">Bulgaria</option>
                            <option value="3">Burkina Faso</option>
                            <option value="4">Burundi</option>
                            <option value="5">Cameroon</option>
                          </select>
                        </div>

                        <div className="form-group mb-1 pb-2">
                          <label>
                            Street address{" "}
                            <span style={{ color: "red" }}>*</span>
                           
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="House number and street name"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Apartment, suite, unite, etc. (optional)"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>
                            Town / City <span style={{ color: "red" }}>*</span>
                            
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="select-custom">
                          <label>
                            State / County{" "}
                            <span style={{ color: "red" }}>*</span>
                           
                          </label>
                          <select name="orderby" className="form-control">
                            <option value="" defaultValue="selected">
                              NY
                            </option>
                            <option value="1">Brunei</option>
                            <option value="2">Bulgaria</option>
                            <option value="3">Burkina Faso</option>
                            <option value="4">Burundi</option>
                            <option value="5">Cameroon</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>
                            Postcode / Zip{" "}
                            <span style={{ color: "red" }}>*</span>
                           
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>
                            Phone <span style={{ color: "red" }}>*</span>
                          </label>
                          <style>{overrideDefaultStyles}</style>
                          <div style={{display:"flex"}}>
                          <Select 
                            options={countryOptions}
                            isSearchable={false}
                            styles={customStyles}
                            defaultValue={defaultOption}
                            components={{
                              IndicatorSeparator: () => null,
                              DropdownIndicator: () => null,
                            }}
                            getOptionLabel={(option) => (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  width: "80px",
                                  background: "#EFEFEF",
                                  padding:"7px"
                                }}
 >
                                <img
                                  src={option.flag}
                                  alt={option.label}
                                  style={{ width: "20px", marginRight: "5px" }}
                                />
                                {option.label}
                              </div>
                            )}
                          />
                          <input type="tel" id="phoneNumber" class="form-control" required style={{borderLeft:"none"}} />
</div>
                         
                        </div>

                        <div className="form-group">
                          <label>
                            Email address{" "}
                            <span style={{ color: "red" }}>*</span>
                           
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            required
                          />
                        </div>
                        <SlideToggle duration={200} collapsed>
                          {({ onToggle, setCollapsibleElement }) => (
                            <div className="form-group mb-1">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="create-account"
                                  onChange={onToggle}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="create-account"
                                >
                                  Create an account?
                                </label>
                              </div>
                              <div
                                className="form-group"
                                ref={setCollapsibleElement}
                                style={{ overflow: "hidden" }}
                              >
                                <label className="mt-14">
                                  Create account password{" "}
                                  <abbr className="required" title="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="password"
                                  placeholder="Password"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>
                          )}
                        </SlideToggle>
                        <SlideToggle duration={300} collapsed>
                          {({ onToggle, setCollapsibleElement }) => (
                            <div className="form-group mb-11">
                              <div className="custom-control custom-checkbox mt-0 address-box">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="different-shipping"
                                  onChange={onToggle}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="different-shipping"
                                >
                                  Ship to a different address?
                                </label>
                              </div>
                              <div
                                className="shipping-info"
                                ref={setCollapsibleElement}
                                style={{ overflow: "hidden" }}
                              >
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>
                                        First name{" "}
                                        <abbr
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </abbr>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label>
                                        Last name{" "}
                                        <abbr
                                          className="required"
                                          title="required"
                                        >
                                          *
                                        </abbr>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <label>Company name (optional)</label>
                                  <input type="text" className="form-control" />
                                </div>

                                <div className="select-custom">
                                  <label>
                                    Country / Region{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <select
                                    name="orderby"
                                    className="form-control"
                                  >
                                    <option value="" defaultValue="selected">
                                      Vanuatu
                                    </option>
                                    <option value="1">Brunei</option>
                                    <option value="2">Bulgaria</option>
                                    <option value="3">Burkina Faso</option>
                                    <option value="4">Burundi</option>
                                    <option value="5">Cameroon</option>
                                  </select>
                                </div>

                                <div className="form-group mb-1 pb-2">
                                  <label>
                                    Street address{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="House number and street name"
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label>
                                    Town / City{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    required
                                  />
                                </div>

                                <div className="select-custom">
                                  <label>
                                    State / County{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <select
                                    name="orderby"
                                    className="form-control"
                                  >
                                    <option value="" defaultValue="selected">
                                      NY
                                    </option>
                                    <option value="1">Brunei</option>
                                    <option value="2">Bulgaria</option>
                                    <option value="3">Burkina Faso</option>
                                    <option value="4">Burundi</option>
                                    <option value="5">Cameroon</option>
                                  </select>
                                </div>

                                <div className="form-group">
                                  <label>
                                    Postcode / ZIP{" "}
                                    <abbr className="required" title="required">
                                      *
                                    </abbr>
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </SlideToggle>

                        <div className="form-group">
                          <label className="order-comments">
                            Order notes (optional)
                          </label>
                          <textarea
                            className="form-control"
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            required
                          ></textarea>
                        </div>
                      </form>
                    </li>
                  </ul> */}
                  </div>
                  <div className="col-lg-5">
                    <div className="order-box">
                      <div className="order-summary">
                        <h3>YOUR ORDER</h3>

                        <table className="table table-mini-cart">
                          <thead>
                            <tr>
                              <th colSpan="2" style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                                Product
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartList?.map((item, index) => (
                              <tr key={"checks" + index}>
                                <td className="product-col">
                                  <h2 className="product-title">
                                    {item?.name + " × " + item?.quantity}
                                  </h2>
                                </td>

                                <td className="price-col">
                                  <span>OMR {item?.sellingPrice * item?.quantity}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="cart-subtotal">
                              <td>
                                <h4>Subtotal</h4>
                              </td>

                              <td className="price-col">
                                <span>OMR {cartData?.getCart?.subTotal}</span>
                              </td>
                            </tr>
                            <tr className="cart-subtotal">
                              <td>
                                <h4>Shipping Charge</h4>
                              </td>

                              <td className="price-col">
                                <span>OMR {cartData?.getCart?.deliveryCharge}</span>
                              </td>
                            </tr>

                            {/* <tr className="order-shipping">
                            <td className="text-left" colSpan="2">
                              <h4 className="m-b-sm">Shipping</h4>
                              <div className="form-group form-group-custom-control">
                                <div className="custom-control custom-radio d-flex">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    name="radio"
                                    defaultChecked
                                  />
                                  <label className="custom-control-label">
                                    Local Pickup
                                  </label>
                                </div>
                              </div>

                              <div className="form-group form-group-custom-control mb-0">
                                <div className="custom-control custom-radio mb-0 d-flex">
                                  <input
                                    type="radio"
                                    name="radio"
                                    className="custom-control-input"
                                  />
                                  <label className="custom-control-label">
                                    Flat Rate
                                  </label>
                                </div>
                              </div>
                            </td>
                          </tr> */}

                            <tr className="order-total">
                              <td>
                                <h4>Total</h4>
                              </td>
                              <td>
                                <b className="total-price">
                                  <span>OMR {cartData?.getCart?.grandTotal}</span>
                                </b>
                              </td>
                            </tr>
                          </tfoot>
                        </table>

                        <div className="payment-methods">
                          <h4 className="">Payment methods</h4>
                          <div className="info-box with-icon p-0">
                            <div className="custom-control custom-radio d-flex">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="radio"
                                defaultChecked
                              />
                              <label className="custom-control-label">Cash on Delivery</label>
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          value="Place Order"
                          name="form-control"
                          className="btn btn-dark btn-place-order hoverbtn"
                          onClick={handlePlaceOrder}
                        >
                          Place order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartlist.cart ? state.cartlist.cart : [],
  };
};

export default withApollo({ ssr: typeof window === "undefined" })(
  connect(mapStateToProps)(CheckOut)
);
