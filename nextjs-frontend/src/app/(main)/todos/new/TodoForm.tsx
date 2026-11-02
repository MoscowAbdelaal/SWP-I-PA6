'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/lib/api';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch(`${API_URL}/todos`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title }) });
    if (!response.ok) { const data = await response.json(); setError(data.message ?? 'Unable to create todo'); return; }
    router.push('/todos');
  }
  return <form onSubmit={submit} className="card"><input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Todo title" /><button type="submit">Create</button>{error && <p role="alert">{error}</p>}</form>;
}
