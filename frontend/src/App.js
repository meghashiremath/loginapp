
import './App.css';
import {BrowserRouter,Navigate, Route, Routes} from "react-router-dom"
import EmployeeManagementApp from './Componenets/EmployeeManagementApp';
import EmployeeDetails from './Componenets/EmployeeDetails';
// import EmployeeTable from './Componenets/EmployeeTable';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to ="employee" />}   />
        <Route path="/employee" element={<EmployeeManagementApp  />}   />
        <Route path="/employee/:id" element={<EmployeeDetails  />}   />
      </Routes>
      </BrowserRouter>
    </div>
  )}
  export default App;