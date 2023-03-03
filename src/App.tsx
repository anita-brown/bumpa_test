import { Box } from '@chakra-ui/react';
import Header from './components/header/Header';
import SearchBar from './components/searchbar/SearchBar';

function App() {
  return (
    <Box w="100vw" h="100vh" px="4rem" py="2rem">
      <Header />
      <SearchBar/>
    </Box>
  );
}

export default App;
