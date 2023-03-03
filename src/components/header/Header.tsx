import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
const Header = () => {
  return (
    <Box>
      <Flex justify="space-between">
        <Heading size="sm">Where in the world</Heading>

        <HStack>
          <Icon>
            <MoonIcon/>
          </Icon>
          <Text>Dark Mode</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
