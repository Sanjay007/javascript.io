import { Input, Card } from "antd";
import React from "react";
import { connect } from "react-redux";

export default function(props) {
  return (
    <Card style={{ minHeight: 100, background: "#f0f2f5" }}>
      <Input.TextArea
        onChange={props.onChangeUserName}
        style={{
          fontSize: "18px",
          border: "0px",
          margin: "10px",
          textAlign: "left"
        }}
        placeholder="Enter Your Posts Title"
        rows={2}
      />
    </Card>
  );
}
