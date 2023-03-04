import React, { useState, useEffect } from 'react';
import { Box, Text, Image, Flex, Spinner, Badge } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {
  const [country, setCountry] = useState([]) as any;
  const { countryCode } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
        const data = await response.json();
        console.log(data);
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountry();
  }, [countryCode]);

  if (!country) {
    return (
      <Flex justify="center" mt="20%" align="center">
        <Spinner size="lg" color="red.500" />
      </Flex>
    );
  }

  return (
    <Flex flexDir={{ base: 'column', md: 'row' }} gap="4rem" py="5rem" >
      <Image
        w={{ base: '100%', md: '50%' }}
        h={{ base: '40vh', md: '50vh' }}
        src={country.flag}
        alt={country.name}
        mb="4"
      />
      <Box>
        <Text fontSize="3xl" fontWeight="bold" mb="4">
          {country.name}
        </Text>
        <Box mb="4">
          <Text as="span" fontWeight="bold">
            Population:
          </Text>{' '}
          {country.population?.toLocaleString()}
        </Box>
        <Box mb="4">
          <Text as="span" fontWeight="bold">
            Region:
          </Text>{' '}
          {country.region}
        </Box>
        <Box mb="4">
          <Text as="span" fontWeight="bold">
            Subregion:
          </Text>{' '}
          {country.subregion}
        </Box>
        <Box mb="4">
          <Text as="span" fontWeight="bold">
            Capital:
          </Text>{' '}
          {country.capital}
        </Box>
        <Box mb="4">
          <Text as="span" fontWeight="bold">
            Languages:
          </Text>{' '}
          {country.languages?.map((language: { name: any }) => language.name).join(', ')}
        </Box>
        <Box mb="4">
          <Text as="span" fontWeight="bold">
            Currencies:
          </Text>{' '}
          {country.currencies?.map((currency: { name: any }) => currency.name).join(', ')}
        </Box>
        <Box mb="4">
          <Text fontWeight="bold" fontSize="lg" mt="2">
            Border Countries:{' '}
            {country.borders?.length > 0 ? (
              <Flex flexWrap="wrap" mt="2" gap="1rem">
                {country.borders.map((border: string) => (
                  <Link key={border} to={`/countries/${border}`}>
                    <Badge variant="outline" colorScheme="purple">
                      {border}
                    </Badge>
                  </Link>
                ))}
              </Flex>
            ) : (
              'No Countries'
            )}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default CountryDetails;
