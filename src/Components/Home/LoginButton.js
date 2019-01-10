import { Input, Button } from "antd";
import React from "react";
import { connect } from "react-redux";

export default function(props) {
  return (
    <Button
      icon="user"
      style={{ marginTop: "7px", color: "#FGTR" }}
      type="dashed"
      onClick={props.openModal}
    >
      SignIn
    </Button>
  );
}
