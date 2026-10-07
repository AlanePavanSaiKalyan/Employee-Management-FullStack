import { useEffect, useState } from "react";
import { addEmployee, getDepartments, updateEmployee } from "../../service/EmployeeService";
import { useLocation, useNavigate } from "react-router-dom";
import "./Employee.css";

export function EmployeeForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isEditing, setIsEditing] = useState(false);
    const [employeeData, setEmployeeData] = useState({
        name: "",
        email: "",
        departmentId: "",
        designation: "",
        salary: ""
    });
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetchDepartments();
    }, [])

    useEffect(() => {
        if (location.state && location.state.employee) {
            setEmployeeData({ ...location.state.employee,departmentId:location.state.employee.department.id });
            setIsEditing(true);
        }

    }, [location])

    const fetchDepartments = async () => {
        await getDepartments().then((response) => {
            setDepartments([...response.data])
            console.log(response);
        }).catch(e => console.log(e))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await updateEmployee(employeeData.id, employeeData)
                .then(() => {
                    alert("Employee Updated Successfully!!");
                    navigate("/employeeList")
                }).catch((error) =>
                    console.log(error)
                )

        } else {
            await addEmployee(employeeData)
                .then(() => {
                    alert("Employee Added Successfully!!");
                    navigate("/employeeList");
                })
                .catch((e) => console.log(e));
        }
    };

    return (
        <div className="form-page-container">
            <div className="form-card">
                <div className="form-header">
                    <h2>Add New Employee</h2>
                    <p>Enter the details of the new team member.</p>
                </div>

                <form onSubmit={handleSubmit} className="employee-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={employeeData.name}
                            onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })}
                            placeholder="e.g. John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={employeeData.email}
                            onChange={(e) => setEmployeeData({ ...employeeData, email: e.target.value })}
                            placeholder="john@company.com"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            {/* <input
                                id="department"
                                type="text"
                                required
                                value={employeeData.department}
                                onChange={(e) => setEmployeeData({ ...employeeData, department: e.target.value })}
                                placeholder="e.g. Engineering"
                            /> */}
                            <select value={employeeData.departmentId || ""} 
                            onChange={(e)=>setEmployeeData({...employeeData,departmentId:Number(e.target.value)})}>
                               <option value={""}  >Select Department</option>
                                {departments.map((d)=>(<option key={d.id} value={d.id}>{d.name}</option>))}

                            </select>
                        </div>
                


                        <div className="form-group">
                            <label htmlFor="designation">Designation</label>
                            <input
                                id="designation"
                                type="text"
                                required
                                value={employeeData.designation}
                                onChange={(e) => setEmployeeData({ ...employeeData, designation: e.target.value })}
                                placeholder="e.g. Frontend Developer"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="salary">Salary ($)</label>
                        <input
                            id="salary"
                            type="number"
                            required
                            min="0"
                            value={employeeData.salary}
                            onChange={(e) => setEmployeeData({ ...employeeData, salary: e.target.value })}
                            placeholder="60000"
                        />
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-cancel" onClick={() => navigate("/employeeList")}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-submit">
                            {isEditing ? "Edit" : "Save"} Employee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}