// src/components/HydrationCalculator.js
import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, VStack, Heading } from '@chakra-ui/react';

const HydrationCalculator = () => {
  const [weight, setWeight] = useState('');
  const [hydration, setHydration] = useState(null);

  const calculateHydration = () => {
    const dailyWaterIntake = weight * 0.033;
    setHydration(dailyWaterIntake);
  };

  return (
    <Box p={6} shadow="md" borderWidth={1} borderRadius="lg">
      <Heading size="lg" mb={4}>Hydration Calculator</Heading>
      <VStack spacing={4}>
        <FormControl id="weight">
          <FormLabel>Weight (kg)</FormLabel>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={calculateHydration}>Calculate Hydration</Button>
        {hydration && <Box mt={4}>Your daily water intake: {hydration.toFixed(2)} liters</Box>}
      </VStack>
    </Box>
  );
};

export default HydrationCalculator;
