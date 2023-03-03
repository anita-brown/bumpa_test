import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Text, Image, Flex, Button, Spinner } from '@chakra-ui/react';
import { ICountry } from '../../types/global';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(20);
  const [loading, setLoading] = useState(false);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex);

  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      {loading ? (
        <Flex justify="center" mt="20%" align="center">
          <Spinner size="lg" color="red.500" />
        </Flex>
      ) : (
        <>
          <SimpleGrid mt="4rem" columns={[1, 2, 3, 4]} spacing={4}>
            {currentCountries.map((country: ICountry) => (
              <Box
                boxSize={{ base: '100%', md: '90%' }}
                height={{ base: '100%', md: '100%' }}
                key={country.alpha3Code}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
              >
                <Image w="100%" h="150px" src={country.flag} alt={country.name} />
                <Box p="6">
                  <Flex alignItems="baseline">
                    <Text
                      fontWeight="700"
                      fontSize={{
                        base: '14px',
                        md: '18px'
                      }}
                    >
                      {country.name}
                    </Text>
                  </Flex>
                  <Flex alignItems="center" mt="2">
                    <Text
                      fontSize={{
                        base: '14px',
                        md: '16px'
                      }}
                      mr="2"
                      fontWeight="550"
                    >
                      Population:
                    </Text>
                    <Text>{country.population.toLocaleString()}</Text>
                  </Flex>
                  <Flex alignItems="center" mt="2">
                    <Text
                      fontSize={{
                        base: '14px',
                        md: '16px'
                      }}
                      mr="2"
                      fontWeight="550"
                    >
                      Region:
                    </Text>
                    <Text>{country.region}</Text>
                  </Flex>
                  <Flex alignItems="center" mt="2">
                    <Text
                      fontSize={{
                        base: '14px',
                        md: '16px'
                      }}
                      mr="2"
                      fontWeight="550"
                    >
                      Capital:
                    </Text>
                    <Text>{country.capital}</Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          <Flex justifyContent="center" mt="2rem" mb="5rem">
            {currentPage > 1 && (
              <Button mr="2" onClick={handlePrevPage}>
                Prev
              </Button>
            )}
            {currentPage < totalPages && (
              <Button ml="2" onClick={handleNextPage}>
                Next
              </Button>
            )}
          </Flex>
        </>
      )}
    </>
  );
};

export default Countries;
