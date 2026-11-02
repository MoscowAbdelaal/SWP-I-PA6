'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/','Home'], ['/todos','Todos'], ['/todos/new','New todo'],
  ['/help/todos/create','Help'], ['/archive','Archive'], ['/dashboard','Dashboard'],
] as const;

export default function Navbar() {
  const pathname = usePathname();
  return <nav>{links.map(([href, label]) => (
    <Link key={href} href={href} style={pathname === href ? { fontWeight: 'bold' } : undefined}>{label}</Link>
  ))}</nav>;
}
