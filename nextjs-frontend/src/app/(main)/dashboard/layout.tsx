export default function DashboardLayout({ children, stats, recent }: Readonly<{ children: React.ReactNode; stats: React.ReactNode; recent: React.ReactNode }>) {
  return <><h1>Dashboard</h1><div className="row"><section className="card">{stats}</section><section className="card">{recent}</section></div>{children}</>;
}
