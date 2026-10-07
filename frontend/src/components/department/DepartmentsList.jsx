import { useEffect, useState } from "react";
import { deleteEmployee, getDepartments } from "../../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import "./departments.css"; 
import { FaEdit, FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function DepartmentsList() {
    const navigate = useNavigate();
    const [departments, setDepartments] = useState([]);
    
    useEffect(() => {
        fetchDept();
    }, []);

    const fetchDept=async()=>{
       await getDepartments().then(resp => {
            console.log("Emp", resp.data);
            setDepartments([...resp.data]);
        }).catch(error => 
            console.log(error)

        );
    }
    // const handleEdit=(employee)=>{
    //     navigate('/addEmployee',{state:{employee}})
    // }

    // const handleDelete=async(id)=>{
    //     await deleteEmployee(id).then(()=>{
    //          fetchEmp();
    //     }).catch(error=>{
    //         console.log(error);
    //     })
    // }

    return (
        <div className="employee-dlist-container">
            <div className="dlist-header-section">
                <div className="dheader-text">
                    <h3>Departments</h3>
                </div>
                <button className="dadd-btn" onClick={() => navigate("/addEmployee")}>
                     Add Department
                </button>
            </div>

            <div className="dtable-wrapper">
                <table className="dept-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((e, i) => (
                            <tr key={e.id || i}> 
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'7px'}}><MdDelete className="dtabicon"  /> | <FaEdit  className="dtabicon"/></td>
                            </tr>
                        ))}
                        {departments.length === 0 && (
                            <tr>
                                <td colSpan="3" className="dempty-state">No departments found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DepartmentsList;