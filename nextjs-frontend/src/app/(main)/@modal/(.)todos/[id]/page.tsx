import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTodo } from '@/lib/api';

export default async function TodoModal({ params }: { params: Promise<{ id: string }> }) {
  const todo = await getTodo((await params).id);
  if (!todo) notFound();
  return <div className="modal-backdrop"><div className="modal"><h2>{todo.title}</h2><p>ID: {todo.id}</p><p>Done: {String(todo.done)}</p><Link href={`/todos/${todo.id}`}>Open full page</Link></div></div>;
}
