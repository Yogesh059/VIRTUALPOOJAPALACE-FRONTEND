import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from './CategoryItem';
import React from "react";
import {mobile} from "../responsive"

const Container=styled.div`
display: flex;
flex-wrap: wrap;
padding: 30px;
justify-content: space-between;
${mobile({ padding: "0px",flexDirection:"column" })}
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories;
