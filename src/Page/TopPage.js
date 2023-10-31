import { Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const TopPage = () => {
  return (
    <>
      <Stack spacing={20}>
        <Text fontSize="6xl">フォントサイズ</Text>
        <Link to="/game">
          <Button colorScheme="teal" size="lg">
            スタート
          </Button>
        </Link>
        <Link to="/setting">
          <Button colorScheme="teal" size="lg">
            設定画面へ
          </Button>
        </Link>
      </Stack>
    </>
  );
};
