import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {

  const location = useLocation().pathname;

  return (
    <div>
      <Menu fluid compact icon="labeled" vertical>


        <Menu.Item as={Link} to={"/employers"} active={location === "/employers"}>
          <Icon name="factory" />
          İş verenler
        </Menu.Item>

        <Menu.Item as={Link} to={"/candidates"} active={location === "/candidates"}>
          <Icon name="user" />
          Kullanıcılar
        </Menu.Item>

        <Menu.Item as={Link} to={"/advertisements"} active={location === "/advertisements"}>
          <Icon name="user" />
          İş İlanları
        </Menu.Item>

      </Menu>
    </div>
  );
}