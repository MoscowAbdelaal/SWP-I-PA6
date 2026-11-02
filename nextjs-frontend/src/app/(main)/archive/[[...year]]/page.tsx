export default async function ArchivePage({ params }: { params: Promise<{ year?: string[] }> }) {
  const year = (await params).year;
  return <><h1>Archive</h1><p>{year?.join(' / ') ?? 'All years'}</p></>;
}
