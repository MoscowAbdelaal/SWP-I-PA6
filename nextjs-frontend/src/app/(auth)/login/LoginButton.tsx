'use client';
import { useRouter } from 'next/navigation';
export default function LoginButton() { const router = useRouter(); return <button onClick={() => { document.cookie = 'demo-auth=1; path=/'; router.push('/dashboard'); }}>Log in</button>; }
