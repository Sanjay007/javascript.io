import React, { Component } from "react";
import { GITHUB_AUTH_URL } from "./Constants";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

import EditPost from "./Components/EditPost";
import axios from "./utils/axiosServer.js";

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
  Alert,
  Col
} from "antd";
import { userInit } from "./actions/user";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import "./App.css";
import styles from "./Components/index.less";
import logo from "./logo.svg";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import LoginModal from "./Components/LoginModal/LoginModal.js";
import { fetchProfileInfo } from "./actions/user";
import { getDashboard } from "./actions/posts";

import LoginButton from "./Components/Home/LoginButton";
import UserMenu from "./Components/Home/UserMenu";
import PublishModal from "./Components/PublishModal/PublishModal.js";

var mapDispatchToProps = dispatch => {
  return {
    triggerNoEdit: () =>
      dispatch({ type: "EDIT_MODE_TRIGGERED", isEditMode: false }),
    userInit: () => dispatch({ type: "USER_INIT", loading: true }),
    triggerEdit: () =>
      dispatch({ type: "EDIT_MODE_TRIGGERED", isEditMode: true }),
    doLogout: () => dispatch({ type: "USER_LOGOUT" }),
    fetchProfile: () => dispatch(fetchProfileInfo()),
    getDashboardData: () => dispatch(getDashboard()),
    postPublishSuccess: () => dispatch({ type: "POST_PUBLISH_SUCCESS" })
  };
};

var mapStateToProps = state => {
  return {
    store: state,
    userData: state.userFunctions.user,
    isAuthenticated: state.userFunctions.isAuthenticated,
    isEditMode: state.userFunctions.isEditMode,
    userImage: state.userFunctions.user.imageUrl,
    editedData: state.userFunctions.currentDraftPost
  };
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      collapsed: false,
      addUserModal: false,
      organizationModal: false,
      visible: false,
      publishModal: false,
      buttonloading: false
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

  triggerEditMode = () => {
    console.log("clicked Draft mode");
    this.props.triggerEdit();
  };

  handlePublishOk = e => {
    console.log(e);

    this.setState({
      publishModal: false
    });
  };

  handlePublishCancel = e => {
    console.log(e);
    this.setState({
      publishModal: false
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleLogout = e => {
    localStorage.removeItem("ACCESS_TOKEN");
    this.props.doLogout();
    this.props.history.push("/");
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed: !this.state.collapsed });
  };

  publishModal = modal => {
    this.setState({ publishModal: true });
  };

  /**
   * As a Callback to PublishModal
   * Updates Modal to Close
   * Updates Button loader
   */
  publishNow = () => {
    this.setState({ buttonloading: true });
    let reqData = this.props.editedData;
    reqData.type = "PUBLISHED";
    reqData.data = this.props.editedData.postsdata;
    reqData.tags = "";
    axios
      .post("/posts", reqData)
      .then(response => {
        console.log("api", response);
        this.props.postPublishSuccess();
        this.props.triggerNoEdit();
        this.props.history.push("/test");
        this.setState({ buttonloading: false, publishModal: false });
      })
      .catch(err => {
        message.error("Something Bad Happened !");
      });
  };

  navigateGit = () => {
    window.location.href = GITHUB_AUTH_URL;
  };
  componentWillMount() {
    this.props.getDashboardData();
  }
  render() {
    const { Content, Footer } = Layout;
    return (
      <Layout className="ant-layout-has-sider ">
        <PublishModal
          buttonloading={this.state.buttonloading}
          image={this.props.editedData.featuredImage}
          title={this.props.editedData.title}
          visible={this.state.publishModal}
          handleOk={this.handlePubishOk}
          publishNow={this.publishNow}
          handleCancel={this.handlePublishCancel}
        />
        <LoginModal
          navigateGit={this.navigateGit}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          visible={this.state.visible}
        />

        <Layout>
          <div>
            <Row gutter={24} style={{ background: "#FFF" }}>
              <Col span={6}>
                <Link to={"/"}>
                  <img style={{ width: "60px", height: "45px" }} src={logo} />
                </Link>
              </Col>

              <Col span={6} />
              <Col span={6} style={{ textAlign: "right" }}>
                {this.props.isEditMode === true ? (
                  <Button
                    style={{ marginTop: "7px", color: "#FGTR" }}
                    type="dashed"
                    onClick={this.publishModal}
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
                    logout={this.handleLogout}
                    triggerEditMode={this.triggerEditMode}
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
