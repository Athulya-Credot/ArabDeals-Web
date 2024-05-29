import React, { useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import withApollo from "../../../server/apollo"
import { gql, useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import ALink from '../../common/ALink';
import { IoMdArrowBack } from "react-icons/io";


export const SHIPPING_ADDRESS = gql`mutation CreateUserShippingAddress($input: UserCreateShippingAddressInput!) {
    createUserShippingAddress(input: $input) {
      _id
    }
  }`
export const GET_ADDRESSES = gql`query GetUserShippingAddress($input: GetUserShippingAddressInput!) {
    getUserShippingAddress(input: $input) {
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
     
    }
  }`
export const UPDATE_SHIPPING = gql`mutation EditUserShippingAddress($input: UserEditShippingAddressInput!) {
    editUserShippingAddress(input: $input) {
      _id
    }
  }`
function Addresses({ isEdit, addressId, onClose, isShipping, onIsShipping }) {
    const router = useRouter()

    const { data: getAddress, loading: getAddressLoading, error: getAddressError } = useQuery(GET_ADDRESSES, { variables: { input: { _id: addressId } } })
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
        control,
    } = useForm({
        defaultValues: {
            firstname: "",
            country: "",
            streetName: "",
            houseNumber: "",
            city: "",
            postCode: "",
            apartment: "",
            email: "",
            mobile: "",


        },
    });

    useEffect(() => {
        if (isEdit) {

            setValue("firstname", getAddress?.getUserShippingAddress?.firstname)
            setValue("country", getAddress?.getUserShippingAddress?.country)
            setValue("houseNumber", getAddress?.getUserShippingAddress?.houseNumber)
            setValue("streetName", getAddress?.getUserShippingAddress?.streetName)
            setValue("city", getAddress?.getUserShippingAddress?.city)
            setValue("postCode", getAddress?.getUserShippingAddress?.postCode)
            setValue("mobile", getAddress?.getUserShippingAddress?.mobile)
            setValue("email", getAddress?.getUserShippingAddress?.email)
            setValue("apartment", getAddress?.getUserShippingAddress?.apartment)

        }
    }, [isEdit, getAddress])

    const [CreateUserShippingAddress] =
        useMutation(SHIPPING_ADDRESS);
    const [EditUserShippingAddress] = useMutation(UPDATE_SHIPPING);

    const onSubmit = async (values) => {
        event.preventDefault();
        try {

            if (isEdit) {
                const response = await EditUserShippingAddress({ variables: { input: { _id: getAddress?.getUserShippingAddress?._id, ...values } } });
                if (response) {
                    toast.success(<div style={{ padding: "10px" }}>Shipping address updated</div>)
                    onClose();
                }
            }
            else {

                const response = await CreateUserShippingAddress({ variables: { input: { ...values } } });
                if (response) {
                    localStorage?.setItem("shippingId", response?.data?.createUserShippingAddress?._id)
                    toast(<div style={{ padding: "10px" }}>Shipping address added</div>)
                    onClose();
                    reset()
                }
            }
        } catch (error) {
            toast(<div style={{ padding: "10px" }}>{error.message}</div>)
        }

    }


    const fieldRules = {
        city: {
            required: "City is required",
        },
        firstname: {
            required: "First Name is required",
        },
        houseNumber: {
            required: "HouseNumber is required",
        },
        mobile: {
            required: "Mobile is required",
        },
        postCode: {
            required: "postCode is required",
        },
        streetName: {
            required: "Street Name is required",
        },
        email: {
            pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid email address"
            }
        }
    }
    return (
        <div>
            <div className="container checkout-container">


                <div className="row">
                    <div className="col-lg-12">
                        <ul className="checkout-steps">
                            <li>
                                <div
                                    className="container custom-formspace"
                                // style={{
                                //     marginTop: "6rem",


                                //     padding: "2px"
                                // }}
                                >
                                    <h4 className="step-title" style={
                                        { display: "flex", alignItems: "center", gap: "10px" }
                                    }>
                                        <div onClick={() => onIsShipping(!isShipping)} className={{ "width": "40px", "height": "40px", "backgroundColor": "rgba(232, 232, 232, 0.29)", "borderRadius": "50%", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
                                            <IoMdArrowBack style={{ fontSize: "20px" }} />
                                        </div>

                                        Shipping address</h4>
                                </div>


                                <form onSubmit={handleSubmit(onSubmit)} id="checkout-form" style={{ marginTop: "40px" }}>
                                    {/* <div className="row"> */}
                                    {/* <div className="col-md-6"> */}
                                    <div className="form-group">
                                        <label
                                            style={{
                                                fontFamily: "Poppins",
                                                fontWeight: "400px",
                                                lineHeight: "20px",
                                            }}
                                        >
                                            First name{" "}
                                            <ab className="required" title="required">
                                                *
                                            </ab>
                                        </label>
                                        <Controller
                                            control={control}
                                            name="firstname"
                                            render={({ field: { onChange, value } }) => (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={value}
                                                    onChange={onChange}
                                                    style={{ marginTop: "10px" }}
                                                />)}
                                            rules={fieldRules.firstname}
                                        />
                                        {errors?.firstname ? (
                                            <div style={{ color: "red", fontWeight: "300" }}>
                                                {errors?.firstname?.message}
                                            </div>
                                        ) : null}
                                    </div>






                                    <div className="form-group">
                                        <label
                                            style={{
                                                fontFamily: "Poppins",
                                                fontWeight: "400px",
                                                lineHeight: "20px",
                                            }}
                                        >
                                            Country / Region {" "}

                                        </label>
                                        <Controller
                                            control={control}
                                            name="country"
                                            render={({ field: { onChange, value } }) => (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={value}
                                                    onChange={onChange}
                                                    style={{ marginTop: "10px" }}

                                                />)}
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label>
                                            Street address <span className="required">*</span>
                                        </label>
                                        <Controller
                                            control={control}
                                            name="houseNumber"
                                            render={({ field: { onChange, value } }) => (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="House number and street name"
                                                    value={value}
                                                    onChange={onChange}
                                                    style={{ marginTop: "10px" }}
                                                />)}
                                            rules={fieldRules.houseNumber}
                                        />
                                        {errors?.houseNumber ? (
                                            <div style={{ color: "red", fontWeight: "300" }}>
                                                {errors?.houseNumber?.message}
                                            </div>
                                        ) : null}
                                        <Controller
                                            control={control}
                                            name="streetName"
                                            render={({ field: { onChange, value } }) => (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                                    value={value}
                                                    onChange={onChange}
                                                />)}
                                            rules={fieldRules.streetName}
                                        />
                                        {errors?.streetName ? (
                                            <div style={{ color: "red", fontWeight: "300" }}>
                                                {errors?.streetName?.message}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="form-group">
                                        <label>
                                            Twon/City <span className="required">*</span>
                                        </label>
                                        <Controller
                                            control={control}
                                            name="city"
                                            render={({ field: { onChange, value } }) => (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Abu Dhabi"
                                                    value={value}
                                                    onChange={onChange}
                                                    style={{ marginTop: "10px" }}
                                                />)}
                                            rules={fieldRules.city}
                                        />
                                        {errors?.city ? (
                                            <div style={{ color: "red", fontWeight: "300" }}>
                                                {errors?.city?.message}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="form-group">
                                        <label>
                                            Pincode/Zip <span className="required">*</span>
                                        </label>
                                        <Controller
                                            control={control}
                                            name="postCode"
                                            render={({ field: { onChange, value } }) => (
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="6730016"
                                                    value={value}
                                                    onChange={onChange}
                                                    style={{ marginTop: "10px" }}
                                                />)}
                                            rules={fieldRules.postCode}
                                        />
                                        {errors?.postCode ? (
                                            <div style={{ color: "red", fontWeight: "300" }}>
                                                {errors?.postCode?.message}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="form-group">
                                        <label>
                                            Phone<span className="required">*</span>
                                        </label>
                                        <div className="input-group" style={{ marginTop: "10px" }}>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" style={{ padding: "10px" }}>
                                                    <img src="images\brands\flag1.svg" alt="Flag" width="24" height="16" />
                                                    +971
                                                </span>
                                            </div>
                                            <Controller
                                                control={control}
                                                name="mobile"
                                                render={({ field: { onChange, value } }) => (
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        placeholder="Enter your phone number"
                                                        value={value}
                                                        onChange={onChange}
                                                    />)}
                                                rules={fieldRules.mobile}
                                            />

                                        </div>
                                        {errors?.mobile ? (
                                            <div style={{ color: "red", fontWeight: "300" }}>
                                                {errors?.city?.mobile}
                                            </div>
                                        ) : null}
                                    </div>



                                    <div className="form-group">
                                        <label>
                                            Email
                                            {/* <span className="required">*</span> */}
                                        </label>
                                        <Controller
                                            control={control}
                                            name="email"
                                            render={({ field: { onChange, value } }) => (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={value}
                                                    onChange={onChange}

                                                    style={{ marginTop: "10px" }}
                                                />)}
                                        />

                                    </div>



                                    <div
                                        className="container"
                                        style={{ display: "flex", justifyContent: "flex-end" }}
                                    >
                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-dark mr-0">
                                                Save changes
                                            </button></div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withApollo({ ssr: typeof window === 'undefined' })(Addresses)