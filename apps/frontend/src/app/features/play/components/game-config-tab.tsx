'use client';
import { Button, Collapse, Group, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconAlarm,
  IconBolt,
  IconChevronDown,
  IconChevronUp,
  IconViewfinder,
  type TablerIcon,
} from '@tabler/icons-react';
import { useAtom, useAtomValue } from 'jotai';
import { timeFormatAtom } from '../atoms/clock-atom';
import { BLITZ, BULLET, RAPID } from '../constants/time-formats';
import { formatDuration } from '../utils/formatTime';

const GameConfigTab = () => {
  const { duration, increment } = useAtomValue(timeFormatAtom);
  const [opened, { toggle }] = useDisclosure();
  const { minutes } = formatDuration(duration);

  return (
    <Stack>
      <Button
        justify="space-between"
        size="lg"
        fullWidth
        color="dark"
        leftSection={<span />}
        rightSection={opened ? <IconChevronUp /> : <IconChevronDown />}
        onClick={toggle}
      >
        <Group align="center" gap={4}>
          {minutes < 3 ? (
            <IconViewfinder size={24} stroke={1.5} />
          ) : minutes < 10 ? (
            <IconBolt size={24} stroke={1.5} />
          ) : (
            <IconAlarm size={24} stroke={1.5} />
          )}
          <Text size="md">
            {minutes}
            {increment > 0 ? ` | ${increment} ` : ' min '}
            {minutes < 3 ? '(Bullet)' : minutes < 10 ? '(Blitz)' : '(Rapid)'}
          </Text>
        </Group>
      </Button>
      <Collapse in={opened}>
        <Stack>
          <TimeFormatGroup
            icon={IconViewfinder}
            label="Bullet"
            timeFormats={Object.values(BULLET)}
          />
          <TimeFormatGroup
            icon={IconBolt}
            label="Blitz"
            timeFormats={Object.values(BLITZ)}
          />
          <TimeFormatGroup
            icon={IconAlarm}
            label="Rapid"
            timeFormats={Object.values(RAPID)}
          />
        </Stack>
      </Collapse>
      <Button size="lg">Start Game</Button>
    </Stack>
  );
};

export default GameConfigTab;

interface TimeFormatItemProps {
  duration: number;
  increment: number;
}
const TimeFormatItem: React.FC<TimeFormatItemProps> = ({
  duration,
  increment,
}) => {
  const [timeFormat, setTimeFormat] = useAtom(timeFormatAtom);
  const isSelected =
    JSON.stringify({ duration, increment }) === JSON.stringify(timeFormat);

  const { minutes } = formatDuration(duration);
  return (
    <Button
      variant={isSelected ? 'filled' : 'light'}
      color={'dark.5'}
      onClick={() => setTimeFormat({ duration, increment })}
      size="compact-lg"
    >
      {minutes}
      {increment > 0 ? ` | ${increment} ` : ' min'}
    </Button>
  );
};

interface TimeFormatGroupProps {
  icon: TablerIcon;
  label: string;
  timeFormats: { duration: number; increment: number }[];
}

const TimeFormatGroup: React.FC<TimeFormatGroupProps> = ({
  icon: Icon,
  label,
  timeFormats,
}) => {
  return (
    <Stack>
      <Group gap={'sm'}>
        <Icon size={20} stroke={1.5} />
        <Text size="sm">{label}</Text>
      </Group>
      <Group>
        {timeFormats.map((format, index) => (
          <TimeFormatItem {...format} key={index} />
        ))}
      </Group>
    </Stack>
  );
};
