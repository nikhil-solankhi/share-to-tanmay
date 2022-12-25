import { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom'
import Login from "./Login";

const EmployeeDetails = (props) => {
    let [empob, setempob] = useState({ empid: "", ename: "", sal: "" });
    let state = useLocation().state;
    useEffect(() => {
        setempob({ ...state.employee })
    }, [])
    return (
        <div>
            <Login />
            <div>
                <div >
                    <h5 >Employee Details</h5>
                    <h6>{empob.empid}</h6>
                    <p>
                        Id: {empob.empid}
                        Name : {empob.ename}
                    </p>
                    <Link to="/list">
                        <button type="button" name="btn" id="btn" className="btn btn-success">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetails;