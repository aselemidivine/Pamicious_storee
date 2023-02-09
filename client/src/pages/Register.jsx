import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useState} from 'react'
// import { useHistory } from "react-router-dom"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1513237726167-2ae8ea985930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  // const history = useHistory()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },    
      body: JSON.stringify({
        name, email, password,
      }),   
    })

    const data = await response.json()

    // if(data.status === 'ok') {
    //   history.push('/login')
    // }

    console.log(data)
  }


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={registerUser} >

          <Input placeholder="username" />

          <Input 
           type="text"
           placeholder="last name"
           onChange={(e) => setName(e.target.value)}
           value={name}
          />

      
          <Input 
            type="password"
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <Input 
            value={email}
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input placeholder="confirm password" />

          <Agreement>
            By creating an account, i consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit" >CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
