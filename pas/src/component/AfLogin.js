import { useEffect, useState } from "react";
import Service from "./service";
import {Link} from 'react-router-dom';
const AfLogin = () => {
    var [emparr, setemp] = useState([]);
    var [flag, setFlag] = useState(false);
    var id = sessionStorage.getItem("id");
    useEffect(() => {
        Service.getEmp(id).then((response) => {
            setemp(response.data);
            setFlag(true);


        })
            .catch((err) => { console.log("error occured", err) });

    }, [flag]);
    const renderList = () => {
        return emparr.map((emp) => {
            return <tr key={emp.userid}> <td> Hi <b>{emp.name}</b>  welcome to Tansflower ESS Portal...! <br></br> <br></br>
                Employee details: <br></br> <br></br>
                Name: {emp.name} <br></br>
                Emp ID: {emp.userid} <br></br>
                Designation: {emp.designation}<br></br>
                Contact No : {emp.tel}<br></br></td></tr>
        });


    }


    return (

        <div>
            <Link to="/Editprofile">
                <input type="reset" id="btnClr" value="Edit Profile"></input>
            </Link>
            <Link to="/ViewForms">
                <input type="reset" id="btnClr" value="View Appraisal forms"></input>
            </Link>
            <table>
                <tbody>
                    {renderList()}
                </tbody>
            </table>

        </div >

    )
}
export default AfLogin;