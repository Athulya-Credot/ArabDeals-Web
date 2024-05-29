import { connect } from "react-redux";

import ALink from "../../components/common/ALink";
import Addresses from "../../components/features/adresses/Addresses";
import Shipping from "../../components/features/adresses/Shippingaddress"
import { useEffect, useState } from "react";
import withApollo from "../../server/apollo"
 import { useQuery, gql, useMutation } from "@apollo/react-hooks";
 import { CgEditBlackPoint } from "react-icons/cg";
 import { toast } from 'react-toastify';
// import { gql, useMutation,useLazyQuery } from "@apollo/client";
export const GET_ADDRESSES=gql`query GetUserShippingAddresses {
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
}`

export const REMOVE_ADDRESS=gql`mutation RemoveUserShippingAddress($input: UserRemoveShippingAddressInput!) {
  removeUserShippingAddress(input: $input) {
    _id
    message
  }
}`
export const DEFAULT_ADDRESS=gql`mutation UpdateUserShippingAddressAsDefault($input: updateUserShippingAddressAsDefaultInput!) {
  updateUserShippingAddressAsDefault(input: $input) {
    _id
    message
  }
}`
function addresses() {


  // const [catLevel2, { loading:level2loading, error:level2error, data:level2Data }] = useLazyQuery(GET_SHIPPING_ADDRESS);
  const [isAddress, setIsAddress] = useState(false);
  const [isShipping,setIsshipping]=useState(false)
  const { data, loading, error,refetch } = useQuery(GET_ADDRESSES);
  const [isEdit,setIsedit]=useState(false)
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [RemoveUserShippingAddress]=useMutation(REMOVE_ADDRESS)
  const [UpdateUserShippingAddressAsDefault]=useMutation(DEFAULT_ADDRESS)
useEffect(()=>{
  refetch();
},[])
const handleOpenShipping = () => {
  setIsShippingOpen(true);
};

const handleCloseShipping = () => {
  setIsshipping(false);
  refetch();
};
   const handleRemove=async(id)=>{
    const response=await RemoveUserShippingAddress({variables:{input:{
      _id:id
    }}})
    refetch();
   }
   const handleDefault=async(id)=>{
    const response=await UpdateUserShippingAddressAsDefault({variables:{input:{addressId:id}}})
    refetch();
    toast.success(response?.data?.updateUserShippingAddressAsDefault?.message)
   }
  return (
    <main className="main main-test">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Home</ALink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              addresses
            </li>
          </ol>
        </div>
      </nav>
      <div
        className=" d-flex flex-column align-items-center"
        style={{ backgroundColor: "#F9F9F9", marginTop:"10px" }}
      >
        {/* <h1>orders</h1>*/}

        <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap mb-0">
          <li className="">
            <ALink href="/pages/account">My Account</ALink>
          </li>
          <li className="active">
            <ALink href="/pages/orders">Addresses</ALink>
          </li>
        </ul>
      </div>

      <div
        className="container"
        style={{
          marginTop: "3rem",
          borderBottom: "1px solid",
          borderColor: "#E2E2E2",
          padding: "2px",
        }}
      >
        <h2 className="step-title addresstitle">Address</h2>
      </div>
     
      {isAddress ? (
        <>
          <Addresses />
        </>

      ) :isShipping ? (<><Shipping isEdit={isEdit} addressId={selectedAddressId} onClose={handleCloseShipping}/></>): (
        <>
          <div
            className="container d-flex justify-content-between flex-column flex-sm-row w-sm-100"
            style={{ gap: "5rem", marginBottom: "75px" }}
          >
            {/* <div
              className=""
              style={{
                width: "653.45px",
                height: "234px",
                border: "1px solid ",
                marginTop: "40px",
                borderColor: "#CDCDCD",
              }}
            >
              <div className="p-5">
                <h4
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600px",
                    fontSize: "24px",
                    lineHeight: "20px",
                  }}
                >
                  Addresses
                </h4>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400px",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  You have not set up this type of address yet.
                </p>

                <button
                  type="submit"
                  className="btn  mr-0"
                  style={{
                    border: "1px solid ",
                    marginTop: "20px",
                    width: "152px",
                    height: "43px",
                    padding: "10px",
                  }}
                  onClick={() => {
                    setIsAddress(true);
                  }}
                >
                  ADD ADDRESSES
                </button>
              </div>
            </div> */}
{/* shipping */}
<div
              className="custom-addressbox"
              // style={{
              //   width: "653.45px",
              //   minHeight: "234px",
              //   border: "1px solid ",
              //   marginTop: "40px",
              //   borderColor: "#CDCDCD",
              // }}
            >
              <div className="p-5">
                <h4
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600px",
                    fontSize: "24px",
                    lineHeight: "20px",
                  }}
                >
                  Shipping Addresses
                </h4>
                {data && data?.getUserShippingAddresses?.address.length>0 ? data?.getUserShippingAddresses?.address.map((address,index)=>{
                  return(
                    <>
                  <div key={index} style={{padding:"20px 0",display:"flex",lineHeight:"19px"}}>
                    <CgEditBlackPoint style={{fontSize:"40px",color:"#E30613",paddingRight:"20px"}}/>
                    <div>
                    <span>
                      {address?.firstname}
                    </span><br/>
                    <span>{address?.houseNumber}, {address?.streetName}</span><br/>
                    <span>PostCode:&nbsp;{address?.postCode}</span><br/>
                    <span>{address?.city}, {address?.country}</span>
                    <div style={{display:"flex",gap:"35px",color:"black",marginTop:"10px"}}>

                      <button className="editbtn" style={{cursor:"pointer",background:"none",border:"none",fontWeight:"600", color:"black !important"}} onClick={()=>{setIsshipping(true);setIsedit(true);setSelectedAddressId(address?._id)}}>Edit</button>
                      {data && data?.getUserShippingAddresses?.address.length>1 &&<button className="editbtn" style={{cursor:"pointer",background:"none",border:"none",fontWeight:"600"}} onClick={()=>handleRemove(address?._id)}>Remove</button>}

                     { !address.isDefault && <button style={{cursor:"pointer",background:"none",border:"none",fontWeight:"600"}} onClick={()=>handleDefault(address?._id)}>Set as default</button>}
                    
                    </div></div>
                    </div>
                  
                    </>)

                }) :
                (<p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400px",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  You have not set up this type of address yet.
                </p>)}

                <button
                  type="submit"
                  className="btn  mr-0"
                  style={{
                    border: "1px solid ",
                    marginTop: "20px",
                    width: "152px",
                    height: "43px",
                    padding: "10px",
                    background:"white"
                  }}
                  onClick={() => {
                    setIsshipping(true);
                  }}
                >
                  ADD ADDRESSES
                </button>
              </div>
            </div>

          </div>
        </>
      )}
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartlist.cart ? state.cartlist.cart : [],
  };
};

export default withApollo( { ssr: typeof window === 'undefined' } )(addresses);
