import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo=styled.h1``
const Desc=styled.p`
margin: 20px 0px;
`
const SocialContainer=styled.div`
display: flex;
`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display:"none"})}
`
const Title=styled.h3`
margin-bottom: 30px;
`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor:"#fff8f8"})}
`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment=styled.img`
width: 50%;

`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>VBC</Logo>
                <Desc>
                The Virtual Pooja Palace is an innovative online platform that enables users to participate in religious ceremonies and rituals from the comfort of their homes. Through immersive virtual experiences, individuals can perform poojas (worship), make offerings, and engage in spiritual practices, all within a digital environment. This platform seeks to provide a convenient and accessible way for people to connect with their faith and traditions, bridging the gap between technology and spirituality in the modern world."
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Basket</ListItem>
                    <ListItem>Category</ListItem>
                    <ListItem>category Item</ListItem>
                    <ListItem>Pooja</ListItem>
                    <ListItem>Rituals</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    {/* <ListItem>WishList</ListItem> */}
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room style={{marginRight:"10px"}}/> IK Gujral Punjab Technical University, Kapurthala
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>+91 9518100916,8119963399
            </ContactItem>
            <ContactItem>
              <MailOutline style={{marginRight:"10px"}}/>  ykj131@gmail.com, manisaroychowdhury@gmail.com
            </ContactItem>
            <Payment src="http://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
