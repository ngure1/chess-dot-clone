import PlaySidebarTabs from '@/app/features/play/components/play-sidebar-tabs';
import PlayerSideIndicator from '@/app/features/play/components/player-side-indicator';
import { Box, Group, Paper, Stack } from '@mantine/core';

const Page = () => {
  return (
    <Group align="flex-start" px={'xl'} py={'md'}>
      <Stack flex={3}>
        <PlayerSideIndicator asBlack />
        <Box
          flex={1}
          h={600}
          className="bg-gray-300 aspect-square"
          bdrs={'sm'}
        />
        <PlayerSideIndicator />
      </Stack>
      <Box flex={2}>
        <PlaySidebarTabs />
      </Box>
    </Group>
  );
};

export default Page;
