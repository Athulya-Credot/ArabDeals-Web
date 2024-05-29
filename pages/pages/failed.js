import React from 'react'
import { useRouter } from 'next/router';

function failed() {
    const router = useRouter();
    const shopHandle=(e)=>{
        e.preventDefault();
        router.push('/shop')
    }
  return (
    <div className='container ' style={{textAlign:"center"}}>
        <div class='centered-content' style={{marginBottom:"134px"}}>
            <img src='/images/failed.svg' alt="Thank You Image" />
            <h4>Oops! something Went Wrong</h4>
            <span style={{fontWeight:"400px",fontSize:"12px", color:"#000000"}}>We are unable to process your order at this time</span>
            <div class="buttons">
               
                <button onClick={(e)=>shopHandle(e)}>TRY AGAIN</button>
            </div>
        </div>

    <hr />

    </div>
  )
}

export default failed