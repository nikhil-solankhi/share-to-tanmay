import { useState } from "react";
import Service from './service';
import {Link} from 'react-router-dom';


const Login = () => {
    var empOut;
    const [logindata, setlogindata] = useState({ username: "", password: "" });
    const handleChange = (event) => {
        console.log("In Handle Change Function");
        const { name, value } = event.target;
        setlogindata({ ...logindata, [name]: value })
        console.log("name: " + name + " value: " + value);
    }
    const auth = (event) => {
        event.preventDefault();
        if (logindata.username === "" || logindata.password === "") {
            alert("Kindly fill username and password");
        }


        Service.postLogindata(logindata.username, logindata.password,
            )
            .then((result) => {
                empOut = result.data;
                console.log("in login js " + empOut.id);
                sessionStorage.setItem('id', JSON.stringify(empOut.id));
            })
            .catch(() => { 
                
            }
            )
        }          


    
    return (
        <div>
            <div>
                <h1>Login Page </h1>
                <form>
                    Enter UserName:
                    <input type="text" id="uname" name="username" value={logindata.username} onChange={handleChange}></input>
                    <br></br>
                    Enter Password:&nbsp;&nbsp;
                    <input type="text" id="passwd" name="password" value={logindata.password} onChange={handleChange}></input>
                    <br></br>
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                        <button  type="button" className="btn btn-success" name='btn' id="view" onClick={auth}>Authenticate</button>
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/AfLogin">
                    <input type="reset" id="btnClr" value="Login"></input>
                    </Link>


                </form>
            </div>
            <div>

            </div>

        </div>


    );
}


export default Login;