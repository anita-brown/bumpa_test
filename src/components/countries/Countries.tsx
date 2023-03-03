import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Text, Image, Flex } from '@chakra-ui/react';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    console.log("countries",countries)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
          const data = await response.json();
          console.log("data",data)
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <SimpleGrid mt="4rem" columns={[1, 2, 3, 4]} spacing={4}>
      {countries.map((country: any) => (
        <Box
          key={country.alpha3Code}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
        >
          <Image src={country.flags.svg} alt={country.name} />
          <Box p="6">
            <Flex  alignItems="baseline">
              <Text fontWeight="bold" fontSize="xl">
                {country.name}
              </Text>
              <Text ml="2" color="gray.500" fontSize="lg">
                ({country.alpha3Code})
              </Text>
            </Flex>
            <Flex  alignItems="center" mt="2">
              <Text mr="2" fontWeight="bold">
                Population:
              </Text>
              <Text>{country.population.toLocaleString()}</Text>
            </Flex>
            <Box  alignItems="center" mt="2">
              <Text mr="2" fontWeight="bold">
                Region:
              </Text>
              <Text>{country.region}</Text>
            </Box>
            <Box  alignItems="center" mt="2">
              <Text mr="2" fontWeight="bold">
                Capital:
              </Text>
              <Text>{country.capital}</Text>
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Countries;
