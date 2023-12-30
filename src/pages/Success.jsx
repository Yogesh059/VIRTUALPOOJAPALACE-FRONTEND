// import { useLocation } from "react-router"
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Suc=styled.div`
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 3px;
width: 100vw;
height: 100vh;
`

const Success=()=>{
    // const location=useLocation();


    return(
        <Suc>
            Thanks for choosing your Best Pandit. Our Team will contact you very soon. Click here to &nbsp; <Link to="/" style={{ color: 'MediumSeaGreen', textDecoration: 'inherit'}}>Explore More Spiritual Offerings</Link>
        </Suc>
    )
}

export default Success;