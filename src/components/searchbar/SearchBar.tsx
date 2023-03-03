import React from 'react';
import { InputGroup, InputLeftElement, Input, Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Select from 'react-select';
import { countryOptions } from '../../data';

const SearchBar = () => {
     const color = useColorModeValue('gray.800', 'gray.800');
  return (
    <Flex flexDir={{base: "column", md:"row"}} gap={{base:"1rem",md:"7rem"}} color={color} w="100%" justify="space-between" mt="3rem">
      <InputGroup w={{base:"100%", md:"30%"}}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input color="gray.500" type="text" placeholder="Search for a country..." />
      </InputGroup>
      <Box w={{base:"100%",md:"30%"}}>
        <Select placeholder="Filter by region" options={countryOptions} />
      </Box>
    </Flex>
  );
};

export default SearchBar;
