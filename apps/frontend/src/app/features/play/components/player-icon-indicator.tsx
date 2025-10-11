import { ActionIcon } from '@mantine/core';
import { IconUserFilled } from '@tabler/icons-react';
import React from 'react';

interface PlayerIconIndicatorProps {
  asBlack?: boolean;
}

const PlayerIconIndicator: React.FC<PlayerIconIndicatorProps> = ({
  asBlack = false,
}) => {
  return (
    <ActionIcon bg={asBlack ? 'dark.2' : 'gray.3'} size={'lg'}>
      {/*
       * todo: fix gray.0  color not applying instead of white
       * possible fix: use the hook use mantine color(because this component will end up being a client component)
      */}
      <IconUserFilled color={asBlack ? 'dark.7' : 'white'} size={28} />
    </ActionIcon>
  );
};

export default PlayerIconIndicator;
