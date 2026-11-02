export default async function CatchAllTodo({ params }: { params: Promise<{ slug: string[] }> }) {
  return <><h1>Todo catch-all route</h1><p>Slug: {(await params).slug.join(' / ')}</p></>;
}
