import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container, Grid } from "semantic-ui-react";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import EmployerDetail from "../pages/EmployerDetail";
import Footer from "./Footer";
import Navi from "./Navi";
import SideBar from "./SideBar";
import JobPostingList from "../pages/JobPostingList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterEmployer from "../pages/RegisterEmployer";
import Home from "../pages/Home/Home"

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Navi />
            <Container className="main">                
                <Grid stackable>
                    <Grid.Column width={4}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        
                        <Route exact path="/candidates" component={CandidateList}/>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/employers" component={EmployerList}/>
                        <Route exact path="/advertisements" component={JobPostingList}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/registerEmployer" component={RegisterEmployer}/>
                        <Route exact path="/employers/:id" component={EmployerDetail}/>

                    </Grid.Column>
                </Grid>
            </Container>
            <Footer/>
        </div>
    )
}