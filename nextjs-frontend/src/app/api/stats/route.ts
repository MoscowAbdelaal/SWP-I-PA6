import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'}/todos`, { cache: 'no-store' });
  if (!response.ok) return NextResponse.json({ error: 'Unable to load todos' }, { status: 502 });
  const todos = (await response.json()) as { done: boolean }[];
  return NextResponse.json({ total: todos.length, done: todos.filter((todo) => todo.done).length, open: todos.filter((todo) => !todo.done).length });
}
