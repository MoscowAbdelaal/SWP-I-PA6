import Counter from './Counter';
export default function PlaygroundLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section><h1>Playground layout</h1><Counter />{children}</section>;
}
