// import React from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Flex,
//   HStack,
//   Button,
//   Spacer,
//   Heading,
//   Text,
//   Link
// } from '@chakra-ui/react';
// import { BrowserRouter as Router, Route, Switch, Link as RouterLink } from 'react-router-dom';

// function Home() {
//   return <Text>Welcome to the Home Page</Text>;
// }

// function About() {
//   return <Text>About Our Platform</Text>;
// }

// function ContactUs() {
//   return <Text>Contact Us for More Information</Text>;
// }

// function App() {
//   return (
//     <ChakraProvider>
//       <Router>
//         <Box p={4} bg="green.500" color="white">
//           <Flex align="center">
//             <HStack spacing={8}>
//               <Link as={RouterLink} to="/">
//                 <Heading size="md">Home</Heading>
//               </Link>
//               <Link as={RouterLink} to="/about">
//                 <Heading size="md">About</Heading>
//               </Link>
//               <Link as={RouterLink} to="/contactus">
//                 <Heading size="md">Contact Us</Heading>
//               </Link>
//             </HStack>
//             <Spacer />
//             <HStack spacing={4}>
//               <Button as={RouterLink} to="/login" colorScheme="teal" variant="outline">
//                 Login
//               </Button>
//               <Button as={RouterLink} to="/register" colorScheme="teal">
//                 Register
//               </Button>
//             </HStack>
//           </Flex>
//         </Box>
//         <Box p={4}>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/contactus" component={ContactUs} />
//             <Route path="/login" component={() => <Text>Login Page</Text>} />
//             <Route path="/register" component={() => <Text>Register Page</Text>} />
//           </Switch>
//         </Box>
//       </Router>
//     </ChakraProvider>
//   );
// }

// export default App;
