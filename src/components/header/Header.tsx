import { Box, Flex, Heading, HStack, Icon, Text, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Flex justify="space-between">
        <Heading size="sm">Where in the world</Heading>

        <HStack>
          <Icon onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Icon>
          {colorMode === 'light' ? <Text>Dark Mode</Text> : <Text>Light Mode</Text>}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
