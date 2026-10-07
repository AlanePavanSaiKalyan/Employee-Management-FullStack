import { NavLink } from "react-router-dom"; 
import "./Navbar.css";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { BsCalendar3Fill } from "react-icons/bs";
import { FaLaptopFile } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";



export function Navbar() {
    const [navbarOpen,setNavbarOpen] = useState(true);
  return (
    <div className="navbar-main" style={{width:navbarOpen?"14%":"2%"}}>
      <div className="navbar-head">
       {navbarOpen && <FaPeopleGroup onClick={()=>{
            setNavbarOpen(!navbarOpen);
        }}/>} {navbarOpen && "H R M S"} <IoReorderThreeOutline onClick={()=>{
            setNavbarOpen(!navbarOpen);
        }} cursor={"pointer"}/>
      </div>
      <div className="list-items">
        <NavLink className="nav-item" to="/dashboard"><MdDashboard size={18}/> {navbarOpen && "Dashboard"}</NavLink>
        <NavLink className="nav-item" to="/employeeList"><IoPeople size={18} /> {navbarOpen && "Employees"}</NavLink>
        <NavLink className="nav-item" to="/departments"><HiBuildingOffice2 size={18}/>{navbarOpen && "Departments"} </NavLink>
        <NavLink className="nav-item" to="/assets"><FaLaptopFile size={18}/>{navbarOpen && "Assets"} </NavLink>
        <NavLink className="nav-item" to="/leaves"><BsCalendar3Fill size={14}/>{navbarOpen && "Leaves"} </NavLink>
        <NavLink className="nav-item" to="/settings"><IoMdSettings size={18}/>{navbarOpen && "Settings"} </NavLink>
      </div>
    </div>
  );
}