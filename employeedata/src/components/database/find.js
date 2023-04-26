import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function View() {

  const [emp, setEmp] = useState({
    emp_id: "",
    emp_name:"",
    address:""
  });

  const { emp_id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/find/${emp_id}`);
    setEmp(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Employee Details</u></h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
              <li className="list-group-item">
                  <b>EmpID: </b>&ensp;
                  {emp.emp_id}
                </li>
                <li className="list-group-item">
                  <b>EmployeeName </b>&ensp;
                  {emp.emp_name}
                </li>
                <li className="list-group-item">
                  <b>EmployeeAddress</b>&ensp;
                  {emp.address}
                </li>
              
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/findall"}>
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}