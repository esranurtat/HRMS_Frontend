
import axios from "axios"

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    getByJobAdId(id){
        return axios.get("http://localhost:8080/api/employers/getById?id=2"+id)
    }
    registerEmployer(values){
        return axios.post("http://localhost:8080/api/auth/registerEmployer",values)
    }

}