import React from "react";
import { connect } from "react-redux";
import {
  Card,
  Carousel,
  Col,
  Row,
  Form,
  Icon,
  Tooltip,
  Button,
  Checkbox,
  Skeleton,
  Switch,
  Avatar,
  Table,
  Divider
} from "antd";
import { auth } from "../actions/user";
import User from "../Components/User/User";
import Organization from "../Components/Organization/Organization";

import "./../Dashboard.css";
const { Meta } = Card;

var mapStateToProps = state => {
  return {
    isLoading: state.userFunctions.isLoading
  };
};

var mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password, history) =>
      dispatch(auth(username, password, history)),
    changeConfigPageMenu: value =>
      dispatch({ type: "CHANGE_CONFIGURATION_PAGE_MENU", value })
  };
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  stopLoad = () => {
    this.setState({ loading: false });
  };
  render() {
    const { loading } = this.state;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        width: 50
      },
      {
        title: "Age",
        dataIndex: "age",
        width: 50
      },

      {
        title: "Address",
        dataIndex: "address",
        width: 50
      }
    ];

    const data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }

    return (
      <React.Fragment>
        <User showUserModal={this.state.showUserModal} />

        <div>
          <Row gutter={16}>
            <Col span={6}>
              <Card
                hoverable
                actions={[
                  <Button
                    type="primary"
                    shape="circle"
                    icon="setting"
                    size="small"
                    onClick={this.stopLoad}
                  />,
                  <Button
                    type="primary"
                    shape="circle"
                    icon="edit"
                    size="small"
                  />,
                  <Button
                    type="primary"
                    shape="circle"
                    icon="ellipsis"
                    size="small"
                  />
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="No of Candidate"
                    description="This is the description"
                  />
                </Skeleton>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                actions={[
                  <Button
                    type="primary"
                    shape="circle"
                    icon="setting"
                    size="small"
                  />,
                  <Button
                    type="primary"
                    shape="circle"
                    icon="edit"
                    size="small"
                  />,
                  <Button
                    type="primary"
                    shape="circle"
                    icon="ellipsis"
                    size="small"
                  />
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="No of Candidate"
                    description="This is the description"
                  />
                </Skeleton>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                actions={[
                  <Button
                    type="primary"
                    shape="circle"
                    icon="setting"
                    size="small"
                  />,
                  <Button
                    type="primary"
                    shape="circle"
                    icon="edit"
                    size="small"
                  />,
                  <Button
                    type="primary"
                    shape="circle"
                    icon="ellipsis"
                    size="small"
                  />
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="In progess Candidates"
                    description="This is the description"
                  />
                </Skeleton>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                actions={[
                  <Button
                    type="primary"
                    shape="circle"
                    icon="setting"
                    size="small"
                  />,
                  <Button
                    type="primary"
                    shape="circle"
                    icon="edit"
                    size="small"
                  />,
                  <Button
                    type="primary"
                    shape="circle"
                    icon="ellipsis"
                    size="small"
                  />
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="In progess Candidates"
                    description="This is the description"
                  />
                </Skeleton>
              </Card>
            </Col>
          </Row>
          <Divider orientation="left" />
          <Row gutter={16}>
            <Col span={12}>
              <Table
                size="small"
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
                scroll={{ y: 200 }}
              />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
