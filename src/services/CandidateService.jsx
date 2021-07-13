  
import axios from "axios"

export default class CandidateService{
    getJobseekers(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }
    registerCandidate(values){
        return axios.post("http://localhost:8080/api/auth/registerCandidate",values)
    }

    getMailVerifyedCandidates(){
        return axios.get("http://localhost:8080/api/auth/confirmEmail")
    }
}