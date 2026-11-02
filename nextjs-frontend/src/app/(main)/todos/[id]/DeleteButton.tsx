'use client';

import { useRouter } from 'next/navigation';
import { API_URL } from '@/lib/api';

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();
  async function remove() {
    const response = await fetch(`${API_URL}/todos/${id}`, { method: 'DELETE' });
    if (!response.ok) return;
    router.push('/todos');
    router.refresh();
  }
  return <button onClick={remove}>Delete</button>;
}
