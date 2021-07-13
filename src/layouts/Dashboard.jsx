import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container, Grid } from "semantic-ui-react";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import Footer from "./Footer";
import Navi from "./Navi";
import SideBar from "./SideBar";
import Sections from "./Sections";
import JobPostingList from "../pages/JobPostingList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterEmployer from "../pages/RegisterEmployer";


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
                        <Route exact path="/" component={Sections} />
                        <Route exact path="/employers" component={EmployerList}/>
                        <Route exact path="/advertisements" component={JobPostingList}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/registerEmployer" component={RegisterEmployer}/>

                    </Grid.Column>
                </Grid>
            </Container>
            <Footer/>
        </div>
    )
}