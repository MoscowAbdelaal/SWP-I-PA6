export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(`${API_URL}/todos`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Unable to load todos');
  }
  return response.json();
}

export async function getTodo(id: string): Promise<Todo | null> {
  const response = await fetch(`${API_URL}/todos/${id}`, { cache: 'no-store' });
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error('Unable to load todo');
  }
  return response.json();
}
