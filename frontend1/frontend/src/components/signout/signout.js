// src/components/SignOutForm.js
import React from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SignOutForm = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear user session or authentication data (e.g., localStorage, cookies)
    localStorage.removeItem('authToken'); // Example: removing auth token
    sessionStorage.removeItem('userData'); // Example: removing user data

    // Redirect to login page or home page
    navigate('/login');
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      mt={12}
      bg="white"
    >
      <Heading as="h2" size="lg" textAlign="center" color="teal.600" mb={6}>
        Sign Out
      </Heading>
      <VStack spacing={4}>
        <Button
          colorScheme="teal"
          size="lg"
          width="100%"
          onClick={handleSignOut}
          _hover={{ bg: "teal.600" }}
          _active={{ bg: "teal.700", transform: "scale(0.95)" }}
        >
          Sign Out
        </Button>
      </VStack>
    </Box>
  );
};

export default SignOutForm;
