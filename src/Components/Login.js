import React from "react";
import { connect } from "react-redux";
import {
  Card,
  Spin,
  Col,
  Row,
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from "antd";
import { auth } from "../actions/user";

var mapStateToProps = state => {
  return {
    isLoading: state.userFunctions.isLoading
  };
};
const FormItem = Form.Item;

var mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password, history) =>
      dispatch(auth(username, password, history)),
    changeConfigPageMenu: value =>
      dispatch({ type: "CHANGE_CONFIGURATION_PAGE_MENU", value })
  };
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: false
    };
  }

  handleSubmit = e => {
    //this.setState({ loading: true });
    // localStorage.setItem("user", "rrrrrrr");
    // this.props.history.push("/");

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        localStorage.setItem("user", "GTCGCTCGFCFCF");
        localStorage.setItem("token", "GTCGCTCGFCFCF");

        this.props.history.push("/");
        // this.props.onLogin(
        //   values.username,
        //   values.password,
        //   this.props.history
        // );
      }
    });
  };
  save = () => {
    this.props.changeConfigPageMenu("page");
  };
  cancel = () => {
    this.props.changeConfigPageMenu("page");
  };
  login = () => {};
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <React.Fragment>
        <div>
          <div style={{ background: "#ECECEC", padding: "30px" }}>
            <Row gutter={16}>
              <Col span={8} />
              <Col span={8}>
                <Card
                  style={{ textAlign: "center", marginTop: 16 }}
                  title="Login to Verifin"
                  bordered={false}
                  actions={[
                    <a className="login-form-forgot" href="">
                      Forgot password
                    </a>,
                    <Button
                      onClick={this.handleSubmit}
                      style={{ textAlign: "right" }}
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in{" "}
                    </Button>
                  ]}
                >
                  <Spin
                    tip="Loading..."
                    size="large"
                    spinning={this.props.isLoading}
                  >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                      <FormItem>
                        {getFieldDecorator("userName", {
                          rules: [
                            {
                              required: true,
                              message: "Please input your username!"
                            }
                          ]
                        })(
                          <Input
                            prefix={
                              <Icon
                                type="user"
                                style={{ color: "rgba(0,0,0,.25)" }}
                              />
                            }
                            placeholder="Username"
                          />
                        )}
                      </FormItem>
                      <FormItem>
                        {getFieldDecorator("password", {
                          rules: [
                            {
                              required: true,
                              message: "Please input your Password!"
                            }
                          ]
                        })(
                          <Input
                            prefix={
                              <Icon
                                type="lock"
                                style={{ color: "rgba(0,0,0,.25)" }}
                              />
                            }
                            type="password"
                            placeholder="Password"
                          />
                        )}
                      </FormItem>
                    </Form>
                  </Spin>
                </Card>
              </Col>
              <Col span={8} />
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
