import React from 'react'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
      <Input type="text" placeholder="Search for a country..." />
    </InputGroup>
  );
}

export default SearchBar
