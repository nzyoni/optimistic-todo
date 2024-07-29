import { Checkbox, Button, Stack, Group } from '@mantine/core';
import { TodoItemModel } from '@/app/api/todo/route';

export type TodoListProps = {
  todos: TodoItemModel[]
  onToggle: (todo: TodoItemModel) => Promise<void>
  onDelete: (id: TodoItemModel['id']) => Promise<void>
  onCreate: (title: TodoItemModel['title']) => Promise<void>
};
export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onCreate }) => (
  <Stack>
    {todos.map((todo) => (
      <Group key={todo.id}>
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggle(todo)}
          label={todo.title}
        />

        <Button size="compact-sm" onClick={() => onDelete(todo.id)}>-</Button>
      </Group>
    ))}
  </Stack>
);
