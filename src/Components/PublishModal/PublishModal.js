import {
  Modal,
  Button,
  Card,
  Avatar,
  Select,
  Badge,
  Tooltip,
  Tag,
  Icon,
  Row,
  Col
} from "antd";
import { Link } from "react-router-dom";

import React from "react";
import { connect } from "react-redux";
import { GITHUB_AUTH_URL } from "../../Constants";
import { Icon as IC, Label } from "semantic-ui-react";

import styles from "../../Components/PublishModal/index.less";
export default function(props) {
  const Option = Select.Option;

  const children = [];
  // for (let i = 10; i < 36; i++) {
  //   children.push(
  //     <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
  //   );
  // }
  function handleChange(value) {
    let arr = value;
    if (arr.length > 5) {
      alert("We Will Store only First Five Tags");
      return false;
    }
    console.log(arr);
    console.log(`Selected: ${value}`);
  }
  return (
    <Modal
      style={{ textAlign: "center" }}
      mask={true}
      visible={props.visible}
      footer={null}
      onOk={props.handleOk}
      width={900}
      onCancel={props.handleCancel}
    >
      <Row>
        <Col span={10}>
          <Card>
            <div class="ant-card-cover">
              <img width={300} alt="example" src={props.image} />
            </div>
            <h3 style={{ fontFamily: "Roboto" }}>{props.title}</h3>

            <div class="ant-card-actions" style={{ padding: 5 }}>
              <div className="gutter-example">
                <Row gutter={16}>
                  <Col
                    style={{ width: "auto" }}
                    className="gutter-row"
                    span={4}
                  >
                    <div className="gutter-box">
                      <Tooltip title="Sanjay Yadav">
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          size={36}
                          icon="user"
                        />
                      </Tooltip>
                    </div>
                  </Col>
                  <Col
                    className="gutter-row"
                    span={6}
                    style={{ width: "auto" }}
                  >
                    <div className="gutter-box" style={{ padding: 3 }}>
                      <h6
                        style={{
                          fontSize: "8px",
                          textAlign: "left",
                          fontFamily: "Roboto"
                        }}
                      >
                        8-Jan-2018
                      </h6>
                      <h6
                        style={{
                          fontSize: "8px",
                          textAlign: "left",
                          fontFamily: "Roboto"
                        }}
                      >
                        2 min read{""}
                      </h6>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div className="gutter-box">
                      <Tooltip title="views">
                        {" "}
                        <Icon style={{ color: "#314659" }} type="eye" />{" "}
                      </Tooltip>
                      0
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div className="gutter-box">
                      <Icon style={{ color: "#314659" }} type="like" /> 0
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div className="gutter-box" />
                  </Col>
                </Row>
              </div>
            </div>
          </Card>

          {/*<Card style={{ width: 300 }} color="grey">
            <Image
              style={{ width: 300 }}
              src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            />
            <Card.Content>
              <p>
                DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
              </p>
              <Card.Meta>5 min read !</Card.Meta>
              <Card.Description>Read More Here!!</Card.Description>
            </Card.Content>
            <Card.Content extra>
              
            </Card.Content>
          </Card>*/}
        </Col>
        <Col span={12} style={{ padding: "5px" }}>
          <br />
          <h3>Prepare Your Target Audience </h3>
          <p>Select at max 5 tags </p>
          <Select
            mode="tags"
            size={22}
            placeholder="Please select"
            defaultValue={[]}
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            {children}
          </Select>
          <p />
          <Link to={"/test"} onClick={props.publishNow}>
            {" "}
            <Button
              dashed
              loading={props.buttonloading}
              icon="download"
              size={22}
            >
              Publish Now !
            </Button>
          </Link>
        </Col>
      </Row>
    </Modal>
  );
}
