import { getTodos } from '@/lib/api';
export default async function RecentSlot() { const todos = await getTodos(); return <><h2>Recent todos</h2><ul>{todos.slice(-3).map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul></>; }
