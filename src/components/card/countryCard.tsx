import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { ICountry } from '../../types/global';

const CountryCard = ({ country }: { country: ICountry }) => {
  return (
    <Box
      boxSize={{ base: '100%', md: '100%' }}
      height={{ base: '100%', md: '100%' }}
      key={country.alpha3Code}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={country.flag} alt={country.name} />
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
  );
};

export default CountryCard;
