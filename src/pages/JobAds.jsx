/*
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
  Table,
  Button,
  Icon,
  Pagination,
  
  Card
} from "semantic-ui-react";
import JobAdService from '../services/JobPostingService';
import JobAdFilter from '../layouts/JobPostFilter';
import { useSelector } from 'react-redux';


export default function JobAds() {

  let [jobAds, setJobAds] = useState([]);
 

  const {authItem} = useSelector(state => state.auth)

 
  useEffect(() => {
    let jobAdService = new JobAdService();
   
    jobAdService.getActiveJobAds()
    .then((result) => {
      setJobAds(result.data.data);
      
    });
    
  }, );

  const handleFilterClick = (filterOption) => {
    if(filterOption.cityId.length === 0){
      filterOption.cityId = null;
    }
    if(filterOption.jobPositionId.length === 0){
      filterOption.jobPositionId = null;
    }
   
  }

 

 
  return (
    <div>
      <JobAdFilter clickEvent={handleFilterClick}/>

      <Card fluid>
        <div style={{marginTop:"1em",marginLeft:"1em"}}>
        <Card.Header as="h2">
          <Icon name="bullhorn" />
          İş İlanları
        </Card.Header>
        </div>
      
      <Table  color="black" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
            <Table.HeaderCell>Son Tarih</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
            {authItem[0].loggedIn && authItem[0].user.userType===1 &&
              <Table.HeaderCell>Favorilere Ekle</Table.HeaderCell>
            }
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAds?.map((jobAd) => (
            <Table.Row key={jobAd.id}>
              <Table.Cell>{jobAd.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAd.jobPosition.name}</Table.Cell>
              <Table.Cell>{jobAd.city.name}</Table.Cell>
              <Table.Cell>{jobAd.minSalary}₺ - {jobAd.maxSalary}₺</Table.Cell>
              <Table.Cell>{jobAd.workTime.name}</Table.Cell>
              <Table.Cell>{jobAd.workPlace.name}</Table.Cell>
              <Table.Cell>
                {(
                  (new Date(jobAd.lastDate).getTime() -
                    new Date(Date.now()).getTime()) /
                  86400000
                )
                  .toString()
                  .split(".", 1)}{" "}
                gün
              </Table.Cell>
              <Table.Cell>
                <Button as={Link} to={`/jobads/${jobAd.id}`}
                    content="Detayları Gör"
                    icon="right arrow"
                    labelPosition="right"
                  />
              </Table.Cell>
              {authItem[0].loggedIn && authItem[0].user.userType===1 &&
                <Table.Cell>
                
                </Table.Cell>
              }
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Card.Content>
      <div>
      <Pagination
        firstItem={null}
        lastItem={null}
        
      />

      
      </div>
      </Card.Content>
      </Card>

    </div>
  )
}
*/