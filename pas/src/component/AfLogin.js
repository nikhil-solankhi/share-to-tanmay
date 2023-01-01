// const empOut=require('./Login');
import { useEffect,useState } from "react";
import {useLocation} from 'react-router-dom'
import Service from "./service";
const AfLogin =()=>{

var empOut;
    let [logindata, setlogindata] = useState({ username: "", password: "" });
    let state=useLocation().state;
    useEffect(()=>{
        setlogindata({...state.employee})
    },[])
    

    const auth = () => {

            if (logindata.username === "" || logindata.password === "") {
                alert("Kindly fill username and password");
            }
    
    
            Service.postLogindata(logindata.username, logindata.password,
                )
                .then((result) => {
                    console.log("user" + result.data);
                   
                    console.log(result.data);
                    empOut = result.data;
                    console.log("in login js " + empOut);
                    
    
                })
                .catch(() => { }
                )
                // return <h6> {empOut.name} </h6> 
        }


console.log("in aflogin "+logindata.username);
    return (

        <div>
            {auth}
            <h5>Employee Details of </h5>
             
            
        </div>

    )
}
export default AfLogin;