import Link from 'next/link';
import { getTodos } from '@/lib/api';

export default async function TodosPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const todos = (await getTodos()).filter((todo) => status === 'done' ? todo.done : status === 'open' ? !todo.done : true);
  return <><div className="row"><h1>Todos</h1><Link href="/todos/new">Create todo</Link></div>
    <p><Link href="/todos">All</Link> · <Link href="/todos?status=done">Done</Link> · <Link href="/todos?status=open">Open</Link></p>
    <ul>{todos.map((todo) => <li key={todo.id}><Link href={`/todos/${todo.id}`}>{todo.title}</Link> ({todo.done ? 'done' : 'open'})</li>)}</ul></>;
}
