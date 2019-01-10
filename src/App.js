import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

import EditPost from "./Components/EditPost";
import {
  Badge,
  Layout,
  Card,
  Avatar,
  Dropdown,
  Menu,
  Icon,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  message,
  Row,
  Col
} from "antd";
import { userInit } from "./actions/user";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import "./App.css";
import styles from "./Components/index.less";
import User from "./Components/User/User";
import Organization from "./Components/Organization/Organization";
import logo from "./logo.svg";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import LoginModal from "./Components/LoginModal/LoginModal.js";
import { fetchProfileInfo } from "./actions/user";
import LoginButton from "./Components/Home/LoginButton";
import UserMenu from "./Components/Home/UserMenu";

var mapDispatchToProps = dispatch => {
  return {
    userInit: () => dispatch({ type: "USER_INIT", loading: true }),
    fetchProfile: () => dispatch(fetchProfileInfo())
  };
};

var mapStateToProps = state => {
  return {
    store: state,
    userData: state.userFunctions.user,
    isAuthenticated: state.userFunctions.isAuthenticated,
    isEditMode: state.userFunctions.isEditMode,
    userImage: state.userFunctions.user.imageUrl
  };
};
class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.state = {
      isEditMode: false,
      collapsed: false,
      addUserModal: false,
      organizationModal: false,
      visible: false
    };
  }
  componentDidMount() {
    this.props.fetchProfile();
  }
  openModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  editMode = () => {
    this.props.history.push("/edit");
    console.log(this.props.history);
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed });
  };

  onUserCloseModal = modal => {
    console.log("testing");
    this.setState({ addUserModal: modal });
  };

  onOrganizationCloseModal = modal => {
    this.setState({ organizationModal: modal });
  };
  render() {
    console.log("test", this.props.userData);
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
    const { Meta } = Card;

    const { Option } = Select;
    return (
      <Layout className="ant-layout-has-sider ">
        <LoginModal
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          visible={this.state.visible}
        />

        <User
          showUserModal={this.state.addUserModal}
          onUserCloseModal={this.onUserCloseModal}
        />
        <Organization
          organizationModal={this.state.organizationModal}
          onOrganizationCloseModal={this.onOrganizationCloseModal}
        />
        <Layout>
          <div>
            <Row gutter={24} style={{ background: "#FFF" }}>
              <Col span={6}>
                <img style={{ width: "60px", height: "45px" }} src={logo} />
              </Col>

              <Col span={6} />
              <Col span={6} style={{ textAlign: "right" }}>
                {this.props.isEditMode ? (
                  <Button
                    style={{ marginTop: "7px", color: "#FGTR" }}
                    type="dashed"
                  >
                    Ready Publish ?
                  </Button>
                ) : (
                  ""
                )}
              </Col>
              <Col span={6}>
                {this.props.isAuthenticated === true ? (
                  <UserMenu
                    userImage={this.props.userImage}
                    editMode={this.editMode}
                  />
                ) : (
                  <LoginButton openModal={this.openModal} />
                )}
              </Col>
            </Row>
          </div>

          <Content style={{ margin: "0 16px" }}>{this.props.children}</Content>
          <Footer style={{ textAlign: "center" }}>@Frugalisminds</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
