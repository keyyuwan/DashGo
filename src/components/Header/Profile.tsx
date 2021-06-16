import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Key Yu Wan</Text>
          <Text color="gray.300" fontSize="small">
            keyflcbyuwan@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Key Yu Wan"
        src="https://github.com/keyyuwan.png"
      />
    </Flex>
  );
}
