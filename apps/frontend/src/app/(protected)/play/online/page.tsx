import PlayerSideIndicator from '@/app/features/play/components/player-side-indicator';
import { Box, Group, Stack } from '@mantine/core';

const Page = () => {
  return (
    <Group align="flex-start">
      <Stack flex={3}>
        <PlayerSideIndicator asBlack />
        <Box
          flex={1}
          h={620}
          className="bg-gray-300 aspect-square"
          bdrs={'sm'}
        />
        <PlayerSideIndicator />
      </Stack>
      <Box flex={2} className="bg-gray-300" h={'100%'} bdrs={'sm'} />
    </Group>
  );
};

export default Page;
