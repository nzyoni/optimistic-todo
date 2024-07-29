import { useMutation, useQuery } from '@tanstack/react-query';
import { todosService } from './todo.service';
import { queryClient } from '@/components/providers';
import { TodoItemModel } from '@/app/api/todo/route';

const queryKeys = {
  getAll: ['getAll'],
  create: ['create'],
  update: ['update'],
  remove: ['remove'],
};

export const useTodos = () => useQuery({
  queryKey: queryKeys.getAll,
  queryFn: todosService.getAll,
});

export const useCreateTodo = () => {
  const { mutate: createTodo, ...rest } = useMutation({
    mutationFn: (title: string) => todosService.create(title),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.getAll });
    },
  });

  return {
    createTodo,
    ...rest,
  };
};

export const useUpdateTodo = () => {
  const { mutate: updateTodo, ...rest } = useMutation({
    mutationFn: (todo: TodoItemModel) => todosService.update(todo),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.getAll });
    },
  });

  return {
    updateTodo,
    ...rest,
  };
};

export const useRemoveTodo = () => {
  const { mutate: removeTodo, ...rest } = useMutation({
    mutationFn: (id: string) => todosService.remove(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.getAll });
    },
  });

  return {
    removeTodo,
    ...rest,
  };
};
