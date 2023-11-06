import { Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const TopPage = () => {
  return (
    <>
      <Stack spacing={20}>
        <Text fontSize="6xl">Font Size</Text>
        <Link to="/game">
          <Button colorScheme="teal" size="lg">
            start
          </Button>
        </Link>
        <Link to="/setting">
          <Button colorScheme="teal" size="lg">
            setting
          </Button>
        </Link>
      </Stack>
    </>
  );
};
