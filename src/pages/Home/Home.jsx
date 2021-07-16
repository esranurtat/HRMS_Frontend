  
import CandidatesList from "../../pages/CandidateList";
import CreateAccountBanner from "./CreateAccountBanner";
import JobAdvertsList from "../../pages/JobPostingList";
import { Link } from "react-router-dom";
import Overlay from "./Overlay";
import React from "react";
import Steps from "./Steps";

export default function Home() {
  return (
    <div className='container-fluid bg-white'>
      <div className='container'>
        <Overlay />
        <Steps />
        <JobAdvertsList size={6} pagination={false} />
        <div className='text-center mb-5'>
          <Link to='/advertisements' className='btn btn-primary rounded shadow'>
            Browse All
          </Link>
        </div>
        <CandidatesList />
        <CreateAccountBanner />
      </div>
    </div>
  );
}