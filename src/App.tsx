import { Box } from '@chakra-ui/react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';


function App() {
  return (
    <Box w="100vw" h="100vh" px={{base:"2rem",md:"4rem"}} py="2rem">
      <Header />
      <Countries/>
    </Box>
  );
}

export default App;
