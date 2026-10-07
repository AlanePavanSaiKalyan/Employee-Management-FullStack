import axios from "axios";

const API_URL = "http://localhost:8080/api"

export const getEmployees=()=>{
    return axios.get(`${API_URL}/employees`);
}
 
export const addEmployee=(payload)=>{
    return axios.post(`${API_URL}/employees`,payload);
}

export const deleteEmployee = (id)=>{
    return axios.delete(`${API_URL}/employees/${id}`);
}

export const updateEmployee = (id, payload)=>{
    return axios.put(`${API_URL}/employees/${id}`,payload);
}

export const getDepartments = ()=>{
    return axios.get(`${API_URL}/departments`);
}
export const addDepartmen =(payload)=>{
    return axios.post(`${API_URL}/departments`);
}