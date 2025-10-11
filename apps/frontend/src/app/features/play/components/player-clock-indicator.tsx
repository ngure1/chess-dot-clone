import { Box, Text } from '@mantine/core';
import React from 'react';

interface PlayerIconInicatorProps {
  asBlack?: boolean;
}

const PlayerClockIndicator: React.FC<PlayerIconInicatorProps> = ({
  asBlack = false,
}) => {
  return (
    <Box bg={asBlack ? 'dark.6' : 'gray.2'} pl="xl" pr="sm" py={4} bdrs="xs">
      <Text size="xl" fw={'bold'} c={asBlack ? 'dark.1' : 'dark.9'}>
        1 : 00
      </Text>
    </Box>
  );
};

export default PlayerClockIndicator;
