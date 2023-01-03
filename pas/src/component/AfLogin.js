import { useEffect, useState } from "react";
import Service from "./service";
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

    },[flag]);
    const renderList = () => {
        return emparr.map((emp) => {
            return <div> <p> Hi <b>{emp.name}</b>  welcome to Tansflower ESS Portal...! <br></br> <br></br>
                Employee details: <br></br> <br></br>
                Name: {emp.name} <br></br>
                Emp ID: {emp.userid} <br></br>
                Designation: {emp.designation}<br></br>
                Contact No : {emp.tel}<br></br>
            </p>
            </div>
        });


    }


    return (

        <div>
            {renderList()}
        </div >

    )
}
export default AfLogin;