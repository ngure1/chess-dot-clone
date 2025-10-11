'use client';
import { AppShell, AppShellMain, AppShellNavbar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navbar from '../components/navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isNavbarMinimised, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      padding={'md'}
      navbar={{
        width: isNavbarMinimised ? 50 : 160,
        breakpoint: 'sm',
        collapsed: { mobile: true },
      }}
    >
      <AppShellNavbar>
        <Navbar toggle={toggle} isNavbarMinimised={isNavbarMinimised} />
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
};

export default Layout;
