import { randUuid } from '@ngneat/falso';

export const dynamic = 'force-dynamic'; // defaults to auto

export type TodoItemModel = {
    id: string
    title: string
    completed: boolean
};

const todos: TodoItemModel[] = [
    { id: randUuid(), title: 'Buy milk', completed: false },
    { id: randUuid(), title: 'Buy eggs', completed: false },
    { id: randUuid(), title: 'Buy bread', completed: false },
];

export async function GET() {
    return Response.json(todos);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newTodo = { id: randUuid(), title: body.title, completed: false };

    todos.push(newTodo);

    return Response.json(newTodo);
}

export async function PUT(request: Request) {
    const body = await request.json();
    const index = todos.findIndex(todo => todo.id === body.id);

    todos[index] = body;

    return Response.json(todos[index]);
}

export async function DELETE(request: Request) {
    const body = await request.json();
    const index = todos.findIndex(todo => todo.id === body.id);

    todos.splice(index, 1);

    return Response.json({ success: true });
}

export async function PATCH(request: Request) {
    const body = await request.json();
    const { id, todo } = body;
    const index = todos.findIndex(td => td.id === id);

    todos[index] = { ...todos[index], ...todo };

    return Response.json(todos[index]);
}
