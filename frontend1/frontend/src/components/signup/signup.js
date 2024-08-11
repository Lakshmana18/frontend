// import {
//     Box, Button, Card, CardBody, FormControl,
//     FormHelperText,
//     FormLabel,
//     Input, VStack
// } from "@chakra-ui/react";
// import axios from "axios";
// import { useState } from "react";
// import { api } from "../axios/api";

// export const SignUp = () => {

//     const [email, setGmail] = useState()
//     const [password, setPassword] = useState()
//     const [phone, setPhone] = useState()
//     const [register, setRegister] = useState()

//     const SignUp=async()=>{
//         await axios.post(api+"/signup",{email,password,phone,register})
//         .then((res)=>{
//             if(res.data.message){
//                 console.log(res?.data?.values)
//                 alert(res.data.message)
//             } else {
//                 alert(res.data.error)
//                 window.location.href="/home"
               
//             }
//         })
//         .catch((e)=>console.log(e))
//     }

//     return (
//         <Box
//             height="100vh"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             bg="gray.50"
//         >
//             <Card
//                 width="400px"
//                 boxShadow="lg"
//                 p={6}
//                 borderRadius="md"
//             >
//                 <CardBody>
//                     <VStack spacing={4} align="stretch">

//                         <FormControl id="registernumber">
//                             <FormLabel>Register Number</FormLabel>
//                             <Input type="text" focusBorderColor="teal.500" onChange={(e) => setRegister(e.target.value)} />
//                         </FormControl>

//                         <FormControl id="email">
//                             <FormLabel>Email address</FormLabel>
//                             <Input type="email" focusBorderColor="teal.500" onChange={(e) => setGmail(e.target.value)} />
//                             <FormHelperText>We'll never share your email.</FormHelperText>
//                         </FormControl>

//                         <FormControl id="password">
//                             <FormLabel>Password</FormLabel>
//                             <Input type="password" focusBorderColor="teal.500" onChange={(e) => setPassword(e.target.value)} />
//                             <FormHelperText>We'll never share your password.</FormHelperText>
//                         </FormControl>

//                         <FormControl id="number">
//                             <FormLabel>Phone number</FormLabel>
//                             <Input type="number" focusBorderColor="teal.500" onChange={(e) => setPhone(e.target.value)} />
//                         </FormControl>

//                         <Button colorScheme="teal" size="lg" mt={4} onClick={SignUp}>Sign Up</Button>
//                     </VStack>
//                 </CardBody>
//             </Card>
//         </Box>
//     )
// } 

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { api } from "../axios/api";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

export const SignUp = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");

  const signup = async () => {
    await axios.post(api + "/signup", { email, name, mobile, password })
      .then((res) => {
        if (res.data.message) {
          console.log(res?.data?.values);
          alert(res.data.message);
        } else {
          alert(res.data.error);
          window.location.href = "/home";
        }
      })
      .catch((e) => console.log(e));
  };

  const ForgotPassword = () => {
    nav('/forgotpassword');
  };

  return (
    
    <Box 
      maxW="lg" 
      mx="auto" 
      p={8} 
      borderWidth={1} 
      borderRadius="lg" 
      boxShadow="2xl" 
      backgroundImage="url('/Users/lakshman/Desktop/Hackathon/frontend/frontend1/frontend/public/p.jpeg')"
      bg="white"
      mt={12}
    >


      <Heading as="h2" size="xl" textAlign="center" color="teal.600" mb={6}>
        Create Your Account
      </Heading>
      <Stack spacing={6}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input 
            type="email" 
            placeholder="Enter your email" 
            onChange={(e) => setEmail(e.target.value)} 
            focusBorderColor="teal.500"
            _placeholder={{ color: 'gray.400' }}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input 
            type="text" 
            placeholder="Enter your name" 
            onChange={(e) => setName(e.target.value)} 
            focusBorderColor="teal.500"
            _placeholder={{ color: 'gray.400' }}
          />
        </FormControl>

        <FormControl id="mobile" isRequired>
          <FormLabel>Mobile</FormLabel>
          <Input 
            type="tel" 
            placeholder="Enter your mobile number" 
            onChange={(e) => setMobile(e.target.value)} 
            focusBorderColor="teal.500"
            _placeholder={{ color: 'gray.400' }}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input 
            type="password" 
            placeholder="Enter your password" 
            onChange={(e) => setPassword(e.target.value)} 
            focusBorderColor="teal.500"
            _placeholder={{ color: 'gray.400' }}
          />
          <FormHelperText>Enter your password.</FormHelperText>
        </FormControl>

        <Button 
          onClick={signup} 
          colorScheme="teal" 
          size="lg" 
          width="100%" 
          _hover={{ bg: "teal.600" }}
          _active={{ bg: "teal.700", transform: "scale(0.95)" }}
        >
          Sign Up
        </Button>

        <Text textAlign="center" color="gray.500">
          Already have an account?{' '}
          <Link color="teal.500" href="/signin">
            Sign In
          </Link>
        </Text>
        <Text textAlign="center" color="gray.500" onClick={ForgotPassword} cursor="pointer">
          Forgot password?
        </Text>
      </Stack>
    </Box>
  );
};
