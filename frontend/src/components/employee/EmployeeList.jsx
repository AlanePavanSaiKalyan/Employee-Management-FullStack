import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import "./Employee.css"; 
import { FaEdit, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function EmployeeList() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        fetchEmp();
    }, []);

    const fetchEmp=async()=>{
       await getEmployees().then(resp => {
            console.log("Emp", resp.data);
            setEmployees([...resp.data]);
        }).catch(error => 
            console.log(error)

        );
    }
    const handleEdit=(employee)=>{
        navigate('/addEmployee',{state:{employee}})
    }

    const handleDelete=async(id)=>{
        await deleteEmployee(id).then(()=>{
             fetchEmp();
        }).catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className="employee-list-container">
            <div className="list-header-section">
                <div className="header-text">
                    <h3>Employees</h3>
                </div>
                <button className="add-btn" onClick={() => navigate("/addEmployee")}>
                     Add Employee
                </button>
            </div>

            <div className="table-wrapper">
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>Sl.no</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((e, i) => (
                            <tr key={e.id || i}> 
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td><span className="dept-badge">{e.department.name}</span></td>
                                 <td><span className="dept-badge">{e.designation}</span></td>
                                <td>${e.salary}</td>
                                <td style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'7px'}}><MdDelete className="tabicon" onClick={()=>handleDelete(e.id)} /> | <FaEdit onClick={()=>handleEdit(e)} className="tabicon"/></td>
                            </tr>
                        ))}
                        {employees.length === 0 && (
                            <tr>
                                <td colSpan="6" className="empty-state">No employees found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeeList;