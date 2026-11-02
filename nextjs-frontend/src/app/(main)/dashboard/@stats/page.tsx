import Link from 'next/link';
import { getTodos } from '@/lib/api';
export default async function StatsSlot() { const todos = await getTodos(); return <><h2>Stats</h2><p>{todos.filter((todo) => todo.done).length} done / {todos.length} total</p><Link href="/dashboard/settings">Settings</Link></>; }
