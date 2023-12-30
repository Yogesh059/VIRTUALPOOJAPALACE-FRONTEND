import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
height: 30px;
background-color: #FA7654;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

function Announcement() {
  return (
    <Container>
         Special Offers on selected pooja! Till 31 Dec.. All Poojas and Rituals are at Rs. 2100
    </Container>
  )
}

export default Announcement;
