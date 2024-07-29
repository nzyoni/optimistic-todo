import { Checkbox, Button, Stack, Group, TextInput, Card } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { TodoItemModel } from '@/app/api/todo/route';

export type TodoListProps = {
  todos: TodoItemModel[]
  onToggle: (todo: TodoItemModel) => void
  onDelete: (id: TodoItemModel['id']) => void
  onCreate: (title: TodoItemModel['title']) => void
};
export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onCreate }) => {
  const [newTodo, setNewTodo] = useState('');

  return (
    <Card w="400px">
      <Stack>
        <Group flex={1} align="end" w="100%">
          <TextInput
            label="Add new todo"
            placeholder="Learn rust"
            flex={1}
            value={newTodo}
            onChange={(event) => setNewTodo(event.currentTarget.value)} />
          <Button onClick={() => onCreate(newTodo)}>Add</Button>
        </Group>
        {todos.map((todo) => (
          <Group key={todo.id}>
            <Checkbox
              checked={todo.completed}
              onChange={() => onToggle({ ...todo, completed: !todo.completed })}
              label={todo.title}
            />

            <Button size="compact-sm" onClick={() => onDelete(todo.id)}><IconTrash size="14" /></Button>
          </Group>
        ))}
      </Stack>
    </Card>
  );
};
