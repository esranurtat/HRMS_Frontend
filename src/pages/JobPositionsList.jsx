import React from 'react'
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobPositionService from "../../src/services/JobPositionService";

export default function JobPositionList() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setPositions(result.data));
  }, []);



  

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Job Position List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {positions.map((position) => (
            <Table.Row key={position.id}>
              <Table.Cell>{position.title}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}