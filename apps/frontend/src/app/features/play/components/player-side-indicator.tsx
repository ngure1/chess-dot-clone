import { Group, Text } from '@mantine/core';
import React from 'react';
import PlayerIconIndicator from './player-icon-indicator';
import PlayerClockIndicator from './player-clock-indicator';

interface PlayerSideIndicatorProps {
  asBlack?: boolean;
}
const PlayerSideIndicator: React.FC<PlayerSideIndicatorProps> = ({
  asBlack = false,
}) => {
  return (
    <Group justify="space-between">
      <Group align="flex-start">
        <PlayerIconIndicator asBlack={asBlack} />
        <Text>Player name</Text>
      </Group>
      <PlayerClockIndicator asBlack={asBlack} />
    </Group>
  );
};

export default PlayerSideIndicator;
