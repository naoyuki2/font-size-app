import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Stack } from "@chakra-ui/react";
import TimeBar from "./TimeBar";

const Timer = ({ onOpen }) => {
  const initialTime = useSelector((state) => state.initialTime.value);
  const [time, setTime] = useState(initialTime * 1000);
  const [timerId, setTimerId] = useState(null);

  // Startボタンを押した時の処理
  const handleStart = () => {
    if (timerId) return;
    const id = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 10) {
          clearInterval(id);
          // onOpen(); // ここから移動
        } else {
          return prevTime - 10;
        }
      });
    }, 10);
    setTimerId(id);
  };

  // コンポーネントがアンマウントされるときにタイマーをクリア
  useEffect(() => {
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [timerId]);

  // レンダリング後にonOpenを呼び出す
  useEffect(() => {
    if (time <= 10) {
      onOpen();
    }
  }, [time]);

  return (
    <Stack spacing="4">
      <TimeBar time={time} />

      <Box>
        <div>{(time / 1000).toFixed(2)} s</div>
      </Box>
      <Box>
        <Button colorScheme="blue" onClick={handleStart}>
          Start
        </Button>
      </Box>
    </Stack>
  );
};

export default Timer;
