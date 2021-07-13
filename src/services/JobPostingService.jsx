import axios from "axios";

export default class JobPostingService{
    getActiveJobAds(){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getActive");
    }


    getActiveAdsByCompanyId(id){
        return axios.get("http://localhost:8080/api/jobAdvertisement/getActiveEmployer="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobAdvertisement/add",values)
    }
}