function EmployeeDetailsCard({emp}) {

    return (<div>
        <div>
            <label>Name:</label>
            <span>{emp.name}</span>
        </div>
        <div>
            <label>Email:</label>
            <span>{emp.email}</span>
        </div>
        <div>
            <label>Department:</label>
            <span>{emp.department}</span>
        </div>
        <div>
            <label>Salary:</label>
            <span>{emp.salary}</span>
        </div>
    </div>)

}
export default EmployeeDetailsCard;