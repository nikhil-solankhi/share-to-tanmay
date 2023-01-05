import { useEffect, useState } from "react";
import Service from "./service";
import {Link} from 'react-router-dom';
const ViewForms = () => {
    var [emparr, setemp] = useState([]);
    var [flag, setFlag] = useState(false);
    var id = sessionStorage.getItem("id");
    useEffect(() => {
        Service.viewforms(id).then((response) => {
            setemp(response.data);
            setFlag(true);


        })
            .catch((err) => { console.log("error occured", err) });

    }, [flag]);
    const renderList=()=>{
        return emparr.map((emp)=>{
            return <tr key={emp.userid}><td>{emp.userid}</td><td>{emp.name}</td><td>{emp.designation}</td><td>{emp.gender}</td><td>{emp.tel}</td><td>{emp.description}</td><td>{emp.statusdesc}</td><td>{emp.award_name}</td>
            <td>
                {/* <Link to={{pathname:`/edit/${emp.empid}`,state:{employee:emp}}}> */}
                     <button type="button" className="btn btn-primary" name='btn' id="edit">Approve</button>
                {/* </Link> */}
                &nbsp;&nbsp;&nbsp;
                {/* <Link to={{pathname:`/view/${emp.empid}`,state:{employee:emp}}}> */}
                    <button type="button" className="btn btn-success" name='btn' id="view">Reject</button>
                {/* </Link> */}
            </td></tr>
        });
    }


    return (

        <div>
        <table border="2" cellPadding="5px" cellSpacing="5px"><thead>
        <tr><th>Employee ID</th><th>Name</th><th>Designation</th><th>Gender</th><th>Mobile No.</th><th>Description</th><th>Status</th><th>Award Name</th><th>Action</th></tr>
        </thead>
        <tbody>
            {renderList()}
        </tbody>
        </table>
        </div>

    )
}
export default ViewForms;