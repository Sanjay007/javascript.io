import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Carousel,
  Input,
  Col,
  Row,
  Select,
  Form,
  Icon,
  Modal,
  Tooltip,
  Button,
  Checkbox,
  Skeleton,
  Switch,
  Avatar,
  Table,
  Divider
} from "antd";
import { createUser } from "../../actions/user";
const FormItem = Form.Item;
const Option = Select.Option;

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {
    onCreateUser: user => dispatch(createUser(user))
  };
};

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      userRole: []
    };
    this.baseState = this.state;
  }

  handleSubmit = e => {
    this.setState({ loginId: this.state.email, active: false }, () => {
      this.props.onCreateUser(this.state);
    });
    this.setState(this.baseState);
    this.props.onUserCloseModal(false);
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  handleSelectChange = value => {
    let newArr = value.map((val, i) => {
      return {
        role: val
      };
    });
    this.setState({ userRole: newArr });
  };
  getdefaultValues = value => {
    var roles = [];
    if (value !== undefined) {
      for (var i = 0; i < value.length; i++) {
        roles.push(value[i].role);
      }
    }
    console.log(roles);
    return roles;
  };
  handleCancel = e => {
    this.setState(this.baseState);
    this.props.onUserCloseModal(false);
  };

  render() {
    return (
      <div>
        <Modal
          title="Add User"
          visible={this.props.showUserModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          ]}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              label="First Name"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input
                name="firstName"
                onChange={this.handleChange}
                value={this.state.firstName}
              />
            </FormItem>
            <FormItem
              label="Last Name"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </FormItem>
            <FormItem
              label="Email Id"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormItem>
            <FormItem
              label="Role"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Select
                placeholder="Select a option and change input text above"
                mode="multiple"
                value={this.getdefaultValues(this.state.userRole)}
                onChange={this.handleSelectChange}
                name="role"
              >
                <Option value="user">user</Option>
                <Option value="admin">admin</Option>
              </Select>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
