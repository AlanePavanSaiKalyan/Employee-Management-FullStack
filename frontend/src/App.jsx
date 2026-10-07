import './App.css'
import { Route,Routes } from 'react-router-dom'
import EmployeeList from './components/employee/EmployeeList'
import { EmployeeForm } from './components/employee/EmployeeForm'
import { Navbar } from './custom_components/Navbar'
import { DepartmentsList } from './components/department/DepartmentsList'
import { Leaves } from './components/leaves/Leaves'
import { CompanyAssets } from './components/company_assets/CompanyAssets'
import { Settings } from './components/settings/Settings'

function App() {
 

  return (
  <div className="main-screen" style={{display:'flex',flexDirection:'row',height:"100vh",width:"100%"}}>
    <Navbar/>
    <Routes>
    <Route path='/employeeList' element={<EmployeeList/>}/>
    <Route path='/addEmployee' element={<EmployeeForm/>}/>
    <Route path='/departments' element={<DepartmentsList/>}/>
    <Route path='/leaves' element={<Leaves/>}/>
    <Route path='/assets' element={<CompanyAssets/>}/>
    <Route path='/settings' element={<Settings/>}/>
    </Routes>
  </div>
  )
}

export default App
