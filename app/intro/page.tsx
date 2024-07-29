'use client';

import { Button, Grid, Stack } from '@mantine/core';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { todosService } from '@/dal/todo/todo.service';
import { TodoList } from '@/components/Todo/TodoList';
import { useCreateTodo, useRemoveTodo, useTodos, useUpdateTodo } from '@/dal/todo/todo.resource.hooks';

const scope = { Button, todoService: todosService };

const code = `
  <Button onClick={()=> todoService.getAll()}>click me </Button>
`;

export default function IntroPage() {
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
        <AliveTodoList />
      </LiveProvider>
    </div>
  );
}

const AliveTodoList = () => {
  const { data: todos, isLoading } = useTodos();
  const { createTodo } = useCreateTodo();
  const { removeTodo } = useRemoveTodo();
  const { updateTodo } = useUpdateTodo();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <TodoList
      todos={todos}
      onCreate={title => createTodo(title)}
      onToggle={todo => updateTodo(todo)}
      onDelete={id => removeTodo(id)}
    />
  );
};
