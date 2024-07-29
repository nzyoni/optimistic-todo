'use client';

import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@/theme';

export const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <MantineProvider theme={theme}>{children}</MantineProvider>
  </QueryClientProvider>);
