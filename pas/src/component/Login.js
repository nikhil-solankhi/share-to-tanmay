import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const Login = () => {
    const [logindata, setlogindata] = useState({ username: "", password: "" });
    const handleChange = (event) => {
        console.log("In Handle Change Function");
        const { name, value } = event.target;
        setlogindata({ ...logindata, [name]: value })
        console.log("name: " + name + " value: " + value);
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
                    <Link to={{ pathname: `/display`, state: { formdata: logindata } }}>
                        <button type="button" className="btn btn-success" name='btn' id="view">Login new button</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="reset" id="btnClr" value="Clear"></input>


                </form>
            </div>
            <div>

            </div>

        </div>


    );
}


export default Login;