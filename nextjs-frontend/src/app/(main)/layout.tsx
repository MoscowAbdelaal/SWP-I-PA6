import Navbar from '@/app/components/Navbar';

export default function MainLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return <><Navbar /><main>{children}</main>{modal}</>;
}
