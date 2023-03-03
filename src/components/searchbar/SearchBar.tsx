import React from 'react';
import { InputGroup, InputLeftElement, Input, Flex, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Select from 'react-select';

const SearchBar = () => {
  return (
    <Flex w="100%" justify="space-between" mt="3rem">
      <InputGroup w="30%">
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input type="text" placeholder="Search for a country..." />
      </InputGroup>
      <Box w="20%">
        <Select placeholder="Filter by region" />
      </Box>
    </Flex>
  );
};

export default SearchBar;
