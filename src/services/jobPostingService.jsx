import axios from "axios";

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getAll")
    }
    getOpenJobPostings(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getActive")
    }
    getJobPostingsOrderByPublishedAt(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getOrderByApplicationDeadline")
    }
}