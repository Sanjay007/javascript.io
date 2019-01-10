import { Modal, Button, Card, Row, Col } from "antd";
import React from "react";
import { connect } from "react-redux";
import { GITHUB_AUTH_URL } from "../../Constants";
export default function(props) {
  return (
    <Modal
      style={{ textAlign: "center" }}
      title={"Welcome to Frugalis"}
      mask={true}
      visible={props.visible}
      footer={null}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      <p>
        <a href={GITHUB_AUTH_URL}>
          {" "}
          <Button type="dashed" icon="github" size={25}>
            Signin With Github
          </Button>
        </a>
      </p>
      <p>
        {" "}
        <Button type="dashed" icon="facebook" size={25}>
          Signin With FaceBook
        </Button>
      </p>
    </Modal>
  );
}
