import React from 'react';
import { Grid, GridColumn } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingList"
import JobPositionList from "../pages/JobPositionsList";
import EmployerList from "../pages/EmployerList";
import CandidateList from "../pages/CandidateList";


export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={12}>
                        <CandidateList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={12}>
                        <EmployerList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={12}>
                        <JobPostingList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={12}>
                        <JobPositionList />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}