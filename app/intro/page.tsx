'use client'
import { Button, Grid, Group, Stack } from '@mantine/core';
import { useEffect } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

const scope = { Button };

const code = `
  <Button>click me </Button>
`

const fetchTodos = async () => {
  const response = await fetch('/api/todo');
  return response.json();
}

export default function IntroPage() {

  useEffect(() => {
    fetchTodos().then(res => console.log(res))
  }, [])
  return (
    <div>
      <h1>Optimistic Todo</h1>
      <p>Optimistic Todo is a simple todo list app that demonstrates the use of optimistic updates with React Query.</p>
      <LiveProvider code={code} scope={scope} >
        <Grid>
          <Grid.Col span={6}>
            <LivePreview />
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack>
              <LiveEditor />
              <LiveError />
            </Stack>
          </Grid.Col>
        </Grid>
      </LiveProvider >
    </div>
  );
}