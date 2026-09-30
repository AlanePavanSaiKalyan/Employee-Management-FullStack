import { useEffect, useState } from "react";
import { getEmployees } from "../service/EmployeeService";
import EmployeeDetailsCard from "../custom_components/EmployeeDetailsCard";

function EmployeeList() {
    const[employees,setEmployees] = useState([]);
    
    useEffect(()=>{
        
            getEmployees().then(resp=>{
                console.log("Emp",resp.data);
                setEmployees([...resp.data]);
            }).catch(error=>
                console.log(error)
            )
       
    },[])
    return (
        <div>
            <h2>Employees</h2>
            {employees.length>0 && employees.map((emp)=><EmployeeDetailsCard emp={emp}/>)}
        </div>
    );
}

export default EmployeeList;