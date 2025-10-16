import { Stack, Tabs, TabsList, TabsPanel, TabsTab, Text } from '@mantine/core';
import {
  IconDeviceGamepad2,
  IconSquarePlus,
  IconUsersGroup,
  type TablerIcon,
} from '@tabler/icons-react';
import React from 'react';
import GameConfigTab from './game-config-tab';

const PlaySidebarTabs = () => {
  return (
    <Tabs defaultValue="new-game">
      <TabsList grow>
        <TabsTab value="new-game">
          <TabIndicator icon={IconSquarePlus} tabTitle="New Game" />
        </TabsTab>
        <TabsTab value="games" disabled>
          <TabIndicator icon={IconDeviceGamepad2} tabTitle="Games" />
        </TabsTab>
        <TabsTab value="players" disabled>
          <TabIndicator icon={IconUsersGroup} tabTitle="Players" />
        </TabsTab>
      </TabsList>

      <TabsPanel pt={'sm'} value="new-game">
        <GameConfigTab/>
      </TabsPanel>
      <TabsPanel pt={'sm'} value="games">
        Second panel
      </TabsPanel>
      <TabsPanel pt={'sm'} value="players">
        Second panel
      </TabsPanel>
    </Tabs>
  );
};

export default PlaySidebarTabs;

interface TabIndicatorProps {
  icon: TablerIcon;
  tabTitle: string;
}

const TabIndicator: React.FC<TabIndicatorProps> = ({
  tabTitle,
  icon: Icon,
}) => {
  return (
    <Stack align="center" gap={2}>
      <Icon stroke={1.5} />
      <Text size="sm">{tabTitle}</Text>
    </Stack>
  );
};
