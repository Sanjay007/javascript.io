import { Dropdown, Avatar, Menu, Icon } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  const menu = (
    <Menu>
      <Menu.Item>
        {" "}
        <Link to={"/profile"}> My profile</Link>
      </Menu.Item>
      <Menu.Item onClick={props.editMode}>Write Post</Menu.Item>
      <Menu.Item>
        {" "}
        <Link to={"/test"}>Stories</Link>
      </Menu.Item>
      <Menu.Item>Sign out</Menu.Item>
    </Menu>
  );
  const userMenu = (
    <Menu>
      <Menu.Item>
        {" "}
        <Link to={"/edit"}>Write Post </Link>
      </Menu.Item>
      <Menu.Item>Stories</Menu.Item>
    </Menu>
  );

  return (
    <Menu mode="horizontal" onClick={props.onClick}>
      <Menu.Item key="bell">
        <Dropdown overlay={menu} placement="bottomCenter" trigger="hover">
          <a>
            <Icon style={{ fontSize: "18px", color: "#08c" }} type="bell" />
          </a>
        </Dropdown>
      </Menu.Item>
      <Menu.Item key="user">
        <Dropdown overlay={userMenu} placement="bottomCenter">
          <a>
            <Icon style={{ fontSize: "18px", color: "#08c" }} type="user" />
          </a>
        </Dropdown>
      </Menu.Item>

      <Menu.Item key="setting">
        <Dropdown overlay={menu} placement="bottomCenter" trigger="hover">
          <a>
            {" "}
            {props.userImage ? (
              <Avatar src={props.userImage} />
            ) : (
              <Avatar>U</Avatar>
            )}
          </a>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
}
