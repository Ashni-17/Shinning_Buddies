import StatCard from '../components/dashboard/StatCard.jsx';import RevenueChart from '../components/dashboard/RevenueChart.jsx';import RecentActivities from '../components/dashboard/RecentActivities.jsx';
export default function Dashboard(){return <>
  <div className="stats"><StatCard label="Active customers" value={128} tone="b"/><StatCard label="Systems installed" value={64} tone="g"/><StatCard label="Quotations pending" value={17} tone="a"/><StatCard label="Open tickets" value={5} tone="r"/></div>
  <div className="grid2"><RevenueChart/><RecentActivities/></div></>}
