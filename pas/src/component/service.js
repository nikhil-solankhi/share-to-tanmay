import axios from 'axios';
// const empOut=require('./Login')

class Service{
    constructor(){
        this.baseUrl="http://localhost:4000/";
   }
    getEmployees(){
        return axios.get(this.baseUrl+"login");
    }
    postLogindata(username,password){
        return axios.get(this.baseUrl+'authen/'+'"'+username+'"'+'/'+'"'+password+'"');
    }
    getEmp(id){
        console.log("in get emp "+id);
        return axios.get(this.baseUrl+"getemp/"+id);
    }

}
export default new Service();