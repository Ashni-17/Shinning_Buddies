import {Routes,Route} from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';import DashboardLayout from './layouts/DashboardLayout.jsx';
import Login from './pages/Login.jsx';import Dashboard from './pages/Dashboard.jsx';import Customers from './pages/Customers.jsx';import CustomerDetails from './pages/CustomerDetails.jsx';
import SiteSurveys from './pages/SiteSurveys.jsx';import Packages from './pages/Packages.jsx';import Quotations from './pages/Quotations.jsx';import Payments from './pages/Payments.jsx';
import Inventory from './pages/Inventory.jsx';import Dispatch from './pages/Dispatch.jsx';import Installations from './pages/Installations.jsx';import Technicians from './pages/Technicians.jsx';
import SolarPassport from './pages/SolarPassport.jsx';import Warranty from './pages/Warranty.jsx';import ServiceTickets from './pages/ServiceTickets.jsx';import Finance from './pages/Finance.jsx';import Subsidy from './pages/Subsidy.jsx';import NotFound from './pages/NotFound.jsx';
export default function App(){
  return <Routes><Route path="/login" element={<Login/>}/>
  <Route element={<ProtectedRoute><DashboardLayout/></ProtectedRoute>}>
    <Route index element={<Dashboard/>}/><Route path="customers" element={<Customers/>}/><Route path="customers/:id" element={<CustomerDetails/>}/>
    <Route path="surveys" element={<SiteSurveys/>}/><Route path="packages" element={<Packages/>}/><Route path="quotations" element={<Quotations/>}/><Route path="payments" element={<Payments/>}/>
    <Route path="inventory" element={<Inventory/>}/><Route path="dispatch" element={<Dispatch/>}/><Route path="installations" element={<Installations/>}/><Route path="technicians" element={<Technicians/>}/>
    <Route path="passport" element={<SolarPassport/>}/><Route path="warranty" element={<Warranty/>}/><Route path="tickets" element={<ServiceTickets/>}/><Route path="finance" element={<Finance/>}/><Route path="subsidy" element={<Subsidy/>}/>
    <Route path="*" element={<NotFound/>}/></Route></Routes>
    }
