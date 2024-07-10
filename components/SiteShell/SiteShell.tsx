'use client'
import { AppShell, Burger, Group, Skeleton, Text, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NextLink from 'next/link'

export const SiteShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            layout="alt"
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}

            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text>Optimistic Todo</Text>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Group>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text>Navbar</Text>
                </Group>
                <Anchor component={NextLink} href={'/intro'} size='lg' >
                    <Text>Intro</Text>
                </Anchor>
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>

        </AppShell>
    );
}
