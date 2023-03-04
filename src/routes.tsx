import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import CountryDetails from './components/countrydetails/CountryDetails';
import Header from './components/header/Header';
import Countries from './components/countries/Countries';

const Routes = () => {
  return (
    <Box w="100vw" h="100vh" px={{ base: '2rem', md: '5rem' }} py="2rem">
      <Header />
      <Switch>
        <Route path="/" element={<Countries />} />

        <Route path="/countries/:countryCode" element={<CountryDetails />} />
      </Switch>
    </Box>
  );
};

export default Routes;
