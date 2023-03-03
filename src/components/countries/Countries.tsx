import React, { useState, useEffect } from 'react';
import {
  SimpleGrid,
  Flex,
  Button,
  Spinner,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue
} from '@chakra-ui/react';
import { ICountry } from '../../types/global';
import CountryCard from '../card/countryCard';
import { SearchIcon } from '@chakra-ui/icons';
import { countryOptions } from '../../data';
import Select from 'react-select';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(20);
  const [loading, setLoading] = useState(false);
  const [regionFilter, setRegionFilter] = useState('');
  const filteredCountries = countries.filter((country: any) =>
    regionFilter ? country.region === regionFilter : true
  );

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = filteredCountries.slice(firstCountryIndex, lastCountryIndex);

  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleRegionChange = (selectedOption: any) => {
    setRegionFilter(selectedOption ? selectedOption.value : '');
    setCurrentPage(1);
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

  const color = useColorModeValue('gray.800', 'gray.800');
  return (
    <>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: '1rem', md: '7rem' }}
        color={color}
        w="100%"
        justify="space-between"
        mt="3rem"
      >
        <InputGroup w={{ base: '100%', md: '30%' }}>
          <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
          <Input color="gray.500" type="text" placeholder="Search for a country..." />
        </InputGroup>
        <Box w={{ base: '100%', md: '30%' }}>
          <Select
            placeholder="Filter by region"
            options={countryOptions}
            onChange={handleRegionChange}
          />
        </Box>
      </Flex>
      {loading ? (
        <Flex justify="center" mt="20%" align="center">
          <Spinner size="lg" color="red.500" />
        </Flex>
      ) : (
        <>
          <SimpleGrid mt="4rem" columns={[1, 2, 3, 4]} spacing={4}>
            {currentCountries.map((country: ICountry) => (
              <CountryCard key={country.alpha3Code} country={country} />
            ))}
          </SimpleGrid>
          <Flex justifyContent="center" mt="2rem" mb="5rem">
            {currentPage > 1 && (
              <Button mr="2" onClick={handlePrevPage}>
                Prev
              </Button>
            )}
            {currentPage < totalPages && (
              <Button ml="2" onClick={handleNextPage} isDisabled={currentPage === totalPages}>
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
