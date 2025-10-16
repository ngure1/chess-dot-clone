'use client';
import { Button, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAtomValue } from 'jotai';
import React, { useEffect, useState } from 'react';
import { timeFormatAtom } from '../atoms/clock-atom';
import { formatDuration } from '../utils/formatTime';

interface PlayerClockIndicatorProps {
  asBlack?: boolean;
}

const PlayerClockIndicator: React.FC<PlayerClockIndicatorProps> = ({
  asBlack = false,
}) => {
  const { duration, increment } = useAtomValue(timeFormatAtom);
  const [time, setTime] = useState<number>(duration * 1000);
  const [isPaused, { toggle }] = useDisclosure(true);

  useEffect(() => {
    /* todo:
      * interval every 1000ms (1sec) if time > 10 seconds
      * else interval every 100ms
    */
    const interval = window.setInterval(() => {
      if (isPaused) return;
      setTime((prev) => Math.max(prev - 100, 0));
    }, 100);

    return () => clearInterval(interval);
  });

  return (
    <Group bg={asBlack ? 'dark.6' : 'gray.2'} pl="xl" pr="sm" py={4} bdrs="xs">
      <Text size="xl" fw={'bold'} c={asBlack ? 'dark.1' : 'dark.9'}>
        {formatDuration(time / 1000)}
      </Text>

      <Button onClick={toggle}>{isPaused ? 'Resume' : 'Pause'}</Button>
    </Group>
  );
};

export default PlayerClockIndicator;
