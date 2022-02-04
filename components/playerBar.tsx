import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Player from "./player";

const PlayerBar = () => {
  return (
    <Box height="100px" width="100vw" background="gray.900" padding="10px">
      <Flex align="center">
        <Image src={`https://picsum.photos/50?random`} />
        <Box padding="20px" color="white" width="30%">
          <Text fontSize="large">Song Name</Text>
          <Text fontSize="sm">Artist Name</Text>
        </Box>
        <Box width="40%">
            <Player/>
        </Box>
        <Box width="30%">Volume Control</Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;