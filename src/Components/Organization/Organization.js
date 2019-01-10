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
import { createOrganization } from "../../actions/user";
const FormItem = Form.Item;
const Option = Select.Option;

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {
    onCreateOrganization: organization =>
      dispatch(createOrganization(organization))
  };
};

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      emailId: "",
      mobileNo: "",
      phoneNo: "",
      organizationSize: ""
    };
    this.baseState = this.state;
  }

  handleSubmit = e => {
    this.props.onCreateOrganization(this.state);
    this.setState(this.baseState);
    this.props.onOrganizationCloseModal(false);
  };
  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  handleSelectChange = value => {
    this.setState({ organizationSize: value });
  };
  handleCancel = e => {
    this.setState(this.baseState);
    this.props.onOrganizationCloseModal(false);
  };

  render() {
    return (
      <div>
        <Modal
          title="Add Organization"
          visible={this.props.organizationModal}
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
              label="Name"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </FormItem>
            <FormItem
              label="URL"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input
                name="url"
                value={this.state.url}
                onChange={this.handleChange}
              />
            </FormItem>
            <FormItem
              label="Email Id"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input
                name="emailId"
                value={this.state.emailId}
                onChange={this.handleChange}
              />
            </FormItem>
            <FormItem
              label="Mobile No"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input
                name="mobileNo"
                value={this.state.mobileNo}
                onChange={this.handleChange}
              />
            </FormItem>
            <FormItem
              label="Phone no"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input
                name="phoneNo"
                value={this.state.phoneNo}
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
                value={this.state.organizationSize}
                onChange={this.handleSelectChange}
                name="role"
              >
                <Option value="1-10">1-10</Option>
                <Option value="10-100">10-100</Option>
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
)(Organization);
