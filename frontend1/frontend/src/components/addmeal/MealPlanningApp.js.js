import React, { useState } from 'react';
import {
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Select,
  Button,
  Box,
  VStack,
  Heading,
  Divider,
  Input,
  List,
  ListItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import axios from 'axios';
import { api } from '../axios/api';

const App = () => {
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const [customMeal, setCustomMeal] = useState({ breakfast: '', lunch: '', dinner: '' });
  const [result, setResult] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async () => {
    const data = {
      breakfast: customMeal.breakfast || breakfast,
      lunch: customMeal.lunch || lunch,
      dinner: customMeal.dinner || dinner,
    };
    try {
      const response = await axios.post(api + "/meals", data);
      setResult(response.data);
      setShowAlert(true);
    } catch (error) {
      console.error('Error submitting meal data:', error);
    }
  };

  return (
    <ChakraProvider>
      <Container maxW="container.md" mt={10} p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl" color="teal.600">Athlete Meal Planning</Heading>
          <Divider />

          {/* Breakfast Section */}
          <Box>
            <Heading as="h2" size="md" mb={4} color="teal.500">Breakfast</Heading>
            <FormControl>
              <FormLabel>Meal</FormLabel>
              <Select
                placeholder="Select Breakfast"
                value={breakfast}
                onChange={(e) => setBreakfast(e.target.value)}
                focusBorderColor="teal.500"
              >
                <option value="Protein-Packed Smoothie with Spinach, Banana, and Protein Powder">Protein-Packed Smoothie with Spinach, Banana, and Protein Powder</option>
                <option value="Quinoa Porridge with Almonds and Berries">Quinoa Porridge with Almonds and Berries</option>
                <option value="Greek Yogurt with Nuts and Honey">Greek Yogurt with Nuts and Honey</option>
                <option value="Egg White Omelette with Spinach and Avocado">Egg White Omelette with Spinach and Avocado</option>
                <option value="Oatmeal with Chia Seeds, Flaxseeds, and Fresh Fruit">Oatmeal with Chia Seeds, Flaxseeds, and Fresh Fruit</option>
              </Select>
              <FormLabel mt={4}>Or Enter Custom Breakfast</FormLabel>
              <Input
                placeholder="Enter custom breakfast"
                value={customMeal.breakfast}
                onChange={(e) => setCustomMeal({ ...customMeal, breakfast: e.target.value })}
                focusBorderColor="teal.500"
              />
            </FormControl>
          </Box>

          <Divider />

          {/* Lunch Section */}
          <Box>
            <Heading as="h2" size="md" mb={4} color="teal.500">Lunch</Heading>
            <FormControl>
              <FormLabel>Meal</FormLabel>
              <Select
                placeholder="Select Lunch"
                value={lunch}
                onChange={(e) => setLunch(e.target.value)}
                focusBorderColor="teal.500"
              >
                <option value="Grilled Chicken Salad with Quinoa and Mixed Greens">Grilled Chicken Salad with Quinoa and Mixed Greens</option>
                <option value="Salmon Bowl with Brown Rice, Edamame, and Avocado">Salmon Bowl with Brown Rice, Edamame, and Avocado</option>
                <option value="Turkey and Sweet Potato Bowl with Broccoli">Turkey and Sweet Potato Bowl with Broccoli</option>
                <option value="Lentil and Vegetable Soup with Whole-Grain Bread">Lentil and Vegetable Soup with Whole-Grain Bread</option>
                <option value="Chickpea and Avocado Wrap with Spinach">Chickpea and Avocado Wrap with Spinach</option>
              </Select>
              <FormLabel mt={4}>Or Enter Custom Lunch</FormLabel>
              <Input
                placeholder="Enter custom lunch"
                value={customMeal.lunch}
                onChange={(e) => setCustomMeal({ ...customMeal, lunch: e.target.value })}
                focusBorderColor="teal.500"
              />
            </FormControl>
          </Box>

          <Divider />

          {/* Dinner Section */}
          <Box>
            <Heading as="h2" size="md" mb={4} color="teal.500">Dinner</Heading>
            <FormControl>
              <FormLabel>Meal</FormLabel>
              <Select
                placeholder="Select Dinner"
                value={dinner}
                onChange={(e) => setDinner(e.target.value)}
                focusBorderColor="teal.500"
              >
                <option value="Baked Chicken Breast with Roasted Vegetables and Sweet Potatoes">Baked Chicken Breast with Roasted Vegetables and Sweet Potatoes</option>
                <option value="Tuna and Avocado Salad with a Side of Quinoa">Tuna and Avocado Salad with a Side of Quinoa</option>
                <option value="Stir-Fried Tofu with Broccoli, Bell Peppers, and Brown Rice">Stir-Fried Tofu with Broccoli, Bell Peppers, and Brown Rice</option>
                <option value="Stuffed Bell Peppers with Ground Turkey and Black Beans">Stuffed Bell Peppers with Ground Turkey and Black Beans</option>
                <option value="Salmon with a Side of Steamed Asparagus and Wild Rice">Salmon with a Side of Steamed Asparagus and Wild Rice</option>
              </Select>
              <FormLabel mt={4}>Or Enter Custom Dinner</FormLabel>
              <Input
                placeholder="Enter custom dinner"
                value={customMeal.dinner}
                onChange={(e) => setCustomMeal({ ...customMeal, dinner: e.target.value })}
                focusBorderColor="teal.500"
              />
            </FormControl>
          </Box>

          <Divider />

          <Button colorScheme="teal" size="lg" onClick={handleSubmit}>Submit</Button>


          {showAlert && (
            <Alert status="success" variant="subtle" mt={4}>
              <AlertIcon />
              <AlertTitle>Submitted!</AlertTitle>
              <AlertDescription>Your meal selection has been saved.</AlertDescription>
            </Alert>
          )}
            {/* {result && (
            <Box mt={10} p={5} borderWidth={1} borderRadius="lg" bg="gray.50">
              <Heading as="h2" size="lg" color="teal.600" mb={4}>Selected Meals and Timings:</Heading>
              <List spacing={3}>
                <ListItem><strong>Breakfast:</strong> {result.breakfast.meal || 'None selected'} at {result.breakfast.time || 'No time selected'}</ListItem>
                <ListItem><strong>Lunch:</strong> {result.lunch.meal || 'None selected'} at {result.lunch.time || 'No time selected'}</ListItem>
                <ListItem><strong>Dinner:</strong> {result.dinner.meal || 'None selected'} at {result.dinner.time || 'No time selected'}</ListItem>
              </List>
            </Box>
          )} */}
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default App;
