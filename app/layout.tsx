import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript } from '@mantine/core';
import { SiteShell } from '@/components/SiteShell/SiteShell';
import { Providers } from '@/components/providers';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <SiteShell>
            {children}
          </SiteShell>
        </Providers>
      </body>
    </html>
  );
}
