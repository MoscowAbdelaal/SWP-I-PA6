import Link from 'next/link';

async function getStats() {
  const response = await fetch('http://localhost:3001/api/stats', { cache: 'no-store' });
  if (!response.ok) throw new Error('Unable to load stats');
  return response.json() as Promise<{ total: number; done: number; open: number }>;
}

export default async function HomePage() {
  const stats = await getStats();
  return <><h1>Todo App</h1><div className="card"><p>Total: {stats.total}</p><p>Done: {stats.done}</p><p>Open: {stats.open}</p></div>
    <h2>Exercises</h2><ul><li><Link href="/todos">Todos list</Link></li><li><Link href="/todos/new">Create a todo</Link></li>
      <li><Link href="/playground/a">Playground</Link></li><li><Link href="/dashboard">Dashboard</Link></li></ul></>;
}
