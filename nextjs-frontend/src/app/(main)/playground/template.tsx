import Counter from './Counter';
export default function PlaygroundTemplate({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section><h2>Playground template</h2><Counter />{children}</section>;
}
