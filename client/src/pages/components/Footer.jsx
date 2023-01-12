import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import {
  Facebook,
  Twitter,
  Telegram,
  Instagram,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Pamicious</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a
          possimus distinctio omnis minus enim. Possimus quae atque ut et. At
          recusandae rem tempora esse, eum distinctio repellat aliquam?
          Explicabo.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E44085">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Telegram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          42, Oloruntoyin street, oworonshoki Lagos Nigeria
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +234-081-6892-4643
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          aselemidivine@gmail.com
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
