import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from "react-stripe-checkout";
import { publicRequest, userRequest } from '../requestMethods';
import { useNavigate, Link } from 'react-router-dom'
import { getUserProducts } from '../service/productApi'
import Summary from './Summary'


import ProductCart from './ProductCard'


const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) => props.type === "filled" ? "black" : "tranparent"};
color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({ display: "none" })}
`

const TopText = styled.span`
text-decoration: none;
cursor: pointer;
margin: 0px 10px;
font-size: 20px;
color: teal;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
flex:3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
flex:2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

// const Summary = styled.div`
// flex: 1;
// border: 0.5px solid lightgray;
// border-radius: 10px;
// padding: 20px;
// height: 50vh;
// `
// const SummaryTitle = styled.h1`
// font-weight: 200;
// `
// const SummaryItem = styled.div`
// margin: 30px 0px;
// display: flex;
// justify-content: space-between;
// font-weight: ${props => props.type === "total" && "500"};
// font-size: ${props => props.type === "total" && "24px"};
// `
// const SummaryItemText = styled.span``

// const SummaryItemPrice = styled.span``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`

const Cart = () => {
    const cart = useSelector(state => state.cart);
    // const cart = useSelector((state) => state.cart);
console.log("Cart state:", cart);

    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();
    // const [quantity, setQuantity] = useState(cart.products.quantity);

    const [productList, setProductList] = useState();
    const [user,setUser]=useState();

    // const [totalPrice, setTotalPrice]=useState(0);
    //  if(data){
        // setTotalPrice(totalPrice+ data?.price*product?.quantity)
        // totalPrice=totalPrice+ product.quantity*product.pricePerItem 
        // console.log("total price is ",totalPrice);
        //  }
    let a = 0;
    let totalPrice = 0;

    const onToken = (token) => {
        setStripeToken(token);
    };

    const userId = JSON.parse(localStorage.getItem("user"))._id

    // const handleQuantity = (type) => {
    //     if (type === "dec") {
    //         quantity > 1 && setQuantity(quantity - 1);
    //         console.log(quantity)
    //     } else {
    //         setQuantity(quantity + 1);
    //     }
    // }

    useEffect(() => {
        getUserProductsList();

    }, [])

    const getUserProductsList = async () => {
        const list = await getUserProducts(userId);
        const res=await publicRequest.get(`/users/find/${userId}`);
        setUser(res.data.username);
        // console.log("response ",res.data);
        setProductList(list);
    }

    // useEffect(() => {
    //     const makeRequest = async () => {
    //         try {
    //             const res = await userRequest.post("/checkout/payment",
    //                 {
    //                     tokenId: stripeToken.id,
    //                     amount: cart.total * 100,
    //                 });
    //             // history("/success", { data: res.data })
    //             if (res){
    //                 history("/success");
    //             } 
    //         } catch (e) {
    //             console.log(e);
    //         }

    //     };
    //     stripeToken && makeRequest();
    // }, [stripeToken, cart.total, history]);

    return (
        <Container>
            <Navbar length={productList?.length} />
            <Announcement />
            <Wrapper>
                <Title>🕉️ Your Divine Collection</Title>
                <Top>
                    <Link to="/">
                        <TopButton>Explore More Spiritual Offerings</TopButton>
                    </Link>
                    <TopTexts>
                        {/* <TopText>Shopping Bag ({cart.products.length})</TopText> */}
                        <TopText>🕉️ Divine Collection ({productList?.length})</TopText>
                        {/* <TopText>Your WishList (0)</TopText> */}
                    </TopTexts>
                    {/* <StripeCheckout
                        name="rks"
                        img="https://avatars.githubusercontent.com/u/1486366>v=4"
                        billingAddress
                        shippingAddress
                        description={`Your total is ${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Button>CHECKOUT NOW</Button>
                    </StripeCheckout> */}
                </Top>
                <Bottom>
                    <Info>
                        {
                            productList?.map(product => (
                                <>
                                    {
                                        <div style={{ display: "none" }}> {a = a + product.quantity * product.pricePerItem}</div>
                                    }
                                    <ProductCart product={product} totalPrice={totalPrice} getUserProductsList={getUserProductsList} />
                                    <Hr />
                                </>
                            ))
                        }
                    </Info>
                    <Summary totalPrice={a} productList={productList} user={user}/>
                </Bottom>
                
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
