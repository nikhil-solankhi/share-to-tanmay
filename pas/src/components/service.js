import axios from 'axios';

class Service{
    constructor(){
        this.baseUrl="http://localhost:3000/";
   }
    getEmployees(){
        return axios.get(this.baseUrl+"login");
    }

}
export default new Service();