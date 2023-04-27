import axios from "axios";
import React, {useEffect, useState} from "react";
import Pagination from "./pagination";

import "./db.css";
import { Link, useParams } from "react-router-dom";
function FindAll(){


const [currentPage, setCurrentPage] = useState(1);
const [employeesPerPage] = useState(4);
 const indexOfLastEmployee = currentPage * employeesPerPage;
 const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;





  const [db, setDb] = useState([]);
  const [loading, setloading] = useState(false);
  const currentEmployees = db.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const{emp_id}=useParams()

  useEffect(()=>{
      loadDb();
  }, []);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const loadDb=async()=>{
    
      const result=await axios.get("http://localhost:8080/findall");
      setDb(result.data);
      setloading(false);
      
  }

  const deleteUser=async (emp_id)=>{
      await axios.delete(`http://localhost:8080/delete/${emp_id}`)
      loadDb()
  }


    return (

      <div className="" >
           
     <div className="container">
      <div className="py-4">

      <nav className="navbar   ">
      <div className="container-fluid">
          <h2><u>Employee Details</u></h2>
        
        <a href="./add" className="btn btn-warning" >
          Add Employee
        </a>
        
      </div>
    </nav>
        
        <table className="table table-striped table-bordered" id="cs3">
          <thead id="cs4">
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">Employee_Id</th>
              <th scope="col">Employee_Name</th>
              <th scope="col"> Employee_Address</th>
             
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((db, index) => (
               
               <tr>
               <th scope="row"key={index}>{index+1}</th>
               <td>{db.emp_id}</td>
              
               <td>{db.emp_name}</td>
               <td>{db.address}</td>
               <td>
                   <Link className="btn btn-success mx-2" 
                   to={`/find/${db.emp_id}`}>View</Link>
                   <Link  className="btn btn-info mx-2"
                   to={`/update/${db.emp_id}`} >Edit</Link>
                   <button className="btn btn-danger mx-2"
                   onClick={()=>deleteUser(db.emp_id)}
                   >Delete</button>
               </td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    <Pagination employeesPerPage={employeesPerPage}
    totalPosts={db.length}
    paginate={paginate}
    /> 
  </div>
  {/* {currentEmployees.map(employee => (
  <div key={employee.emp_id}>
    <span>{employee.emp_name}</span>
    <span>{employee.address}</span>
  </div>
))}

  <Pagination
  currentPage={currentPage}
  totalPages={Math.ceil(db.length / employeesPerPage)}
  onPageChange={setCurrentPage}
/> */}




  </div>

    );
}

export default FindAll;

