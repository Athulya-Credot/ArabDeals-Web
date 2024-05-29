;
import React from 'react'
import { useRouter } from 'next/router';
import withApollo from "../../server/apollo";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { connect } from "react-redux";

const GET_ORDER_DETAILS=gql`query GetUserOrderDetails($input: GetUserOrderDetailsInput!) {
  getUserOrderDetails(input: $input) {
    _id
    orderDate
    orderId
    orderPriceInfo {
      totalMRP
      totalSellingPrice
      totalShippingCharge
      totalRefundAmount
    }
    orderStatus
    paymentMode
    shippingAddress {
      firstname
      houseNumber
      streetName
    }
  }
}`;


function success() {
    const router = useRouter();
    const shopHandle=(e)=>{
        e.preventDefault();
        router.push('/shop')
    }
    const shopOrder=(e)=>{
        e.preventDefault();
        router.push('/pages/orders')
    }



// Retrieve the order ID from the query parameters
const { orderId } = router.query;

const { loading, error, data } = useQuery(GET_ORDER_DETAILS, {
    variables: { input: { orderId } },
});



const getExpectedDeliveryDate = (orderDate) => {
    const newDate = new Date(orderDate);
    newDate.setDate(newDate.getDate() + 10);
    return newDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};



const order = data?.getUserOrderDetails;
const orderDate = order?.orderDate;
const expectedDeliveryDate = getExpectedDeliveryDate(orderDate);
  return (
    <div class='container' >
    {/* <div   style={{display:"flex" ,alignItems:"center",textAlign:"center",flexDirection:"column", gap:"15px" , maxWidth:"700px",width:"100%",margin:"auto", marginTop:"110px"}}>
    <img src='/images/thankyouIcon.svg' alt="Thank You Image"  />
        <h4>Your order Was Successfully Placed</h4>
        
        <span style={{fontWeight:"400px",fontSize:"10px"}}>Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date of your item. </span>
        <div class="centered-content" style={{ display:"flex",gap:"20px"}}>
        <button style={{minWidth:"150px", height:"50px", backgroundColor:"#FFFFFF"}}>CONTINUE SHOPPING</button>
        <button style={{minWidth:"150px", height:"50px",backgroundColor:"#000000", color:"#FFFFFF"}}>VIEW ORDER</button>
    </div>
    </div> */}

<div class='centered-content'  style={{textAlign:"center",marginBottom:"134px" }}>
            <img src='/images/thankyouIcon.svg' alt="Thank You Image" />
            <h4>Your order Was Successfully Placed</h4>
            <span style={{fontWeight:"400px",fontSize:"12px", color:"#000000"}}>Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date of your item.</span>
            <div class="buttons">
                <button onClick={(e)=>shopHandle(e)}>CONTINUE SHOPPING</button>
                <button onClick={(e)=>shopOrder(e)}>VIEW ORDER</button>
            </div>
        </div>

    <hr/>
    <div style={{ display: 'flex', justifyContent: 'space-around',  marginLeft:"20px" }}>
        <div className='head-card'>
        <h4>Delivery to</h4>
        </div>
        <div className='head-card'>
        <h4>Payment by</h4>
        </div>
      </div>
    <div class="cards-container" style={{marginBottom:"40px "}}>
   
        <div class="card">
       
            <div style={{marginTop:"40px", marginBottom:"40px", marginLeft:"20px"}}>
            <img src="/images/locationIcon.svg" alt="Card Image 1"/>
            </div>
             <div>
            <p style={{fontWeight:"400px",fontSize:"18px", color:"#000000"}}>{data?.getUserOrderDetails?.shippingAddress?.firstname}</p>
            <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>{data?.getUserOrderDetails?.shippingAddress?.houseNumber},{data?.getUserOrderDetails?.shippingAddress?.streetName} </p>
            <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>{data?.getUserOrderDetails?.shippingAddress?.phoneNumber}</p>
            </div>
           
           
        </div>
        
        <div class="card">
        
         <div style={{marginTop:"40px", marginBottom:"40px", marginLeft:"20px"}}>
         <img src="/images/card.svg" alt="Card Image 1"/>
         </div>
          <div>
         <p style={{fontWeight:"400px",fontSize:"18px", color:"#000000"}}>{data?.getUserOrderDetails?.paymentMode}</p>
         <div style={{display:"flex", flexDirection:"row", gap:"20px",}}>
         <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>Subtotal</p>
         <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>OMR {data?.getUserOrderDetails?.orderPriceInfo?.totalSellingPrice}</p>
         </div>
         <div style={{display:"flex", flexDirection:"row", gap:"20px",}}>
         <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>Expected Delivery</p>
         <p style={{fontWeight:"400px",fontSize:"11px", color:"#000000"}}>{expectedDeliveryDate}</p>
         </div>
     
         </div>
        
        
     </div>
    </div>


    <hr/>




    

</div>




  )
}

export default withApollo({ ssr: typeof window === "undefined" })((success))