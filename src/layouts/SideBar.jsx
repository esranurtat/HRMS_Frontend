import React from "react";
import {  Icon, Menu, Sidebar } from "semantic-ui-react";

const SidebarExampleVisible = () => (
  
  <Sidebar as={Menu} inverted vertical visible width="thin">
   
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="user outline" />
      Candidates
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="user" />
      Employers
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="fork" />
      Job Posting
    </Menu.Item>
  </Sidebar>
);

export default SidebarExampleVisible;
