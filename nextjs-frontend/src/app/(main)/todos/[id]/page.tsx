import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTodo } from '@/lib/api';
import DeleteButton from './DeleteButton';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const todo = await getTodo((await params).id);
  return { title: todo?.title ?? 'Todo not found' };
}

export default async function TodoDetails({ params }: { params: Promise<{ id: string }> }) {
  const todo = await getTodo((await params).id);
  if (!todo) notFound();
  return <><h1>{todo.title}</h1><div className="card"><p>ID: {todo.id}</p><p>Title: {todo.title}</p><p>Done: {String(todo.done)}</p><DeleteButton id={todo.id} /></div><Link href="/todos">Back to todos</Link></>;
}
