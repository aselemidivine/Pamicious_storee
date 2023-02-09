import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useState} from 'react'
import { login } from "../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";


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
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;




const Login = () => {

  const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user)


  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password });
  }



  // async function loginUser(event) {
  //   event.preventDefault()
  //   const response = await fetch('http://localhost:5000/api/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },    
  //     body: JSON.stringify({
  //        email, password,
  //     }),   
  //   })

  //   const data = await response.json()

  //   if(data.user) {
  //     localStorage.setItem('token', data.user)
  //     alert('Login successful')
  //     window.location.href = '/dashboard'
  //   } else {
  //     alert('Please check your username and password!')
  //   }

  //   console.log(data)
  // }


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form >
          <Input 
            // value={text}
            type="text"
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="username"
         />

          <Input 
            type="password"
            placeholder="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button onClick={handleClick} disabled={isFetching} >LOGIN</Button>
          { error && <Error> Something went wrong... </Error>}
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW PASSWORD</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

















// const Login = () => {

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();


//   const handleClick = (e) => {
//     e.preventDefault()
//     login(dispatch, { username, password });
//   }



//   async function loginUser(event) {
//     event.preventDefault()
//     const response = await fetch('http://localhost:5000/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },    
//       body: JSON.stringify({
//          email, password,
//       }),   
//     })

//     const data = await response.json()

//     if(data.user) {
//       localStorage.setItem('token', data.user)
//       alert('Login successful')
//       window.location.href = '/dashboard'
//     } else {
//       alert('Please check your username and password!')
//     }

//     console.log(data)
//   }


//   return (
//     <Container>
//       <Wrapper>
//         <Title>SIGN IN</Title>
//         <Form onSubmit={loginUser} >
//           <Input 
//             value={email}
//             type="email"
//             onChange={(e) => setEmail(e.target.value)} 
//             placeholder="username"
//          />

//           <Input 
//             type="password"
//             placeholder="password" 
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//           <Button onClick={handleClick} type="submit">LOGIN</Button>
//           <Link>DO NOT REMEMBER THE PASSWORD?</Link>
//           <Link>CREATE A NEW PASSWORD</Link>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

export default Login;
