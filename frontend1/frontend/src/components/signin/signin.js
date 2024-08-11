import { 
  Card, 
  CardBody, 
  FormControl, 
  FormHelperText, 
  FormLabel, 
  Input, 
  Button, 
  VStack, 
  Box, 
  Heading, 
  Text 
} from "@chakra-ui/react";
import { useState } from "react";
import axios from 'axios';
import { api } from "../axios/api";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signin = async () => {
    await axios.post(api + "/signin", { email, password })
      .then((res) => {
        if (res.data.message) {
          console.log(res?.data?.values);
          alert(res.data.message);
        } else {
          alert(res.data.error);
          window.location.href = "/signup";
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <Box 
      height="100vh" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      bgGradient="linear(to-r, teal.500, green.500)"
      // backgroundImage=URL={'images/'}
    >
      <Card 
        width="400px" 
        boxShadow="2xl" 
        p={8} 
        borderRadius="lg" 
        bg="white"
        transform="translateY(0)"
        transition="transform 0.3s ease-in-out"
        _hover={{
          transform: "translateY(-5px)"
        }}
      >
        <CardBody>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg" textAlign="center" color="teal.600"><strong>Welcome Back</strong></Heading>
            <Text fontSize="md" textAlign="center" color="gray.500">
              Sign in to your account
            </Text>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                focusBorderColor="teal.500" 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email"
                _placeholder={{ color: 'gray.400' }}
              />
              <FormHelperText>Enter email</FormHelperText>
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input 
                type="password" 
                focusBorderColor="teal.500" 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password"
                _placeholder={{ color: 'gray.400' }}
              />
              <FormHelperText>Enter your password</FormHelperText>
            </FormControl>

            <Button 
              colorScheme="teal" 
              size="lg" 
              width="100%" 
              mt={4} 
              onClick={Signin}
              _hover={{ bg: "teal.600" }}
              _active={{ bg: "teal.700", transform: "scale(0.95)" }}
            >
              SignIn
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};
