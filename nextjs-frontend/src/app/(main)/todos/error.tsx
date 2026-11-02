'use client';

export default function TodosError({ reset }: { reset: () => void }) {
  return <div className="card"><p>Could not load todos.</p><button onClick={reset}>Try again</button></div>;
}
