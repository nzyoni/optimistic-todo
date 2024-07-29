import { TodoItemModel } from '@/app/api/todo/route';

const getAll = async () => {
    const response = await fetch('/api/todo');
    return response.json();
};

const create = async (title: TodoItemModel['title']) => {
    const response = await fetch('/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    });
    return response.json();
};

const update = async (todo: TodoItemModel) => {
    const response = await fetch('/api/todo', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    return response.json();
};

const remove = async (id: TodoItemModel['id']) => {
    const response = await fetch('/api/todo', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });
    return response.json();
};

const patch = async (id: TodoItemModel['id'], todo: Partial<Omit<TodoItemModel, 'id'>>) => {
    const response = await fetch('/api/todo', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, todo }),
    });
    return response.json();
};

export const todosService = {
    getAll,
    create,
    update,
    remove,
    patch,
};

// const fetchTodos = async () => {
//     const response = await fetch('/api/todo');
//     return response.json();
//   };

//   const addTodo = async (title: string) => {
//     const response = await fetch('/api/todo', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ title }),
//     });

//     return response.json();
//   }

//   const updateTodo = async (todo: TodoItemModel) => {
//     const response = await fetch('/api/todo', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(todo),
//     });

//     return response.json();
//   }

//   const deleteTodo = async (id: TodoItemModel['id']) => {
//     const response = await fetch('/api/todo', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id }),
//     });

//     return response.json();
//   }
