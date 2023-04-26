import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Add() {

    let navigate=useNavigate();

    const [emp, setEmp]=useState({
      
        emp_id: "",
        emp_name:"",
        address:""

    });

   

     const{emp_id,emp_name,address}=emp

    const onInputChange=(e)=>{

        setEmp({ ...emp, [e.target.name]: e.target.value})

    };

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.post("http://localhost:8080/add", emp);
        navigate("/findall")
    };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Register Employees</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b> EmployeeId</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter ID"
                            name="emp_id"
                            value={emp_id}
                            onChange={(e)=>onInputChange(e)}
                            id="emp_id"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emp_name" className="form-label">
                            <b>EmployeeName</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter EmployeeName"
                            name="emp_name"
                            value={emp_name}
                            onChange={(e)=>onInputChange(e)}
                            id="emp_name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            <b> EmployeeAddress</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter EmployeeAddress"
                            name="address"
                            value={address}
                            onChange={(e)=>onInputChange(e)}
                            id="address"
                        />
                    </div>
               
                    <button type="submit" className="btn btn-outline-primary" >Submit</button>
                    <Link to="/findall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
