import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Update() {

    let navigate=useNavigate();

    const {emp_id}=useParams()

    const [emp, setEmp]=useState({
        emp_id: "",
    emp_name:"",
    address:""
    });

    const{emp_name,address}=emp

    const onInputChange=(e)=>{

        setEmp({ ...emp, [e.target.name]: e.target.value})

    };

    useEffect(()=>{
        loadEmp()
    },[]);

    const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.put(`http://localhost:8080/update/${emp_id}`, emp);
        navigate("/findall")
    };

    const loadEmp=async()=>{
        const result=await axios.get(`http://localhost:8080/find/${emp_id}`);
        setEmp(result.data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Update Employee</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
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
               



                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <Link to="/findall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
