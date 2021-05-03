import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;
export default function Navigation() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <SubMenu title="Services">
        <Menu.Item style={{ margin: "0" }}>
          <Link to="/services">Track car</Link>
        </Menu.Item>
        <Menu.Item style={{ margin: "0" }}>
          <Link to="/services">Parking</Link>
        </Menu.Item>
        <Menu.Item style={{ margin: "0" }}>
          <Link to="/services">Transport goods</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu title="Help">
        <Menu.Item>Make payment</Menu.Item>
      </SubMenu>
      <SubMenu title="Account">
        <Menu.Item style={{ margin: "0" }}>Login</Menu.Item>
        <Menu.Item style={{ margin: "0" }}>Register</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
