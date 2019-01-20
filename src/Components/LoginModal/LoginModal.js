import { Modal, Button, Card, Row, Col } from "antd";
import React from "react";
import { connect } from "react-redux";
import { GITHUB_AUTH_URL } from "../../Constants";
import { Button as BS, Icon } from "semantic-ui-react";

export default function(props) {
  return (
    <Modal
      style={{ textAlign: "center" }}
      mask={true}
      visible={props.visible}
      footer={null}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      <BS.Group>
        <BS color="facebook">
          <Icon name="facebook" />
          Login With Facebook
        </BS>
        <BS.Or />
        <BS color="grey" onClick={props.navigateGit}>
          <Icon name="github" /> Login With Github
        </BS>
      </BS.Group>

      {/*<p>
        <a onClick={props.navigateGit}>
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
      </p>*/}
    </Modal>
  );
}
