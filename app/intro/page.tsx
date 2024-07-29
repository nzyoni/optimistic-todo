'use client';

import { Button, Grid, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { todoService } from '@/dal/todo/todo.service';
import { TodoList } from '@/components/Todo/TodoList';
import { TodoItemModel } from '../api/todo/route';

const scope = { Button, todoService };

const code = `
  <Button onClick={()=> todoService.getAll()}>click me </Button>
`;

const fetchTodos = async () => {
  const response = await fetch('/api/todo');
  return response.json();
};

export default function IntroPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(res => setTodos(res.todos));
  }, []);
  return (
    <div>
      <h1>Optimistic Todo</h1>
      <p>Optimistic Todo is a simple todo list app that demonstrates the use of optimistic
        updates with React Query.
      </p>
      <LiveProvider code={code} scope={scope}>
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
        <TodoList
          todos={todos}
          onToggle={async function (todo: TodoItemModel): Promise<void> {
            console.log('todo', todo);
          }}
          onDelete={function (id: TodoItemModel['id']): Promise<void> {
            throw new Error('Function not implemented.');
          }}
          onCreate={function (title: TodoItemModel['title']): Promise<void> {
            throw new Error('Function not implemented.');
          }} />
      </LiveProvider>
    </div>
  );
}
