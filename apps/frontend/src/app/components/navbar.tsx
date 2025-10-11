import {
  ActionIcon,
  Flex,
  Text,
  Group,
  Tooltip,
  useMantineTheme,
  Stack,
} from '@mantine/core';
import { IconLayoutSidebar } from '@tabler/icons-react';
import { sideBarElementsConfig } from '../constants/sidebar-elements';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/../public/logo2.svg';
import Image from 'next/image';

interface NavbarProps {
  isNavbarMinimised: boolean;
  toggle: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ toggle, isNavbarMinimised }) => {
  const { colors } = useMantineTheme();
  const pathName = usePathname();

  return (
    <>
      <Flex justify={'space-between'}>
        <Link href={'/'}>
          <Image src={Logo} alt="logo" width={100} loading="eager" />
        </Link>
        <Tooltip
          label={'Collapse sidebar'}
          position="bottom"
          offset={2}
          withArrow
        >
          <ActionIcon variant="transparent" onClick={toggle}>
            <IconLayoutSidebar color={colors.gray[7]} size={20} stroke={1.75} />
          </ActionIcon>
        </Tooltip>
      </Flex>
      <Stack gap={4}>
        {sideBarElementsConfig.map((item, index) => (
          <NavbarElement
            key={index}
            {...item}
            isNavbarMinimised={isNavbarMinimised}
            isActive={pathName === item.url}
          />
        ))}
      </Stack>
    </>
  );
};

export default Navbar;

const NavbarElement: React.FC<
  (typeof sideBarElementsConfig)[number] & {
    isNavbarMinimised: boolean;
    isActive: boolean;
  }
> = ({ label, url, icon: Icon, isNavbarMinimised, isActive }) => {
  const { colors } = useMantineTheme();

  return (
    <Group
      renderRoot={(props) => <Link href={url} {...props} />}
      py={8}
      px={2}
      bdrs={'md'}
      justify={isNavbarMinimised ? 'center' : 'flex-start'}
      {...(isActive && { bg: colors.blue[0] })}
      className="hover:bg-gray-100 hover:text-gray-700 transition-all duration-300"
    >
      <Icon
        stroke={1.3}
        size={26}
        {...(isActive && { color: colors.blue[6] })}
      />
      {!isNavbarMinimised && (
        <Text
          size="md"
          className="capitalize"
          {...(isActive && { c: colors.blue[6] })}
        >
          {label}
        </Text>
      )}
    </Group>
  );
};
